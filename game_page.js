var p1name = localStorage.getItem("p1_name");
var p2name = localStorage.getItem("p2_name");

document.getElementById("player1_name").innerHTML=p1name + ":";
document.getElementById("player2_name").innerHTML=p2name + ":";
player1_score=0;
player2_score=0;
document.getElementById("p1score").innerHTML=player1_score;
document.getElementById("p2score").innerHTML=player2_score;

document.getElementById("qturn").innerHTML="Question Turn - " + p1name;
document.getElementById("aturn").innerHTML="Answer Turn - " + p2name;
function send(){
word1 = document.getElementById("word").value;
nw=word1.toLowerCase();
console.log(nw);

c1= nw.charAt(1);
console.log(c1);

len= Math.floor(nw.length/2);
 c2= nw.charAt(len);
 console.log(c2);

len_2= nw.length-1;
c3=nw.charAt(len_2);
console.log(c3);

r1= nw.replace(c1, "_");

r2= r1.replace(c2,"_");

r3= r2.replace(c3, "_");

console.log(r3);

qturn= "<h4>Q. "+ r3 +"</h4>";
aturn="<h5>Answer: <input type='text' placeholder='Enter Value' id='user_answer'></h5>";
button1= "<button class='btn btn-info' onclick='check()'>CHECK</button>"

row= qturn + aturn + button1;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="  ";



}


qt="p1"
at="p2"
function check(){
uans=document.getElementById("user_answer").value;
ans= uans.toLowerCase();
console.log(ans);

if (nw == ans){
    if (at=="p1"){
        player1_score= player1_score + 1;
        document.getElementById("p1score").innerHTML=player1_score;
    }

    else{
        player2_score= player2_score + 1;
        document.getElementById("p2score").innerHTML=player2_score;
    }

    
}

if (qt=="p1"){
    qt="p2";
    document.getElementById("qturn").innerHTML="Question Turn - " + p2name;
}

else if (qt == "p2"){
qt="p1";
document.getElementById("qturn").innerHTML="Question Turn - " + p1name;
}

if (at=="p1"){
    at="p2";
    document.getElementById("aturn").innerHTML="Answer Turn - " + p2name;
}

else if (at == "p2"){
at="p1";
document.getElementById("aturn").innerHTML="Answer Turn - " + p1name;
}

document.getElementById("output").innerHTML=" ";

}
