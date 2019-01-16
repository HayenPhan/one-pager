const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
{
	question: "Wat voor soort type persoon ben jij?",
  answers: {
  a: "Mysterieus",
  b: "Hilarisch",
  c: "Introvert"
  },

},
{
	question: "Wat is je favoriete dier?",
  answers: {
  a: "Hond",
  b: "Draak",
  c: "Hamster"
  },

},
{
	question: "Welke land zou je graag willen bezoeken als je tussen deze 3 landen mocht kiezen?",
  answers: {
  a: "Vietnam",
  b: "Amerika",
  c: "Zuid-Afrika"
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
            <input type="radio" name="question${index}" value="${property}" class="quiz__radio-button">
            ${property} .
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

			const results = [];

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
				 results.push(`
						<div class="answer__text-wrapper">
								<h2 class="answer__text"> Je hebt een casual kledingstijl! </h2>
					  </div>
						<div class="answer__image-wrapper">
								<img src="src/server/images/casual.png" class="answer__image" />
						</div>
				`)
     } else if (urbanScore > 1) {
				 results.push(`
						 <div class="answer__text-wrapper">
	 							<h2 class="answer__text"> Je hebt een urban kledingstijl! </h2>
	 				  </div>
						<div class="answer__image-wrapper">
								<img src="src/server/images/urban.png" class="answer__image" />
						</div>
				`)
     } else if (classyScore > 1) {
				 results.push(`
						 <div class="answer__text-wrapper">
								 <h2 class="answer__text"> Je hebt een classy kledingstijl! </h2>
						 </div>
						 <div class="answer__image-wrapper">
 								<img src="src/server/images/classy.png" class="answer__image" />
 						</div>
				`)
     }

    	resultsContainer.innerHTML = results.join('');

  }

 // on submit, show results

submitButton.addEventListener("click", showResults);


buildQuiz();
