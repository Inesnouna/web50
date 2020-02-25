var actQuestion = 0;
var score = 0;
var totQuestions = questions.length; /* le nombre de questions */

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var svtButton = document.getElementById('svtButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	/* Afficher la question sous forme : index question . la question */
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert(' Veuillez choisir une réponse.!');
		return;
	} 
	/* on recupére la valeur selectionnée par l'utilisateur et on la compare avec la valeur de la reponse correcte */
	var rep = selectedOption.value;
	if(questions[actQuestion].rep == rep){
		score += 1;
	/*Bonne Réponse*/		
	}
	/*Mauvaise Réponse*/
   selectedOption.checked = false
			
	/* Pour indiquer la fin du quiz */
	actQuestion++;
	if(actQuestion == totQuestions - 1){
		resultCont.textContent = 'Terminer';
	}
	if(actQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Votre Score est : ' + score+ "/10"
		if (score==10) { /* Si toutes les reponses sont justes */
			resultCont.textContent="Bravo! Vous avez répondu correctement à toutes les questions."
		};
		return;
	}
	loadQuestion(actQuestion);
}

loadQuestion(actQuestion);