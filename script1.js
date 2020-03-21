
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////                   CHALLENGE 7 WITH SOLUTION



/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


//////////////////////////////////////////////////////////////USING ARRAY METHOD (second failed attempt)
/*
var question = [ 'Is Javascript the coolest programming language in the world?', 'Why are generators rated in kva not kw?', 'What is Power Factor?', 'Why does a rotor runs star and delta connection?', 'Do you love coding?' ];


//for(var i = 0; i <= question.length; i++) {};
//var random = Math.floor(Math.random() * 5);
//console.log(random);
//console.log(question[random]);


function QaA(){

    
    if(random == 0) {

console.log(0 + ': ' + ' Yes!'); // CORRECT
console.log(1 + ': ' + ' No!');

    } else if(random == 1){
        console.log(0 + ': ' + ' Because KVA is Apparent Power which means total power the generator can give out without preset PF');// CORRECT
        console.log(1 + ': ' + ' Because KW is not original power');  
    } else if(random == 2){
        console.log(0 + ': ' + 'KVA/KW');
        console.log(1 + ': ' + 'KW/KVA');// CORRECT
        console.log(2 + ': ' + 'KVA/KVAR');
    } else if(random == 3){
        console.log(0 + ': ' + 'To save cost');
        console.log(1 + ': ' + 'To balance power factor');
        console.log(2 + ': ' + 'To balance running current and voltage');// CORRECT
} else {
    console.log(0 + ': ' + 'Maybe');
    console.log(1 + ': ' + 'Not sure');
    console.log(2 + ': ' + 'It\'s hard');
    console.log(3 + ': ' + 'Yes');// CORRECT
}

var input = prompt('Please select the correct answer (just type the number).');
//console.log(input);


};

//QaA();

*/







//////////////////////////////////////////////////////////FUNCTION CONSTRUCTOR FOR QUESTION

(function(){

    var question = function(question, option1, option2, option3, option4) {
    
        this.Question = question;
        this.Option1 = option1;
        this.Option2 = option2;
        this.Option3 = option3;
        this.Option4 = option4;
        this.answer = function(ans){
            var Input = prompt('Please input the correct answer (input a number');
            console.log(Input); 
            if(Input == ans){
            console.log('Correct Answer!');
            } else if(Input == '' ) {
                this.answer();
            } else {
                console.log('Wrong Answer!');
            }
            };
    };
    
    
    //////////////////////////////////////////////////////////////NEW OBJECT FROM CONSTRUCTOR
    
    var number_1 = new question('Is Javascript the coolest programming language in the world?', 
    0 + ': ' + ' Yes!', // CORRECT 
    1 + ': ' + ' No!',
    );
    
    var number_2 = new question('Why are generators rated in kva not kw?', 
    0 + ': ' + ' Because KVA is Apparent Power which means total power the generator can give out without preset PF',// CORRECT 
    1 + ': ' + ' Because KW is not original power',
    );
    
    var number_3 = new question('What is Power Factor?',
    0 + ': ' + 'KVA/KW',
    1 + ': ' + 'KVAR\KVA',
    2 + ': ' + 'KW/KVA', // CORRECT
    );
    
    var number_4 = new question('Do you love coding?', 
    0 + ': ' + 'Maybe',
    1 + ': ' + 'Not sure',
    2 + ': ' + 'It\'s hard',
    3 + ': ' + 'Yes',// CORRECT
    );
    
    
    /*
    var questionArr = [ 
        number_1.Question,
        number_2.Question, 
        number_3.Question, 
        number_4.Question,
    ]; 
    
    */
    
    
    ///////////CODE TO CHOOSE RANDOM QUESTION, LOG OPTIONS, INPUT CORRECT ANSWER USING NUMBER ON THE PROMPT SCREEN AND FINALLY CONSOLE OUT IF THE INPUT ANSWER IS CORRECT OR WRONG.
    
    var random = Math.floor(Math.random() * 4);
    //var answer = (Input == ins ) ? 'Correct Answer!': 'Wrong Answer!';
        
    
    function randomDisplay(){ 
    
    if( random == 0){
        
        console.log(number_1.Question);
        console.log(number_1.Option1);// CORRECT 
        console.log(number_1.Option2);
        number_1.answer(0);
        //answer(0);
                
    } else if( random == 1){
        
        console.log(number_2.Question);
        console.log(number_2.Option1);// CORRECT 
        console.log(number_2.Option2);
        number_2.answer(0);
        //answer(0);
           
    } else if( random == 2){
        
        console.log(number_3.Question);
        console.log(number_3.Option1);
        console.log(number_3.Option2);
        console.log(number_3.Option3);// CORRECT
        number_3.answer(2);
        //answer(2); 
        
    } else if( random == 3){
    
        console.log(number_4.Question);
        console.log(number_4.Option1);
        console.log(number_4.Option2);
        console.log(number_4.Option3); 
        console.log(number_4.Option4); // CORRECT
        number_4.answer(3);
        //answer(3);
        
    }
    
    };
    
    
    ///////////CALLING A RANDOM QUESTION
    console.log(random);
    randomDisplay();
    
    
    
    ////////////FUNCTION TO CALL CORRECT ANSWER 
    
    
    ///////IIFE immediately Invoked Function Expression
    /*
    (function(ans){
    var Input = prompt('Please input the correct answer (input a number');
    console.log(Input); 
    if(Input == ans){
    console.log('Correct Answer!');
    } else {
        console.log('Wrong Answer!');
    }
    })();
    */
    
    })();