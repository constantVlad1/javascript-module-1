const veryPositive = [
    "It is certain." ,
    "It is decidedly so." ,
    "Without a doubt." ,
    "Yes - definitely." ,
    "You may rely on it."
  ] 
  
  
  // Positive list
  const positive = [
  "As I see it, yes." ,
  "Most likely." ,
  "Outlook good." ,
  "Yes." ,
  "Signs point to yes."
  ]
  
  
  // Negative list
  const negative = [
    "Reply hazy, try again." ,
    "Ask again later." ,
    "Better not tell you now." ,
    "Cannot predict now." ,
    "Concentrate and ask again."
  ]
  
  
  // Very negative list
  const veryNegative = [
    "Don't count on it." ,
    "My reply is no." ,
    "My sources say no." ,
    "Outlook not so good." ,
    "Very doubtful."
  ]
  
  // Lists of answers
  const listsOfAnswers = [
    veryPositive,
    positive,
    negative,
    veryNegative
  ] 
  
  // This should log "The ball has shaken!"
  // and return the answer.
  let oneRandomListOfAnswers
  let oneRandomAnswer
  
  function shakeBall() {
    oneRandomListOfAnswers = listsOfAnswers[Math.floor(Math.random()*listsOfAnswers.length)];
    oneRandomAnswer = oneRandomListOfAnswers[Math.floor(Math.random()*oneRandomListOfAnswers.length)];
    console.log(oneRandomAnswer);
    console.log("The ball has shaken!");
    return oneRandomAnswer
  }