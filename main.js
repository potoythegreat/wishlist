var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', checkItem);


function checkItem(e){
    if(e.target.classList.contains('list-group-item')) {
        e.target.classList.toggle('checked');
    }
}

function addItem(e){
    e.preventDefault();

    //create element li
    var li = document.createElement('li');
    li.className = 'list-group-item';
    var newItem = document.getElementById('item').value;
    var itemTitle = document.createElement('span');
    //add new 'item' to newly created li
    itemTitle.appendChild(document.createTextNode(newItem));
    li.appendChild(itemTitle);
    //create element deleteBtn
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.className = 'delete';
    //add deleteBtn to li
    li.appendChild(deleteBtn);
    //add li to itemList
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}