// Task 1: Reverse every word in a sentence
function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and join them back
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence: " + reversedSentence);

// Task 2: Perform sorting of an array in descending order
const numbers = [5, 2, 9, 1, 5, 6];
const descendingOrder = numbers.sort((a, b) => b - a);
console.log("Sorted in Descending Order: " + descendingOrder);
