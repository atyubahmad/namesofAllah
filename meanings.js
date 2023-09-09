// List of Names and Meanings (in the same order)
const namesAndMeanings = [
  ["Ar-Rahman", "The Beneficent"],
  ["Ar-Raheem", "The Merciful"],
  ["Al-Malik", "The King"],
  ["Al-Quddus", "The Most Holy"],
  ["As-Salam", "The Giver of Peace"],
  ["Al-Mumin", "The Giver of Faith"],
  ["Al-Muhaymin", "The Guardian"],
  ["Al-Aziz", "The All Mighty"],
  ["Al-Jabbar", "The Restorer"],
  ["Al-Mutakabbir", "The Supreme"],
  ["Al-Khaliq", "The Creator"],
  ["Al-Bari", "The Originator"],
  ["Al-Musawwir", "The Fashioner"],
  ["Al-Ghaffar", "The All Forgiving"],
  ["Al-Qahhar", "The Subduer"],
  ["Al-Wahhab", "The Supreme Bestower"],
  ["Ar-Razzaq", "The Provider"],
  ["Al-Fattah", "The Opener"],
  ["Al-Alim", "The All Knowing"],
  ["Al-Qabid", "The Withholder"],
  ["Al-Basit", "The Extender"],
  ["Al-Khafid", "The Reducer"],
  ["Ar-Rafi", "The Exalter"],
  ["Al-Mu'izz", "The Honorer"],
  ["Al-Mudhill", "The Humiliator"],
  ["As-Sami", "The All Hearing"],
  ["Al-Baseer", "The All Seeing"],
  ["Al-Hakam", "The Judge"],
  ["Al-Adl", "The Just"],
  ["Al-Lateef", "The Subtle One"],
  ["Al-Khabir", "The All Aware"],
  ["Al-Haleem", "The Forbearing"],
  ["Al-Azeem", "The Magnificent"],
  ["Al-Ghafoor", "The All Forgiving"],
  ["Ash-Shakur", "The Appreciative"],
  ["Al-Aliyy", "The Most High"],
  ["Al-Kabeer", "The Greatest"],
  ["Al-Hafiz", "The Preserver"],
  ["Al-Muqeet", "The Sustainer"],
  ["Al-Haseeb", "The Reckoner"],
  ["Al-Jaleel", "The Majestic"],
  ["Al-Kareem", "The Bountiful One"],
  ["Ar-Raqeeb", "The Watchful"],
  ["Al-Mujeeb", "The Responsive One"],
  ["Al-Wasi", "The Knowledgeable"],
  ["Al-Hakeem", "The All Wise"],
  ["Al-Wadud", "The Most Loving"],
  ["Al-Majeed", "The Glorious One"],
  ["Al-Baith", "The Resurrector"],
  ["Ash-Shaheed", "The All Witnessing"],
  ["Al-Haqq", "The Truth"],
  ["Al-Wakeel", "The Trustee"],
  ["Al-Qawiyy", "The All Strong"],
  ["Al-Mateen", "The Firm"],
  ["Al-Waliy", "The Protecting Associate"],
  ["Al-Hameed", "The Praiseworthy"],
  ["Al-Muhsi", "The All Enumerating"],
  ["Al-Mubdi", "The Originator"],
  ["Al-Muid", "The Restorer"],
  ["Al-Muhyi", "The Giver of Life"],
  ["Al-Mumeet", "The Destroyer"],
  ["Al-Hayy", "The Ever Living"],
  ["Al-Qayyum", "The Sustainer"],
  ["Al-Wajid", "The Perceiver"],
  ["Al-Maajid", "The Glorious"],
  ["Al-Wahid", "The One"],
  ["Al-Ahad", "The Unique"],
  ["As-Samad", "The Eternal"],
  ["Al-Qadir", "The Able"],
  ["Al-Muqtadir", "The Powerful"],
  ["Al-Muqaddim", "The Expediter"],
  ["Al-Muakhkhir", "The Delayer"],
  ["Al-Awwal", "The First"],
  ["Al-Akhir", "The Last"],
  ["Az-Zaahir", "The Manifest"],
  ["Al-Baatin", "The Hidden"],
  ["Al-Wali", "The Govenor"],
  ["Al-Mutaali", "The Supreme"],
  ["Al-Barr", "The Righteous"],
  ["At-Tawwaab", "The Ever Pardoning"],
  ["Al-Muntaqim", "The Avenger"],
  ["Al-Afuw", "The Pardoner"],
  ["Ar-Rauf", "The Compassionate"],
  ["Malik-ul-Mulk", "The Owner of All"],
  ["Dhul-Jalaali wal-Ikram", "The Possessor of Majesty and Honor"],
  ["Al-Muqsit", "The Equitable"],
  ["Al-Jami'", "The Gatherer"],
  ["Al-Ghaniy", "The Self Sufficient"],
  ["Al-Mughni", "The Enricher"],
  ["Al-Mani'", "The Preventer"],
  ["Ad-Dhar", "The Distresser"],
  ["An-Nafi'", "The Benefactor"],
  ["An-Noor", "The Light"],
  ["Al-Hadi", "The Guide"],
  ["Al-Badi'", "The orginator"],
  ["Al-Baaqi", "The Everlasting"],
  ["Al-Warith", "The Inheritor"],
  ["Ar-Rasheed", "The Guide"],
  ["As-Sabur", "The Patient"]
];


const nameDisplay = document.querySelector(".name-of-allah");
const nameInput = document.getElementById("name-input");
const checkButton = document.getElementById("check-button");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.querySelector(".score"); // Add this line

let currentIndex = 0;
let score = 0;

function displayNextName() {
    if (currentIndex < namesAndMeanings.length) {
        const [name, meaning] = namesAndMeanings[currentIndex];
        nameDisplay.textContent = `Name of Allah: ${name}`;
        nameInput.value = "";
    } else {
        nameDisplay.textContent = "You have gone through all the names of Allah.";
        nameInput.style.display = "none";
        checkButton.style.display = "none";
    }
}

function updateScore() {
    const scoreElement = document.querySelector(".score");
    scoreElement.textContent = `Score: ${score} / 99`;
}

checkButton.addEventListener("click", () => {
    const userInput = nameInput.value.trim();
    const [, correctMeaning] = namesAndMeanings[currentIndex]; // Get the correct meaning

    if (userInput.toLowerCase() === correctMeaning.toLowerCase()) {
        score++; // Increment the score for a correct answer
        updateScore(); // Update the score
        currentIndex++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        displayNextName();
    } else {
        feedback.textContent = `Incorrect. The correct meaning is: "${correctMeaning}". Try again.`;
        feedback.style.color = "red";
        // Still move to the next name even if the answer is incorrect
        currentIndex++;
        displayNextName();
    }
});

// Display the first name when the page loads
displayNextName();
updateScore(); // Initialize the score display





