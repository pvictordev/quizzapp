
const questions = [
    {
        question: "Who is Pied Piper founder ?", 
        answers: [
            {text: 'Bill Gates', correct: false}, 
            {text: 'Richard Hendricks', correct: true}, 
            {text: 'Larry Page & Sergey Brin', correct: false}, 
            {text: 'Victor Purice', correct: false}, 

        ]
    }, 
    {
        question: 'Why the region in Northern California that serves as a global center for high technology and innovation is called "Silicon Valley" ?', 
        answers: [
            {text: 'Because it is originally derived from the region with large number of silicon chip manufacturers', correct: true}, 
            {text: 'Because there are many plastic surgeons in this region', correct: false}, 
            {text: 'Because silicone was created there', correct: false}, 
            {text: 'Because this name is memorable', correct: false}, 

        ]
    }, 
    {
        question: "In which year JavaScript was created ?", 
        answers: [
            {text: '1990', correct: false}, 
            {text: '2011', correct: false}, 
            {text: '1995', correct: true}, 
            {text: '2003', correct: false}, 

        ]
    }, 
    {
        question: "What is Gary McKinnon known for ?", 
        answers: [
            {text: 'He created internet', correct: false}, 
            {text: 'He developed ChatGPT', correct: false}, 
            {text: 'He is a goood cyber security expert', correct: false}, 
            {text: 'He hacked NASA computers', correct: true}            

        ]
    },
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");
const btns = document.querySelectorAll(".btn");


//start of the quiz
let quests = [];
let answersArr = [];
let answs = [];

function startQuiz() {
    nextButton.style.display = 'none'

    //getting questions
    questions.forEach(elems => {
        quests.push(elems.question);    

    })
    
   
    //getting the answers
    for(i = 0; i< questions.length; i++) {
        answersArr.push(questions[i].answers)

        for(j = 0; j< answersArr[i].length; j++) {
            answs.push(answersArr[i][j]);
        }
    }

    //first question
    questionElement.innerHTML = quests[0];
    nextButton.innerHTML = 'Next'


    //first answers
    for(i = 0; i<btns.length; i++) {
        btns[i].innerHTML = questions[0].answers[i].text

    }

    
}
startQuiz()


//hover
function hover() {
    for(const hoverbtn of answerButton.children) {
        console.log(hoverbtn)

        hoverbtn.addEventListener("mouseover", (event) => {
            hoverbtn.style.background = "rgb(255, 213, 0)";
            hoverbtn.style.color = "#fff";
            hoverbtn.style.transition = "all 0.1s"
        })

        hoverbtn.addEventListener("mouseout", () => {
            hoverbtn.style.background = "#fff"; 
            hoverbtn.style.color = "#000"; 
            hoverbtn.style.transition = "all 0.1s"
        })
        
    }
}
hover(); 




   //next question
   let questionIndex = 1;
   let answerIndex = 1;
  
    
   nextButton.onclick = () => {
        nextButton.style.display = 'none'
        questionElement.innerHTML = quests[questionIndex++];

   //next answers
       if(answerIndex < quests.length) {
           for(i = 0;i< btns.length; i++) {
               btns[i].innerHTML = questions[answerIndex].answers[i].text; 
           }
           answerIndex++   
           
       }

       
   } 
   

    // true or false
    let score = 0; 
    for(const btnElems of answerButton.children) {
      
        btnElems.onclick = () => {
        
            btnElems.style.background = 'red';
            btnElems.style.color = '#fff';
            nextButton.style.display = 'block'

            for(i = 0; i< btns.length; i++) {
                btns[i].disabled = true; 
                
            }


            for(i = 0; i< answs.length; i++) {  
                
                if(btnElems.innerHTML == answs[i].text && answs[i].correct) {
                    btnElems.style.background = 'rgb(21, 162, 21)';
                    btnElems.style.color = '#fff';
                    score++
                }
               
                
            }
           
        }

        nextButton.addEventListener('click', () => {
            btnElems.style.background = '#fff';
            btnElems.style.color = '#000';

            for(i = 0; i< btns.length; i++) {
                btns[i].disabled = false
               
                
            }
            
            if(questionIndex > questions.length) {
                questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`

                nextButton.style.display = 'block'
                answerButton.style.display = 'none'; 
                nextButton.innerHTML = 'Play Again';  
            
            }  
            //restart the quiz
            if(questionIndex > questions.length + 1) {
                location.reload()
            }
            
        })  
        
    }
   





