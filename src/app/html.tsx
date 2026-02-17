//  to do 
// make the rest of the options plus conditionaly render on the main page
//try to make score server side not client
 'use client'
    import { useState } from "react"
    export default function Html(){
    
    const [index, setIndex] = useState(0);
    let [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [finished, setFinished] = useState(false)
    const questions = [
         "What does HTML stand for, and what is its primary purpose in web development?",
    "What is the difference between <div> and <span> elements in HTML?",
    "What are semantic HTML elements? Give three examples.",
    "How does the <a> tag work, and how can you make a link open in a new tab?",
    "Explain the structure of a basic HTML5 document.",
    "What is the purpose of the alt attribute in the <img> tag?",
    // "What’s the difference between <ul>, <ol>, and <dl> lists in HTML?",
    // "How do you create a form in HTML and what are some commonly used input types?",
    // "What are HTML entities, and why are they used? Provide two examples.",
    // "What’s the difference between the id and class attributes in HTML elements?"
    ]

    const answers = [
        [
    
    "HyperText Markup Language",
    " Hyper Transfer Machine Language",
    " HighText Machine Language",
    " Home Tool Markup Language"
  ],
  [

    "<div> is block-level, <span> is inline",
    " Both are always inline",
    " <div> is for styling, <span> is for layout",
    " <span> creates a new section, <div> does not"
  ],
  [
    
    " Elements that clearly describe their meaning (e.g., <article>, <section>)",
    " Elements that style content",
    " Elements that only work with JavaScript",
    " Deprecated HTML tags"
  ],
  [
   
    // " Use target=\"_blank\" to open in a new tab",
    // " Use newtab=\"true\"",
    " Links open in a new tab by default",
    " Only JavaScript can open new tabs"
  ],
  [
    
    " It includes <!DOCTYPE html>, <html>, <head>, and <body>",
    " Only <html> is required",
    " HTML5 doesn't need a doctype",
    " It starts with <body> and ends with <html>"
  ],
  [
  
    " To describe the image for screen readers or when it fails to load",
    " To change the image size",
    " To make the image clickable",
    " To set the image alignment"
  ],
  [
    
    " <ul> is unordered, <ol> is ordered, <dl> is a description list",
    " <ul> is only for images",
    " <ol> requires JavaScript",
    " <dl> is used for layouts"
  ],
  [
    
    " Use <form> with inputs like text, email, password",
    " Use <inputform> for all fields",
    " Forms can only use buttons",
    " Forms need a <div> tag to work"
  ],
  [
    
    " Special codes to display reserved characters (e.g., &lt; for <)",
    " Codes to hide HTML",
    " JavaScript functions in disguise",
    " Used for animations"
  ],
  [
  
    " id is unique; class can be shared among elements",
    " id is for styling; class is for scripting",
    " Both are the same",
    // " You can’t have more than one class"
  ]
]
    const img1 = [
        
            'A.png','B.png','C.png', 'D.png'
        
    ]

    const correctAnswer = [
  "HyperText Markup Language",
  "<div> is block-level, <span> is inline",
  "Elements that clearly describe their meaning (e.g., <article>, <section>)",
  // "Use target=\"_blank\" to open in a new tab",
  "It includes <!DOCTYPE html>, <html>, <head>, and <body>",
  "To describe the image for screen readers or when it fails to load",
  "<ul> is unordered, <ol> is ordered, <dl> is a description list",
  "Use <form> with inputs like text, email, password",
  "Special codes to display reserved characters (e.g., &lt; for <)",
  "id is unique; class can be shared among elements"
    ]

    let btnClass = "w-150  h-20 bg-btn rounded-lg mb-5  text-left flex items-center text-xl "

    const handleA = (selectedAnswer:any) => {
        const cleanAnswer = selectedAnswer.trim();
        setSelected(cleanAnswer);
     
    }

    const handleAnswers = () => {
        if(selected == correctAnswer[index]){
            setScore(score+1)
        }
        if(index < 9){
        setIndex(index +1)

        }
        if(index == 9){
            setFinished(true)
           
        }
        
    }
  
       

    return(
        <>
        
           {finished== false && (
            <>
            <div className="w-screen h-screen flex">
            {/* left */}
            <div className="flex w-[50%] flex-col ml-15">
                <div className="flex h-50 w-200  items-center mb-20">
                <img src="html.png" width={150} height={150} alt="" className="mr-5"/> <h2 className="text-8xl">HTML</h2>
                </div>
                    <p className="mb-5 text-xl">Question {index +1} of 10</p>
                    <h2 className="text-6xl">
                   {questions[index]}
                </h2>
            </div>
          
                
                  {/* right */}
            <div className="w-[50%] h-full flex flex-col justify-center items-center ">
            <div className="flex flex-col    ">
                   
                {answers[index].map((answer, index) => {
                      const isSelected = selected === answer.trim()
                    return(
                        <button onClick={() => handleA(answer)} className={`w-150  h-20 bg-btn rounded-lg mb-5  text-left flex items-center text-xl ${
                         isSelected ? 'bg-btn2 text-white' : 'bg-black'
                    }`} key={index}>
                        <img className="ml-5 mr-5" src={img1[index]} alt="" width={50} height={50}/>
                        {answer}
                    </button>
                    )
                })}
                </div>
                <div className="">
                    <button onClick={handleAnswers} className="w-150  h-20 bg-btn2 rounded-lg  text-4xl">SUBMIT</button>
                </div>
                 </div>
               
        </div>
            </>
           )}
             
            {/* finished quiz message */}
            {finished == true && (
                <>
                   <div className="w-screen h-screen flex">
            {/* left */}
            <div className="flex w-[100%] flex-col ml-15">
                <div className="flex h-50 w-200  items-center mb-20">
                <img src="html.png" width={150} height={150} alt="" className="mr-5"/> <h2 className="text-8xl">HTML</h2>
                </div>
                  <div className="text-center">
                   <h1 className="text-6xl">CONGRADUALTIONS! <br /> YOUR SCORE IS <br /> {score}</h1>
                    <button  onClick={() => window.location.reload()} className="w-150  h-20 bg-btn2 rounded-lg mt-20  text-4xl">RETRY</button>
                  </div>

                </div>
            </div>
                </>
            )}
         
        </>
    )
}