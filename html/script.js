document.addEventListener('DOMContentLoaded', () => {
    const notifContainer = document.querySelector('.notif-container');

    // Configuration for notification types
    const Config = {
        success: {
            background: 'rgba(57, 163, 31, 0.9)',
            border: '2px solid rgba(55, 197, 19, 0.9)',
        },
        error: {
            background: 'rgba(181, 82, 85, 0.9)',
            border: '2px solid rgba(160, 70, 70, 0.9)',
        },
        inform: {
            background: 'rgba(51, 112, 165, 0.9)',
            border: '2px solid rgba(45, 100, 150, 0.9)',
        },
    };

    window.addEventListener('message', (event) => {
        const data = event.data;

        if (data.action === 'notify') {
            const { title, description, type, duration } = data;

            // Validate type and set default
            const validTypes = ['success', 'error', 'inform'];
            const notificationType = validTypes.includes(type) ? type : 'inform';

            if (!title && !description) {
                console.warn('ads_notify: Notification received without title or description.');
                return;
            }

            const notificationWrapper = document.createElement('div');
            notificationWrapper.className = `notification ${notificationType}`;

            const config = Config[notificationType];
            notificationWrapper.style.backgroundColor = config.background;
            notificationWrapper.style.border = config.border;

            if (title) {
                const titleElement = document.createElement('div');
                titleElement.className = 'title';
                titleElement.textContent = title;
                notificationWrapper.appendChild(titleElement);
            }

            if (description) {
                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'description'; // Changed from .desc
                descriptionElement.textContent = description;
                notificationWrapper.appendChild(descriptionElement);
            }

            notifContainer.appendChild(notificationWrapper);

            // Trigger the "show" animation
            setTimeout(() => {
                notificationWrapper.classList.add('show');
            }, 50); // Small delay to ensure CSS applies before animation

            // Auto-remove with "hide" animation after duration
            setTimeout(() => {
                notificationWrapper.classList.remove('show');
                notificationWrapper.classList.add('hide');
                // Remove element completely after hide animation
                notificationWrapper.addEventListener('animationend', () => {
                    notificationWrapper.remove();
                }, { once: true }); // Ensure listener is removed after first use
            }, duration);
        }
    });
});