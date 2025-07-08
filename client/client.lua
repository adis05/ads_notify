local function Notify(title, description, type, duration)
    type = type or 'inform' -- 'inform', 'success', 'error'
    duration = duration or 4000 -- Default duration in milliseconds
    SendNUIMessage({
        action = 'notify',
        title = title,
        description = description,
        type = type,
        duration = duration
    })
end
exports('Notify', Notify)

RegisterNetEvent(("%s:Notify"):format(GetCurrentResourceName()), Notify)


RegisterCommand('inform', function()
    --this is exemple for client side notif type 'inform'
    exports.ads_notify:Notify('MOMOKNYO', 'Notify inform Notify inform Notify inform', 'inform', 10000)
end)

RegisterCommand('success', function()
    --this is exemple for client side notif type 'success'
    exports.ads_notify:Notify('MOMOKNYO', 'Notify success Notify success Notify success', 'success', 10000)
end)

RegisterCommand('error', function()
    --this is exemple for client side notif type 'error'
exports.ads_notify:Notify('MOMOKNYO', 'Notify error Notify error Notify error', 'error', 10000)
end)