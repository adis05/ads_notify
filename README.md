# ads_notify
A simple and flexible notification system that works with any framework (ESX, QBCore, QBOX, etc). 

# EXEMPLE FOR CLIENT SIDE
RegisterCommand('inform', function()
    --this is exemple for client side notif type 'inform'
    exports.ads_notify:Notify('MOMOKNYO', 'Notify inform Notify inform Notify inform', 'inform', 5000)
end)

RegisterCommand('success', function()
    --this is exemple for client side notif type 'success'
    exports.ads_notify:Notify('MOMOKNYO', 'Notify success Notify success Notify success', 'success', 5000)
end)

RegisterCommand('error', function()
    --this is exemple for client side notif type 'error'
exports.ads_notify:Notify('MOMOKNYO', 'Notify error Notify error Notify error', 'error', 5000)
end)

## EXEMPLE FOR SERVER SIDE
RegisterCommand('s_inform', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Info'
    local description = args[3] or 'An informational message from the server.'
    local duration = tonumber(args[4]) or 5000
    if not targetId then
        return
    end

    --this is exemple for server side notif type 'inform'
    TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'inform', duration)

end, false)

RegisterCommand('s_success', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Success!'
    local description = args[3] or 'A successful event has occurred on the server.'
    local duration = tonumber(args[4]) or 4000
    if not targetId then
        return
    end

    --this is exemple for server side notif type 'success'
    TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'success', duration)

end, false)

RegisterCommand('s_error', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Error!'
    local description = args[3] or 'An error occurred on the server. Please check logs.'
    local duration = tonumber(args[4]) or 7000
    if not targetId then
        return
    end

    --this is exemple for server side notif type 'error'
    TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'error', duration)

end, false)
![image](https://github.com/user-attachments/assets/341b9299-1165-4527-9548-a75a6f110db3)
