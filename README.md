🙏 Thanks To https://github.com/Project-Sloth
This script is inspired by https://github.com/Project-Sloth/ps-ui

# ads_notify
A simple and flexible notification system that works with any framework (ESX, QBCore, QBOX, etc). 

## 🧪 Client-Side Example
Use these commands in your client script to test different notification types:
```exports.ads_notify:Notify(tittle, dekscription, type, duration)```

```lua
RegisterCommand('inform', function()
    -- Client-side 'inform' notification
    exports.ads_notify:Notify('MOMOKNYO', 'Notify inform Notify inform Notify inform', 'inform', 5000)
end)

RegisterCommand('success', function()
    -- Client-side 'success' notification
    exports.ads_notify:Notify('MOMOKNYO', 'Notify success Notify success Notify success', 'success', 5000)
end)

RegisterCommand('error', function()
    -- Client-side 'error' notification
    exports.ads_notify:Notify('MOMOKNYO', 'Notify error Notify error Notify error', 'error', 5000)
end)
```

## 🛠️ Server-Side Example
Trigger notifications to specific players from the server:
```TriggerClientEvent('ads_notify:Notify', source, title, description, type, duration)```

```lua
RegisterCommand('s_inform', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Info'
    local description = args[3] or 'An informational message from the server.'
    local duration = tonumber(args[4]) or 5000

    if targetId then
        TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'inform', duration)
    end
end, false)

RegisterCommand('s_success', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Success!'
    local description = args[3] or 'A successful event has occurred on the server.'
    local duration = tonumber(args[4]) or 4000

    if targetId then
        TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'success', duration)
    end
end, false)

RegisterCommand('s_error', function(source, args, rawCommand)
    local targetId = tonumber(args[1])
    local title = args[2] or 'Server Error!'
    local description = args[3] or 'An error occurred on the server. Please check logs.'
    local duration = tonumber(args[4]) or 7000

    if targetId then
        TriggerClientEvent('ads_notify:Notify', targetId, title, description, 'error', duration)
    end
end, false)
```
![image](https://github.com/user-attachments/assets/341b9299-1165-4527-9548-a75a6f110db3)
