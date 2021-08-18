player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name +" : ";
document.getElementById("player2_name").innerHTML=player2_name +" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;

function Send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    cat1=word.charAt(1);
    console.log(cat1);
    length_half=Math.floor(word.length/2);
    cat2=word.charAt(length_half);
    console.log(cat2);
    length_last=word.length-1;
    cat3=word.charAt(length_last);
    console.log(cat3);
    remove_cat1=word.replace(cat1,"_");
    console.log(remove_cat1);
    remove_cat2=remove_cat1.replace(cat2,"_");
    console.log(remove_cat2);
    remove_cat3=remove_cat2.replace(cat3,"_");
    console.log(remove_cat3);

    question="<h4 id='word_display'> Q."+remove_cat3+" </h4>";
    Answer="<br> Answer:   <input type='text' id='input_check_box'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check  </button>"
    row=question+Answer+check_button;
    document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
    

}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player2"){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;


        }

        else if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            

        }

    }
    if(answer_turn=="player2"){
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
        
    }
    else{
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;   
    }
    if(question_turn=="player2"){
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
        
    }
    else{
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;   
    }
    document.getElementById("output").innerHTML="";
}
