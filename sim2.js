var use_cases=["Order Food","Serve Food","Eat Food","pay for food","cook food","order wine"];
var user_use_cases=[];
function check_use_cases(y) 
{  
    var x=y.toLowerCase();
    if(arraysEqual(use_cases,user_use_cases)) <!--When all possible actors are checked it notifies the user -->
    {
        alert("You have entereed all possible use cases!"); 
        return; 
    }
    else
    {
        if(use_cases.includes(x))
        {
            alert("Correct");
            if(!user_use_cases.includes(x))
                {user_use_cases.push(x);}
        }
        else 
        {
            alert("Try again");
        }
    }      
}

function arraysEqual(a, b) 
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();
    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    return true;
}
function dragEnter(ev) {
    event.preventDefault();
    return true;
}
function dragOver(ev) {
    return false;
}
function dragDrop1(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    
    //console.log(typeof(document.getElementById(src)));
    //console.log(typeof(document.getElementById('actor1')));
    //document.getElementById(src).innerHTMl = document.getElementById(idd).value;
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor1').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}
function dragDrop2(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    
    //console.log(typeof(document.getElementById(src)));
    //console.log(typeof(document.getElementById('actor1')));
    //document.getElementById(src).innerHTMl = document.getElementById(idd).value;
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor2').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}
function dragDrop3(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    
    //console.log(typeof(document.getElementById(src)));
    //console.log(typeof(document.getElementById('actor1')));
    //document.getElementById(src).innerHTMl = document.getElementById(idd).value;
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor3').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}
function dragDrop4(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    
    //console.log(typeof(document.getElementById(src)));
    //console.log(typeof(document.getElementById('actor1')));
    //document.getElementById(src).innerHTMl = document.getElementById(idd).value;
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor4').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}

var actors=["cashier","chef","customer","waiter"];

function check_actors()
{
    var adnd=document.getElementById('ansdragndrop').getElementsByTagName('p');
    var user_actors=[];
    for(var i=0;i<adnd.length;i++)
        user_actors.push(adnd.item(i).innerHTML.toLowerCase());

    console.log(user_actors);

    if(user_actors.length!=4)
    {
        alert("Wrong Answer! Less options selected.")
        window.location.reload();
    }
    else
    {
        if(arraysEqual(user_actors, actors))
        {
            alert("RIGHT ANSWER!");
        }
        else
        {
            alert("Wrong answer! Reattempt.");
            window.location.reload();
        }
    }
}