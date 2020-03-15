/*
Choosey Life Game pseudo code test 1: Balancing out the Life Points!

***** Goals *****

1- Balancing option's point system to make sense towards its max total. 
2- Logging result of sum or substraction of points.
3- Determinating a minimum and max amount of points reached by end of storyline.
Note for #3: the max and min amount of points won't be determined till all options are constructed.
Therefore, the ultimate score will absolutely need to be modified, because 200 will most likely be surpassed.

//example where the options return values going from 1 to 100 points, and the total of the first 3 sections: health, parenting, and economic background lead to 100 points: 

//now testing Starting Phase which total will = up to 25 points?
// virtue = max of 25 points <-- new addition.
// parenting= max of 25 points
// health = max of 25 points
// economic background= max of 25 points

// We now have a cap of 100 points max for the Baby phase. Which means that if EACH phase's total output has a max of 25 points, total starting Life Points will not pass 100. 

//let A= Perfect parental situation. =  25 points
//let B= Decent situation. = 20 points
//let C=Not the best= 15 points
//let D=Truly sad= 10 points

Changes made to points system:
  1- 'Virtue' was added so that each section would give us 25 EVEN points towards 100 starting Life Points, because 4/100 = 25
  2- If the lowest option for each of the 4 starting sections is worth 10 points, then the minimum amount of points for overall starting Life Points is definetly 40. because 4*10=40.

  Goals achieved:
  1- Balanced and determined that the Baby Phase will have 4 determining factors in which each one will output a max of 25 points and minimum of 40 points towards total Baby Phase aka Starting Points.

  ****==== Baby Phase is now changed to be worth from 40-100 points. ====******
  
 */

/* Testing: calling text values for Baby Phase: Parents */

/*

function switchOfBabyPhase(parents) {
    let answer=" ";
    let parents= document.getElementById("display").value;
    switch(parents) {
        case 'a':
        text=("You were born on a rainy Sunday night. Your parents are a couple of loving people. Your father is very dotting and spends a lot of time with you, and your mother cooks the best meals and likes to stroll you around the park. You have a very large and loud family including three sisters, two brothers, a cat, and a dog. ");
        break;

        case 'b':
        text=("Your father--may he rest in peace--died fighting a never ending war miles and miles away from home. He has left you an encouraging letter written during his last days when he learned his chances of survival weren't good. On this insanely hot summer afternoon, your mother reads it aloud to soothe your newborn cries. Your mother will have to be both the breadwinner and the emotional pillar of your early years. Your extended family is excited to have you around and they say you resemble your late father.");
        break;

        case 'c':
        text=("Your parents are unknown to you. On this sunny Tuesday in Autumn, you were born in a church-ran orphanage and will have to be raised by the nuns residing in the convent. Your new siblings from another mother, rejoice in the playground. Your early years will be strict and religious, yet safe.");
        break;

        case 'd':
       text=("Today is March, friday the 13th. It is thundering outside and your crackhead mother has just traded you for a box of menthols. The old lady who takes you into adoption was once her highschool teacher. Who is your father? Only the heavens know! You will never hear from your biological parents again, but at least you are brought into a home where a baby was truely a miracle. You will most likely be spoiled rotten.")
        break;

        default:
        text=("Please choose an option.");
        break;
     
    }
    document.getElementById("parents").innerHTML=text;
}
*/

/* testing output of text values */

// return answer; --- answer not defined 
//console.log(switchOfBabyPhase.parents(a));      ---parents not defined
//console.log(switchOfBabyPhase(parents(a)));     ---- parents not defined
//console.log(switchOfBabyPhase(a));   --- a not defined
//tried outside and inside function

//PROBLEM: not being able to console log or call a case answer!
//not getting error but also not getting output, linked to html to see if anything goes on in there
// function shows up in web console although not by calling.
// trying if else statement perhaps? <-- to be tried next!

//another approach using objects? 

/*
const parentsInLifeStart = [ {

    scenario: "Today is your birthday! Welcome to out big and confussing world. Let's find out who your parents are.",

    options: {
        a:"You were born on a rainy Sunday night. Your parents are a couple of loving people. Your father is very dotting and spends a lot of time with you, and your mother cooks the best meals and likes to stroll you around the park. You have a very large and loud family including three sisters, two brothers, a cat, and a dog. ",

        b:"Your father--may he rest in peace--died fighting a never ending war miles and miles away from home. He has left you an encouraging letter written during his last days when he learned his chances of survival weren't good. On this insanely hot summer afternoon, your mother reads it aloud to soothe your newborn cries. Your mother will have to be both the breadwinner and the emotional pillar of your early years. Your extended family is excited to have you around and they say you resemble your late father.",

        c:"Your parents are unknown to you. On this sunny Tuesday in Autumn, you were born in a church-ran orphanage and will have to be raised by the nuns residing in the convent. Your new siblings from another mother, rejoice in the playground. Your early years will be strict and religious, yet safe.",

        d:"Today is March, Friday the 13th. It is thundering outside and your crackhead mother has just traded you for a box of menthols. The old lady who takes you into adoption was once her highschool teacher. Who is your father? Only the heavens know! You will never hear from your biological parents again, but at least you are brought into a home where a baby was truely a miracle. You will most likely be spoiled rotten.",
    }
    
}];
console.log(parentsInLifeStart.options.a)
*/

//objects won't work either
// find an example of existing similar method next day

//REMINDERS!
//
//let A= Perfect parental situation. =  25 points
//let B= Decent situation. = 20 points
//let C=Not the best= 15 points
//let D=Truly sad= 10 points

// reference from  the Objects Workshop
/* COME BACK TO THIS LATER WE'RE STUCK AGAIN T_T


const user1 = {
    name: " ",
    score: 0,
    increment: function() {
        chooseParents.score++         // decrement with score--
    }
}


const chooseParentsA = {
    score: 25,
    increment: function addPoints() {
        user1.score++       // decrement with score--
    }
}
//user1.increment() // => 1
console.log(user1.score + chooseParents.score++);

const chooseParentsB = {
    score: 20,
    increment: function addPoints() {
        user1.score++       // decrement with score--
    }
}
//user1.increment() // => 1
console.log(user1.score + chooseParents.score++);
*/

//trying out putting everything in its own function

// BEGINING TUTORIAL please look back for reference"
// https://simplestepscode.com/javascript-quiz-tutorial/
// https://simplestepscode.com/javascript-quiz-tutorial/#step1

// this following code is not my work, I repeat: following a tutorial with hopes of finding a way to implement scores and storylines. 

/*
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

// Step 3: On submit, show the results

// We'll need to fill out our showResults function to show the results of our quiz.

// Here's how our JavaScript logic will look:

//     For each question, find the selected answer
//     If the answer is correct, respond accordingly
//     If the answer is wrong, respond accordingly
//     Show the number of correct answers out of the total

// And here's the JavaScript to show the results of our quiz:

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

//Note that the submitButton variable comes from our original generateQuiz function as one of the parameters.

*/

//decided to try something else but we might come back to this tutoral! It was just too confusing.

/* ================================================ */
// new method up next!
//functions and objects!
//following youtube tutorial on how to use eventListener with button options for any text based game
// youtube link: https://www.youtube.com/watch?v=R1S_NhKkvGA&t=668s

//TEXT AND BUTTONS OUTPUT
const textElement= document.getElementById('text')
const optionButtons=document.getElementById('option-buttons')
 
//RUNING GAME: there will be an overall function running my game, and a state which I will try to use to log points per scenario option? let's see if that works for states tho

function startGame() {
state= {}
showTextNode(a)

}

//for text to pair up according to its ID, example chooseParents, chooseHealth etc. for start up phase
function showTextNode(textNodeIndex) {
  const textNode = textnodes.find(textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while(optionsButtons.firstChild) {
      optionsButtons.removeChild(optionsButtons.firstChild)  //this should help prevent players from clicking other options
  }
}

//for each element, show it's option when clicked. so each click is first showing options for the buttons, which calls out for a click and then an output

// if I get stuck check function below

textNode.options.forEach(element => {
    if (showOption(option)){
        const button = document.createElement('button')
        button.innerText=option.text
        button.classList.add('btn')
        button.addEventListener ('click',() => selectOption(option) )
        optionButtons.appendChild(button)
    }
});

// selecting a b c d
function selectOption(option) {

}

// text to be outputed for chooseParents scenario

// I LEFT OFF HERE!!!!!! saturday 7pm. 

//there's a syntax error in const textNodes that needs fixing asap! before moving on to next scenario

const textNodes = [ 
    id: chooseParents,
    text:"Today is your birthday! Welcome to out big and confussing world. Let's find out who your parents are.",
    
    options [ { 
         //this is option a
         text: 'Your parents are unknown to you. On this sunny Tuesday in Autumn, you were born in a church-ran orphanage and will have to be raised by the nuns residing in the convent. Your new siblings from another mother, rejoice in the playground. Your early years will be strict and religious, yet safe.',
        setState: {pointsAdded:15}, // add points sound later maybe?
        nextText: b,

    },
    {  //option b
        text:'Your father--may he rest in peace--died fighting a never ending war miles and miles away from home. He has left you an encouraging letter written during his last days when he learned his chances of survival weren\'t good. On this insanely hot summer afternoon, your mother reads it aloud to soothe your newborn cries. Your mother will have to be both the breadwinner and the emotional pillar of your early years. Your extended family is excited to have you around and they say you resemble your late father.',
        setState: {pointsAdded:20},
        nextText: c,
    },
   
    {   //option c
        text: "You were born on a rainy Sunday night. Your parents are a couple of loving people. Your father is very dotting and spends a lot of time with you, and your mother cooks the best meals and likes to stroll you around the park. You have a very large and loud family including three sisters, two brothers, a cat, and a dog. ",
        setState: {pointsAdded:25},
        nextText: d,
    },
   { //option d
       text:"Today is March, Friday the 13th. It is thundering outside and your crackhead mother has just traded you for a box of menthols. The old lady who takes you into adoption was once her highschool teacher. Who is your father? Only the heavens know! You will never hear from your biological parents again, but at least you are brought into a home where a baby was truely a miracle. You will most likely be spoiled rotten.",
       setState: {pointsAdded:10},
   }
   

]
]
