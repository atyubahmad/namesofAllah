const namesOfAllah = [
    "Ar-Rahman",
    "Ar-Raheem",
    "Al-Malik",
    "Al-Quddus",
    "As-Salam",
    "Al-Mumin",
    "Al-Muhaymin",
    "Al-Aziz",
    "Al-Jabbar",
    "Al-Mutakabbir",
    "Al-Khaliq",
    "Al-Bari",
    "Al-Musawwir",
    "Al-Ghaffar",
    "Al-Qahhar",
    "Al-Wahhab",
    "Ar-Razzaq",
    "Al-Fattah",
    "Al-Alim",
    "Al-Qabid",
    "Al-Basit",
    "Al-Khafid",
    "Ar-Rafi",
    "Al-Mu'izz",
    "Al-Mudhill",
    "As-Sami",
    "Al-Baseer",
    "Al-Hakam",
    "Al-Adl",
    "Al-Lateef",
    "Al-Khabir",
    "Al-Haleem",
    "Al-Azeem",
    "Al-Ghafoor",
    "Ash-Shakur",
    "Al-Aliyy",
    "Al-Kabeer",
    "Al-Hafiz",
    "Al-Muqeet",
    "Al-Haseeb",
    "Al-Jaleel",
    "Al-Kareem",
    "Ar-Raqeeb",
    "Al-Mujeeb",
    "Al-Wasi",
    "Al-Hakeem",
    "Al-Wadud",
    "Al-Majeed",
    "Al-Baith",
    "Ash-Shaheed",
    "Al-Haqq",
    "Al-Wakeel",
    "Al-Qawiyy",
    "Al-Mateen",
    "Al-Wali",
    "Al-Hameed",
    "Al-Muhsi",
    "Al-Mubdi",
    "Al-Muid",
    "Al-Muhyi",
    "Al-Mumeet",
    "Al-Hayy",
    "Al-Qayyum",
    "Al-Wajid",
    "Al-Maajid",
    "Al-Wahid",
    "Al-Ahad",
    "As-Samad",
    "Al-Qadir",
    "Al-Muqtadir",
    "Al-Muqaddim",
    "Al-Muakhkhir",
    "Al-Awwal",
    "Al-Akhir",
    "Az-Zaahir",
    "Al-Baatin",
    "Al-Wali",
    "Al-Mutaali",
    "Al-Barr",
    "At-Tawwaab",
    "Al-Muntaqim",
    "Al-Afuw",
    "Ar-Rauf",
    "Malik-ul-Mulk",
    "Dhul-Jalaali wal-Ikram",
    "Al-Muqsit",
    "Al-Jami'",
    "Al-Ghaniy",
    "Al-Mughni",
    "Al-Mani'",
    "Ad-Dhar",
    "An-Nafi'",
    "An-Noor",
    "Al-Hadi",
    "Al-Badi'",
    "Al-Baaqi",
    "Al-Warith",
    "Ar-Rasheed",
    "As-Sabur"
];

const nameDisplay = document.getElementById("name-display");
const nameInput = document.getElementById("name-input");
const checkButton = document.getElementById("check-button");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.querySelector(".score"); // Add a reference to the score display element

let currentIndex = 0;
let score = 0; // Initialize the score

function displayNextName() {
    if (currentIndex < namesOfAllah.length) {
        nameDisplay.textContent = `Name ${currentIndex + 1}`;
        nameInput.value = "";
    } else {
        nameDisplay.textContent = "You have gone through all 99 names of Allah SWT";
        nameInput.style.display = "none";
        checkButton.style.display = "none";
    }
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score} / ${namesOfAllah.length}`;
}

function moveToNextName() {
    currentIndex++;
    if (currentIndex < namesOfAllah.length) {
        displayNextName();
    } else {
        nameDisplay.textContent = "You have gone through all 99 names of Allah SWT";
        nameInput.style.display = "none";
        checkButton.style.display = "none";
    }
}

checkButton.addEventListener("click", () => {
    const userInput = nameInput.value.trim();
    const correctName = namesOfAllah[currentIndex];

    if (userInput.toLowerCase() === correctName.toLowerCase()) {
        score++; // Increase the score for correct answers
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        updateScore(); // Update the score display
        moveToNextName(); // Move to the next name
    } else {
        feedback.textContent = `The correct answer is: ${correctName}`;
        feedback.style.color = "red";
        moveToNextName(); // Move to the next name even if it's incorrect
    }
});

displayNextName();
updateScore(); // Initialize the score display

