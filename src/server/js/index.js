const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
{
	question: "What kind of a person are you?",
  answers: {
  a: "Mysterious",
  b: "Hilarious",
  c: "Introvert"
  },

},
{
	question: "Which animal is your favorite?",
  answers: {
  a: "Dog",
  b: "Dragon",
  c: "Hamster"
  },

},
{
	question: "Which country would you like to visit?",
  answers: {
  a: "Vietnam",
  b: "America",
  c: "South-Africa"
  },
},
]


const buildQuiz = () => {
		const questions = [];

    // now loop through the answers
    // always store everything in arrays, because it's easier to 				push things in to arrays and display it.

    quizQuestions.forEach((item, index) => {
    		const answers = [];

        // Now use the for loop to only get the actual answers

        // Use the for.. in loop to get a, b and c  because they're 					not strings yet and also the property of item.answers

       for (const property in item.answers) {
       // Now you are going to push html radio buttons into your 					array, which you will display later

       //Use backticks for pushing html.

  	   answers.push(`<label>
            <input type="radio" name="question${index}" 						value="${property}" class="test">
            ${property} :
            ${item.answers[property]}
          </label>`);
			}

      questions.push(`<div class="question"> ${item.question} </div>
      							<div class="answers"> ${answers.join('')} </div>
      `)

    })

    quizContainer.innerHTML = questions.join('');
  }



  const showResults = () => {
			const answersContainers = quizContainer.querySelectorAll('.answers');


      quizQuestions.forEach((item, index) => {

    // find selected answer

    // Question 1  // dus 0
    const selector0 = `input[name="question0"]:checked`;
    const userAnswer0 = document.querySelector(selector0).value;

    // Question 2
    const selector1 = `input[name="question1"]:checked`;
    const userAnswer1 = document.querySelector(selector1).value;

    // Question 3
    const selector2 = `input[name="question2"]:checked`;
    const userAnswer2 = document.querySelector(selector2).value;


  // NEW

  let casualScore = 0;
  let urbanScore = 0;
  let classyScore = 0;

   /* clothingstyles.forEach((item, index) => {
      		 if (userAnswer===item.styles.casual.answers) {

           	console.log('casuaaala')

          }  else if (userAnswer===item.styles.urban.answers)  {

        		console.log('urbaaaan')

          } else if (userAnswer===item.styles.classy.answers) {


           	console.log('claaassy')


          } else {
          		console.log('None of the combs');
          }
    }) */


     if (userAnswer0 == "a") {

       casualScore++;
       urbanScore++;
       classyScore++;

    	}  else if (userAnswer0 =="b")  {

       casualScore++;
       urbanScore++;
       classyScore++;

      } else if (userAnswer0 == "c") {

       casualScore++;
       urbanScore++;
       classyScore++;

     }

    if(userAnswer1 == "a") {
    		classyScore++;
    } else if(userAnswer1 == "b") {
    		urbanScore++;
    } else if(userAnswer1 == "c") {
    		casualScore++
    }

    if(userAnswer2 == "a") {
    		casualScore++;
    } else if(userAnswer2 == "b") {
    		classyScore++;
    } else if(userAnswer2 == "c") {
    		urbanScore++;
    }

    // Check total score

     if(casualScore > 1) {
     		console.log('Jij bent casual!');
     } else if (urbanScore > 1) {
     		console.log('Jij bent urban!');
     } else if (classyScore > 1) {
     		console.log('Jij bent classy!');
     }


    //resultsContainer.innerHTML = '';

  })

  }

 // on submit, show results

submitButton.addEventListener("click", showResults);




buildQuiz();
