function pullQuestionConsole() {
    console.log(this.question);
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log(this.d);
}

function pullQuestionApply() {
    $(".questionText").html(this.question);
    $(".answerAText").html(this.a);
    $(".answerBText").html(this.b);
    $(".answerCText").html(this.c);
    $(".answerDText").html(this.d);
}

var q0 = {
	question: "",
	a: "",
	b: "",
	c: "",
	d: "",
	answer: "",
}
var q1 = {
	question: "In which country was the Gallipoli landing?",
	a: "France",
	b: "Germany",
	c: "Australia",
	d: "Turkey",
	answer: "d",
    pullQuestionApply: this.pullQuestionApply,
}  
var q2 = {
	question: "Which of the following was not a cause of WWI?",
	a: "Nationalism",
	b: "Balkan war",
	c: "Hundred Year war",
	d: "Franco-Prussian war",
	answer: "c",
    pullQuestionApply: this.pullQuestionApply,
}  
var q3 = {
	question: "Which countries were not in the Triple Entente in 1914?",
	a: "USA",
	b: "Russia",
	c: "Italy",
	d: "Belgium",
	answer: "b",
    pullQuestionApply: this.pullQuestionApply,
}  
var q4 = {
	question: "All of these were major battles of WWI except:",
	a: "Battle of the Somme",
	b: "Battle of the Marne",
	c: "Battle of Antietam",
	d: "Battle of Gallipoli",
	answer: "c",
    pullQuestionApply: this.pullQuestionApply,
}  
var q5 = {
	question: "In which year did the battle of Verdun start?",
	a: "1914",
	b: "1915",
	c: "1916",
	d: "1917",
	answer: "c",
    pullQuestionApply: this.pullQuestionApply,
}  
var q6 = {
	question: "What is the maneuver warfare?",
	a: "It's a type of strategy to defeat enemy by movement",
	b: "It's name of a treaty",
	c: "It's a type of strategy to defeat enemy by remaining on his positions",
	d: "It's a British soldiers squad",
	answer: "a",
    pullQuestionApply: this.pullQuestionApply,
}  
var q7 = {
	question: "During which years did the Attrition warfare take place?",
	a: "Between 1914-1917",
	b: "Between 1915-1917",
	c: "Between 1914-1918",
	d: "Between 1915-1918",
	answer: "b",
    pullQuestionApply: this.pullQuestionApply,
}  
var q8 = {
	question: "Which country made the first declaration of war?",
	a: "Serbia",
	b: "Austria-Hungary",
	c: "Italy",
	d: "Germany",
	answer: "b",
    pullQuestionApply: this.pullQuestionApply,
}  
var q9 = {
	question: "Which German attack provoked Britain to go to war?",
	a: "The attack on France",
	b: "The attack on Luxembourg",
	c: "The attack on Belgium",
	d: "The attack on Russia",
	answer: "c",
    pullQuestionApply: this.pullQuestionApply,
}  
var q10 = {
	question: "Which country joined the war on the side of the Allied Powers in 1916?",
	a: "Romania",
	b: "Serbia",
	c: "Greece",
	d: "USA",
	answer: "a",
    pullQuestionApply: this.pullQuestionApply,
}  
var q11 = {
	question: "What country are the members of the Black Hand Society from?",
	a: "Sweden",
	b: "Germany",
	c: "Czechoslovakia",
	d: "Serbia",
	answer: "d",
    pullQuestionApply: this.pullQuestionApply,
}  
var q12 = {
	question: "On what date did the United States declare war on Germany?",
	a: "July 3, 1914",
	b: "April 6, 1917",
	c: "November 4, 1917",
	d: "USA did not declared the war on Germany.",
	answer: "b",
    pullQuestionApply: this.pullQuestionApply,
}  
var q13 = {
	question: "Who was the commander of U.S. forces in Europe?",
	a: "John J. Pershing",
	b: "Joseph Joffre",
	c: "Theodore Roosevelt",
	d: "David Lloyd George",
	answer: "a",
    pullQuestionApply: this.pullQuestionApply,
}  
var q14 = {
	question: "In what battle did the German Army first use Mustard gas as a weapon of war?",
	a: "Ypres",
	b: "Vimy Ridge",
	c: "Sommes",
	d: "Passchendale",
	answer: "a",
    pullQuestionApply: this.pullQuestionApply,
}  
var q15 = {
	question: "What was the area in between trenched called during WWI?",
	a: "The great soldier zone",
	b: "The Dead zone",
	c: "No man's land",
	d: "No tolerance land",
	answer: "c",
    pullQuestionApply: this.pullQuestionApply,
}  
var q16 = {
	question: "What is a German U boat?",
	a: "U shaped rubber dingy",
	b: "Navy Destroyer",
	c: "Ocean troop carrier",
	d: "Submarine",
	answer: "d",
    pullQuestionApply: this.pullQuestionApply,
}  
var q17 = {
	question: "In 1918, the city of Paris suffered repeated attacks from German of",
	a: "Poison Gaz",
	b: "Tanks",
	c: "Napalm",
	d: "Long-range artillery",
	answer: "d",
    pullQuestionApply: this.pullQuestionApply,
}  
var q18 = {
	question: "Who won WWI?",
	a: "Allies in 1918",
	b: "Central Powers in 1917",
	c: "Allies in 1917",
	d: "Central power and Neutral power in 1918",
	answer: "a",
    pullQuestionApply: this.pullQuestionApply,
}  
var q19 = {
	question: "When was the Armistice between Germany and France signed?",
	a: "28 June 1918",
	b: "11 November 1918",
	c: "11 November 1919",
	d: "28 June 1919",
	answer: "b",
    pullQuestionApply: this.pullQuestionApply,
}  
var q20 = {
	question: "When and where was the treaty between France and Germany signed?",
	a: "In 1918, under the Arc de Triomphe in Paris",
	b: "In 1919, under the Arc de Triomphe in Paris",
	c: "In 1918, in a Wagon at Versailles",
	d: "In 1919, in the Hall of Mirrors at Versailles",
	answer: "d",
    pullQuestionApply: this.pullQuestionApply,
}

var questionArray = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

$(document).ready(function() {

    $(".execute").on("click", function() {
    q3.pullQuestionApply();
    })




})