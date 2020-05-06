/////////////////////////////       Selector

const testBut = document.querySelector('#startBut');
const questionnaire = document.querySelector('.questionnaire');
const préambule = document.querySelector('.préambule');
const stepper = document.querySelectorAll('.stepper h1');
const suiventBut = document.querySelector('.next');
const précédentBut = document.querySelector('.previous');
const currentquestion = document.querySelector('.question');
const answerInputs = document.querySelector('.answer-inputs');
const progressBar = document.querySelector('.bar');
const questionNumber = document.querySelector('.question__number');

/////////////////////////////////       Event

testBut.addEventListener('click', startTest);

/////////////////////////////            fuction

let currentQuestionIndex = 0;

function startTest() {
	testBut.style.display = 'none';
	précédentBut.style.visibility = 'hidden';
	préambule.style.display = 'none';
	questionnaire.style.display = 'block';
	stepper[0].classList.remove('select');
	stepper[1].classList.add('select');
	hideprevious();
	suiventBut.disabled = true;
	showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
	currentquestion.innerText = question.question;
	answerInputs.innerHTML = '';
	const inputAnswer = question.input.answer;
	const input = question.input;

	if (question.input.type === 'radio') {
		inputAnswer.forEach((answer) => {
			answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.qNumber}" id="${answer.text}">
                        <label for="${answer.text}">
                        <span>${answer.text}</span> </label>
                    </div>`;
		});
	} else {
		answerInputs.innerHTML += `<input type="number" name="${input.qNumber}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`;
	}
}

function hideprevious() {
	if (currentQuestionIndex === 0) {
		précédentBut.classList.add('hide');
	} else {
		précédentBut.classList.remove('hide');
	}
}

function folowProgress(number) {
	const currentNmber = number + 1;

	questionNumber.innerText = currentNmber;
	progressBar.style.width = `calc(${currentNmber} * calc(100% / 22))`;
}

suiventBut.addEventListener('click', () => {
	if (currentQuestionIndex < 21) {
		currentQuestionIndex++;
		showQuestion(questions[currentQuestionIndex]);
		folowProgress(currentQuestionIndex);
		hideprevious();
		suiventBut.disabled = true;
		if (currentQuestionIndex === 21) {
			suiventBut.innerText = 'Terminer le test';
		} else {
			suiventBut.innerText = 'Suivant';
		}
	}
});

précédentBut.addEventListener('click', () => {
	currentQuestionIndex--;
	showQuestion(questions[currentQuestionIndex]);
	folowProgress(currentQuestionIndex);
	hideprevious();
	suiventBut.disabled = true;
	if (currentQuestionIndex === 1) {
		précédentBut.style.display = 'none';
	} else {
		précédentBut.style.display = 'block';
	}
});














const questions = [{
		question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, su' + 'eurs) ?',

		input: {
			type: 'radio',
			qNumber: 'Q1',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Quelle est votre température corporelle ?',

		input: {
			type: 'number',
			qNumber: 'Q2',
			name: 'degrés',
			min: 34,
			max: 42
		}
	},
	{
		question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habit' + 'uelle ?',

		input: {
			type: 'radio',
			qNumber: 'Q3',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

		input: {
			type: 'radio',
			qNumber: 'Q4',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Ces derniers jours, avez-vous un mal de gorge ?',

		input: {
			type: 'radio',
			qNumber: 'Q5',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles mol' + 'les.',

		input: {
			type: 'radio',
			qNumber: 'Q6',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vou' +
			's reposer plus de la moitié de la journée ?',

		input: {
			type: 'radio',
			qNumber: 'Q7',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus' + ' de 24h ?',

		input: {
			type: 'radio',
			qNumber: 'Q8',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel l' +
			'orsque vous parlez ou faites un petit effort ?',

		input: {
			type: 'radio',
			qNumber: 'Q9',
			answer: [{
					text: 'Oui',

				},
				{
					text: 'Non',

				}
			]
		}
	},
	{
		question: 'Actuellement, comment vous vous sentez ?',

		input: {
			type: 'radio',
			qNumber: 'Q10',
			answer: [{
					text: 'Bien',
				},
				{
					text: 'Assez bien',
				},
				{
					text: 'Fatigué(e)',
				},
				{
					text: 'Très fatigué',
				}
			]
		}
	},
	{
		question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

		input: {
			type: 'number',
			qNumber: 'Q11',
			name: 'ans',
			min: 15,
			max: 110
		}
	},
	{
		question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est u' +
			'n facteur influençant le risque de complications de l’infection.',

		input: {
			type: 'number',
			qNumber: 'Q12',
			name: 'kg',
			min: 20,
			max: 250
		}
	},
	{
		question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui es' +
			't un facteur influençant le risque de complications de l’infection.',

		input: {
			type: 'number',
			qNumber: 'Q13',
			name: 'cm',
			min: 80,
			max: 250
		}
	},
	{
		question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une malad' +
			'ie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologiqu' +
			'e ?',

		input: {
			type: 'radio',
			qNumber: 'Q14',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Êtes-vous diabétique ?',

		input: {
			type: 'radio',
			qNumber: 'Q15',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Avez-vous ou avez-vous eu un cancer ?',

		input: {
			type: 'radio',
			qNumber: 'Q16',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

		input: {
			type: 'radio',
			qNumber: 'Q17',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

		input: {
			type: 'radio',
			qNumber: 'Q18',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Avez-vous une maladie chronique du foie ?',

		input: {
			type: 'radio',
			qNumber: 'Q19',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Êtes-vous enceinte ?',

		input: {
			type: 'radio',
			qNumber: 'Q20',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				},
				{
					text: 'Homme',
				}
			]
		}
	},
	{
		question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

		input: {
			type: 'radio',
			qNumber: 'Q21',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	},
	{
		question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue ' +
			'vos défenses contre les infections. Voici quelques exemples : corticoïdes, mét' +
			'hotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non' +
			' exhaustive).',

		input: {
			type: 'radio',
			qNumber: 'Q22',
			answer: [{
					text: 'Oui',
				},
				{
					text: 'Non',
				}
			]
		}
	}
];