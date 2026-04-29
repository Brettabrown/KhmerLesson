// ============================================================
// KhmerLesson – Flashcard Data & Logic
// ============================================================

const DECKS = {
  consonants: {
    label: "Consonants",
    cards: [
      { front: "ក", transliteration: "ka", meaning: "k sound (like 'k' in 'king')", example: "ក – first Khmer consonant" },
      { front: "ខ", transliteration: "kha", meaning: "aspirated k sound", example: "ខ – second Khmer consonant" },
      { front: "គ", transliteration: "ko", meaning: "g sound (like 'g' in 'go')", example: "គ – third Khmer consonant" },
      { front: "ឃ", transliteration: "kho", meaning: "aspirated g sound", example: "ឃ – fourth Khmer consonant" },
      { front: "ង", transliteration: "ngo", meaning: "ng sound (like 'ng' in 'sing')", example: "ង – fifth Khmer consonant" },
      { front: "ច", transliteration: "cha", meaning: "ch sound (like 'ch' in 'chair')", example: "ច – sixth Khmer consonant" },
      { front: "ឆ", transliteration: "chha", meaning: "aspirated ch sound", example: "ឆ – seventh Khmer consonant" },
      { front: "ជ", transliteration: "cho", meaning: "j sound (like 'j' in 'joy')", example: "ជ – eighth Khmer consonant" },
      { front: "ញ", transliteration: "nyo", meaning: "ny sound (like 'ny' in 'canyon')", example: "ញ – ninth Khmer consonant" },
      { front: "ដ", transliteration: "da", meaning: "retroflex d sound", example: "ដ – tenth Khmer consonant" },
      { front: "ន", transliteration: "no", meaning: "n sound (like 'n' in 'no')", example: "ន – fourteenth Khmer consonant" },
      { front: "ប", transliteration: "ba", meaning: "b sound (like 'b' in 'boy')", example: "ប – fifteenth Khmer consonant" },
      { front: "ម", transliteration: "mo", meaning: "m sound (like 'm' in 'moon')", example: "ម – nineteenth Khmer consonant" },
      { front: "យ", transliteration: "yo", meaning: "y sound (like 'y' in 'yes')", example: "យ – twentieth Khmer consonant" },
      { front: "រ", transliteration: "ro", meaning: "r sound (slightly rolled)", example: "រ – twenty-first Khmer consonant" },
      { front: "ល", transliteration: "lo", meaning: "l sound (like 'l' in 'love')", example: "ល – twenty-second Khmer consonant" },
      { front: "វ", transliteration: "vo", meaning: "v/w sound", example: "វ – twenty-third Khmer consonant" },
      { front: "ស", transliteration: "sa", meaning: "s sound (like 's' in 'sun')", example: "ស – twenty-fourth Khmer consonant" },
      { front: "ហ", transliteration: "ha", meaning: "h sound (like 'h' in 'hello')", example: "ហ – twenty-fifth Khmer consonant" },
      { front: "អ", transliteration: "a", meaning: "silent / vowel carrier", example: "អ – thirty-third Khmer consonant" },
    ]
  },
  vowels: {
    label: "Vowels",
    cards: [
      { front: "អា", transliteration: "aa", meaning: "long 'a' sound (like 'ah')", example: "អា – common in everyday words" },
      { front: "អិ", transliteration: "i", meaning: "short 'i' sound (like 'bit')", example: "អិ – short vowel" },
      { front: "អី", transliteration: "ei", meaning: "long 'ee' sound (like 'see')", example: "អី – long vowel" },
      { front: "អុ", transliteration: "o", meaning: "short 'o' sound (like 'hot')", example: "អុ – short vowel" },
      { front: "អូ", transliteration: "oo", meaning: "long 'oo' sound (like 'moon')", example: "អូ – long vowel" },
      { front: "អែ", transliteration: "ae", meaning: "'ae' sound (like 'cat')", example: "អែ – vowel" },
      { front: "អៃ", transliteration: "ai", meaning: "'ai' diphthong (like 'sky')", example: "អៃ – diphthong" },
      { front: "អើ", transliteration: "eu", meaning: "'eu' sound (like French 'eu')", example: "អើ – vowel" },
    ]
  },
  numbers: {
    label: "Numbers",
    cards: [
      { front: "០", transliteration: "soun", meaning: "Zero (0)", example: "០ – Khmer digit 0" },
      { front: "១", transliteration: "muoy", meaning: "One (1)", example: "១ – Khmer digit 1" },
      { front: "២", transliteration: "pii", meaning: "Two (2)", example: "២ – Khmer digit 2" },
      { front: "៣", transliteration: "bei", meaning: "Three (3)", example: "៣ – Khmer digit 3" },
      { front: "៤", transliteration: "buon", meaning: "Four (4)", example: "៤ – Khmer digit 4" },
      { front: "៥", transliteration: "pram", meaning: "Five (5)", example: "៥ – Khmer digit 5" },
      { front: "៦", transliteration: "prammuoy", meaning: "Six (6)", example: "៦ – Khmer digit 6" },
      { front: "៧", transliteration: "prampii", meaning: "Seven (7)", example: "៧ – Khmer digit 7" },
      { front: "៨", transliteration: "prambei", meaning: "Eight (8)", example: "៨ – Khmer digit 8" },
      { front: "៩", transliteration: "prambuon", meaning: "Nine (9)", example: "៩ – Khmer digit 9" },
      { front: "១០", transliteration: "dop", meaning: "Ten (10)", example: "១០ – Khmer number 10" },
    ]
  },
  vocabulary: {
    label: "Basic Words",
    cards: [
      { front: "សួស្តី", transliteration: "suostei", meaning: "Hello / Greetings", example: "Use when meeting someone" },
      { front: "អរគុណ", transliteration: "orkun", meaning: "Thank you", example: "Said after receiving help" },
      { front: "បាទ / ចាស", transliteration: "bat / jas", meaning: "Yes (male / female)", example: "Polite affirmation" },
      { front: "ទេ", transliteration: "te", meaning: "No", example: "ទេ – simple negation" },
      { front: "ជំរាបសួរ", transliteration: "chomreap suor", meaning: "Formal greeting (Hello)", example: "More formal than សួស្តី" },
      { front: "ជំរាបលា", transliteration: "chomreap lea", meaning: "Goodbye (formal)", example: "Said when departing formally" },
      { front: "ឈ្មោះ", transliteration: "chmuah", meaning: "Name", example: "អ្នកឈ្មោះអ្វី? – What is your name?" },
      { front: "ខ្ញុំ", transliteration: "khnhom", meaning: "I / Me", example: "ខ្ញុំ – first-person pronoun" },
      { front: "អ្នក", transliteration: "neak", meaning: "You", example: "អ្នក – second-person pronoun (polite)" },
      { front: "ទឹក", transliteration: "teuk", meaning: "Water", example: "ខ្ញុំចង់ផឹកទឹក – I want to drink water" },
      { front: "បាយ", transliteration: "bai", meaning: "Rice (cooked)", example: "ញាំបាយ – eat rice" },
      { front: "ស្រឡាញ់", transliteration: "sralanh", meaning: "To love / like", example: "ខ្ញុំស្រឡាញ់អ្នក – I love you" },
    ]
  }
};

// Allow list of valid deck keys – used to guard against prototype injection via URL params
const VALID_DECKS = new Set(Object.keys(DECKS));

// ── State ──
let currentDeck = "consonants";
let currentIndex = 0;
let isFlipped = false;
let currentCards = DECKS[currentDeck].cards.slice(); // working copy – never write back to DECKS

// ── DOM refs ──
const cardEl         = document.getElementById("flashcard");
const khmerEl        = document.getElementById("khmer-text");
const translitEl     = document.getElementById("translit-text");
const meaningEl      = document.getElementById("meaning-text");
const exampleEl      = document.getElementById("example-text");
const progressText   = document.getElementById("progress-text");
const progressBar    = document.getElementById("progress-bar");
const prevBtn        = document.getElementById("prev-btn");
const nextBtn        = document.getElementById("next-btn");
const flipBtn        = document.getElementById("flip-btn");
const shuffleBtn     = document.getElementById("shuffle-btn");
const categoryBtns   = document.querySelectorAll(".cat-btn");

// ── Helpers ──
function getDeck() {
  return currentCards;
}

function updateCard() {
  const deck = getDeck();
  const card = deck[currentIndex];

  // Reset flip
  isFlipped = false;
  cardEl.classList.remove("flipped");

  // Fill content
  khmerEl.textContent      = card.front;
  translitEl.textContent   = card.transliteration;
  meaningEl.textContent    = card.meaning;
  exampleEl.textContent    = card.example;

  // Progress
  const total = deck.length;
  progressText.textContent = `Card ${currentIndex + 1} of ${total}`;
  progressBar.style.width  = `${((currentIndex + 1) / total) * 100}%`;

  // Button states
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === total - 1;
}

function flipCard() {
  isFlipped = !isFlipped;
  cardEl.classList.toggle("flipped", isFlipped);
}

function goNext() {
  if (currentIndex < getDeck().length - 1) {
    currentIndex++;
    updateCard();
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard();
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function shuffleDeck() {
  currentCards = shuffle(currentCards);
  currentIndex = 0;
  updateCard();
}

function switchDeck(deckKey) {
  if (!VALID_DECKS.has(deckKey)) return;
  currentDeck = deckKey;
  currentCards = DECKS[deckKey].cards.slice();
  currentIndex = 0;
  updateCard();

  // Update active button
  categoryBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.deck === deckKey);
  });
}

// ── Event listeners ──
cardEl.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
shuffleBtn.addEventListener("click", shuffleDeck);

// Allow the scene wrapper (focusable via Tab) to flip on Space/Enter
const sceneEl = cardEl.closest(".scene");
if (sceneEl) {
  sceneEl.addEventListener("keydown", e => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipCard();
    }
  });
}

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => switchDeck(btn.dataset.deck));
});

// Keyboard navigation
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") goNext();
  else if (e.key === "ArrowLeft") goPrev();
  else if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    flipCard();
  }
});

// ── Init ──
updateCard();
