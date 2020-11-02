function init()
{
    var $=go.GraphObject.make;
    myDiagram =  $(go.Diagram, "myDiagramDiv");
    var nodeDataArray=[

    {"category":"Comment", "loc":"360 -10", "text":"<<Rule>>\n If baggage>=15kg", "key":-13},
        {"key":1,"loc":"40 0", "text":"Group"},
        {"key":2,"loc":"20 20", "text":"Passenger"},
        {"key":3,"loc":"10 10", "text":"Individual"},
        {"key":4,"loc":"30 30", "text":"Individual with special needs"},
        {"key":5,"loc":"100 50", "text":"Kiosk"},
        {"key":6,"loc":"-10 50", "text":"Booking clerk"},
        {"key":7,"loc":"", "text":"Check in"},
        {"key":8,"loc":"", "text":"Validate PNR"},
        {"key":9,"loc":"", "text":"Validate ID"},
        {"key":10,"loc":"", "text":"Special needs"},
        {"key":11,"loc":"", "text":"Check weights"},
        {"key":12,"loc":"", "text":"Calculate overweight charges"},
        {"key":13,"loc":"", "text":"Print boarding pass"},

    ];
    var linkDataArray=[
        {from:"1",to:"2",color:"red"},
        {from:"2",to:"7",color:"red"},
        {from:"2",to:"9",color:"red"},
        {from:"2",to:"13",color:"red"},
        {from:"3",to:"2",color:"red"},
        {from:"4",to:"2",color:"red"},
        {from:"5",to:"7",color:"red"},
        {from:"6",to:"9",color:"red"},
        {from:"6",to:"10",color:"red"},
        {from:"6",to:"11",color:"red"},
        {from:"6",to:"13",color:"red"},
        {from:"7",to:"8", dash:[ 2,4 ], text:"<<includes>>"},
        {from:"11",to:"12", dash:[ 2,4 ], text:"<<extends>>"}    
    ];
myDiagram.model=new go.GraphLinksModel(nodeDataArray,linkDataArray);

myDiagram.nodeTemplate=$(
                            go.Node,'Auto',
                            new go.Binding("location", "loc", go.Point.parse),
                            $(go.Shape,"RoundedRectangle",{fill:"white"}),
                            $(go.TextBlock,"text",{margin:10},new go.Binding("text","text"))
                        );
                       

myDiagram.linkTemplate=$(
                            go.Link,
                            $(go.Shape, {strokeWidth:3},new go.Binding("stroke","color")),
                            $(go.Shape,{toArrow:"Standard",stroke:null},new go.Binding("fill","color"))
                        );


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

var actors=["group","passenger","individual","individual with special needs","kiosk","booking clerk"];
var user_actors=[];

function checkactor(y)
{  
    var x=y.toLowerCase();
    if(arraysEqual(user_actors,actors)) <!--When all possible actors are checked it notifies the user -->
    {
        alert("You have entereed all possible actors!");
        return;
    }
    else
    {
        if(actors.includes(x))
        {
            alert("Correct");
            if(!user_actors.includes(x))
                {user_actors.push(x);}
        }
        else 
        {
            alert("Try again");
        }
    }
}

var use_cases=["Check-in","Validate PNR","Validate ID","special needs","Check weights","Calculate overweight charges","Print boarding pass"];
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

