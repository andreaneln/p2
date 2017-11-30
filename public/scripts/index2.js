var REST_DATA = 'api/plans';
var defaultItems = [
    
    ];
var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

// adding an item to the table displaying data from dB
function addItem(item) {
    
        var row = document.createElement('tr');
        row.className = "tableRows";
        var id = item && item.id;
        if (id) {
            row.setAttribute('data-id', id);
        }
    

        row.innerHTML = "<td>"+item.value+"</td>";
    // Likely could have defined more variables to display more characteristics of the plans
        var table = document.getElementById('plans');
        table.lastChild.appendChild(row);
    }
    
function loadItems() {
    xhrGet(REST_DATA, function(data) {        
        var receivedItems = data || [];

        console.log(data);

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
        for (i = 0; i < items.length; ++i) {
            addItem(items[i]);
        }

    }, function(err) {
        console.error(err);
    });
}

//call the loadItems function

loadItems();
