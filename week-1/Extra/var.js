const veryPositive =["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it."];
const positive = ["As I see it, yes.", "Most likely.","Outlook good.","Yes.","Signs point to yes."]
const negative = ["Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.", "Concentrate and ask again."]
const veryNegative=["Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]
const varEmotion= [veryNegative,negative,positive,veryPositive];
let shakeEmotion;
let shakeAnswer;
let indexAnswer;

function shakeBall() {
  shakeEmotion = Math.floor(Math.random()* varEmotion.length);
  indexAnswer = Math.floor(Math.random()* shakeEmotion)
  shakeAnswer = varEmotion[shakeEmotion][indexAnswer]
  console.log("The ball has shaken!")
  return shakeAnswer
  
}
console.log(shakeBall())