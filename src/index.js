const Classifier = require('./classifier');

var classifier = new Classifier();
classifier.classify("Ce texte est en francais", "fr");
classifier.classify("Celui ci est aussi en francais", "fr");
classifier.classify("This text is in english", "en");
classifier.classify("This text is also in english", "en");

console.log(classifier.categorize("text in english"));
console.log(classifier.categorize("texte en francais"));
