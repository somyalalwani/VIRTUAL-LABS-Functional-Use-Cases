var use_cases=["Order Food","Serve Food","Eat Food","pay for food","cook food","order wine"];
var user_use_cases=[];
var usecasesForDiag = new Array();
var actorsForDiag = new Array();
var relDict = [];
var actorNodeDataArray = new Array();
var usecaseNodeDataArray = new Array();
var linkDataArray = new Array();


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


//helper functions for drag and drop functionality
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
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor1').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}

function dragDrop2(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor2').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}

function dragDrop3(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor3').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}

function dragDrop4(ev) {
    ev.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    document.getElementById('actor4').innerHTML = document.getElementById(src).innerHTML;
    ev.stopPropagation();
    return false;
}

//check if the user has done it right 
var actors=["cashier","chef","customer","waiter"];

function check_actors()
{
    var adnd = document.getElementById('ansdragndrop').getElementsByTagName('p');
    var user_actors = [];
    for(var i = 0;i < adnd.length;i++)
        user_actors.push(adnd.item(i).innerHTML.toLowerCase());

    if(user_actors.length != 4)
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

var linkDataArray=new Array();
//draw the diagram 
function init()
{
    var $ = go.GraphObject.make;
    myDiagram =  
        $(go.Diagram, "myDiagramDiv", 
            {
                layout: $(TableLayout,
                $(go.RowColumnDefinition, { column: 1, width: 300}))
            });
    var i;
    for(i = 0; i < actorsForDiag.length; i++) {
        actorNodeDataArray.push(
            { key: actorsForDiag[i], category: "actor", text:actorsForDiag[i], img:"actor.png", col:0,row:2*i+1}
        );
    }
    for(i = 0; i < usecasesForDiag.length; i++) {
        usecaseNodeDataArray.push(
            { key: usecasesForDiag[i], category: "usecase", text:usecasesForDiag[i], col:1,row:i}
        );
    }

    var nodeDataArray = actorNodeDataArray.concat(usecaseNodeDataArray);

    myDiagram.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);

    var nodeTemplate = $(go.Node,'Auto',
                        new go.Binding("location", "loc", go.Point.parse),
                        $(go.Shape,"Ellipse",{fill:"lightgreen"}),
                        $(go.TextBlock,"text",{margin:10}, new go.Binding("text","text")),
                        {margin:10},
                        new go.Binding("row"),
                        new go.Binding("column", "col")
                        );
                           
    myDiagram.linkTemplate =
        $(go.Link, go.Link.Bezier, { reshapable: true }, 
            $(go.Shape, new go.Binding("strokeDashArray","dash")),
            $(go.Shape, {toArrow: "Standard", fill: "black"}),
            $(go.TextBlock, new go.Binding("text", "text"))
        );

    var actorTemplate = $(go.Node, "Vertical",
            $(go.Picture,{ maxSize: new go.Size(60, 100) },
            new go.Binding("source", "img")),
            $(go.TextBlock, new go.Binding("text", "text")),
            {margin:10},
            new go.Binding("row"),
            new go.Binding("column", "col")
    );

    var tempmap = new go.Map();
    tempmap.add("actor", actorTemplate);
    tempmap.add("usecase", nodeTemplate);
    myDiagram.nodeTemplateMap = tempmap;

}

//add usecases to its array
function add_usecase(usecase) {
    var x = usecase.toLowerCase();
    usecasesForDiag.push(x);
    document.getElementById('usecase_diag').value = '';
    confirm("usecase added");

}

//add actors to its array
function add_actor(actor) {
    var x = actor.toLowerCase();
    actorsForDiag.push(x);
    document.getElementById('actor_diag').value = '';
    confirm("actor added");
}

//add relationship to its array
function add_relationship(_from,_to,_rel) {
    _rel="<<"+_rel+">>";
    if(actorsForDiag.includes(_from)||usecasesForDiag.includes(_from))
    {
        if(actorsForDiag.includes(_to)||usecasesForDiag.includes(_to))
        {
            if(actorsForDiag.includes(_from)||actorsForDiag.includes(_to)||_rel=="normal")
                linkDataArray.push({from:_from, to:_to});
            else
                linkDataArray.push({from:_from, to:_to, text:_rel, dash:[5,2]});
        }
    }
    alert("Relationship added!");
}