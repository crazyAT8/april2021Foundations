function newItem(){
    //need to grab what the user actual types in
    //this is assigning the users input value to the variable named item.
    var item = document.getElementById("input").value;
    

    //this is assigning the HTML ul to the JS variable named ul
    var ul = document.getElementById("list")

    //creating an li element in HTML and assigning it to a variable named li
    var li = document.createElement("li");

    //append child method is taking the value of our item(input value) and placing it inside of our li with the text node of "-"
    //so this will display "- item"
    li.appendChild(document.createTextNode(" - " + item));

    //this is placing our li inside of our ul
    ul.appendChild(li);

    document.getElementById("input").value = "";

    //this gets rid of the list item when you click on it
    li.onclick = removeItem;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        newItem();
    }
};

function removeItem(e){
    e.target.parentElement.removeChild(e.target);
}

function addTwoNums(num1, num2){
    console.log(num1 + num2);
}

addTwoNums(2,3);