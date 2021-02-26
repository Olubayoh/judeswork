function showTextboox()
{
    document.getElementById("form").style.display="block";
}
var button=document.getElementById("add_note");
button.onclick=showTextboox;

function addNote()
{
    var note_header=document.getElementById("header").value;
    var note_body=document.getElementById("body-text").value;
    
    const note= document.createElement("li")
    note.className="note_added";
    note.id="note_added";
    note.innerHTML=note_header + "<br>" + "<br>" + note_body;
   document.body.appendChild(note);
   
    document.querySelector("ul.collection").appendChild(note);
    
   
}

var create_note=document.getElementById("create_note");
create_note.onclick=addNote;





