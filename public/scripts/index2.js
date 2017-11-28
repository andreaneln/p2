var REST_DATA = 'api/plans';
var defaultItems = [
    
    ];
var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}
    
function loadItems() {
    xhrGet(REST_DATA, function(data) {        
        var receivedItems = data || [];
        var items = [];
        var i;
        // Make sure the received items have correct format
        for (i = 0; i < receivedItems.length; ++i) {
            var item = receivedItems[i];
            if (item && 'id' in item) {
                items.push(item);
            }
        }
        var hasItems = items.length;
        if (!hasItems) {
            items = defaultItems;
        }
        

    }, function(err) {
        console.error(err);
    });
}

//updateServiceInfo();
loadItems();
