const greekMap = {
  //diphthongs
  'πh': 'φ', // Phi
  'ph': 'φ', // Phi
  'κh': 'χ', // Chi
  'kh': 'χ', // Chi
  'τh': 'θ', // Theta
  'th': 'θ', // Theta
  'πs': 'ψ', // Psi
  'ps': 'ψ', // Psi
  'ks': 'ξ', // Xi
  'κs': 'ξ', // Xi
  'rh': 'ῥ', // Rho
  'ρh': 'ῥ', // Rho

   //diphthongs
   'PH': 'Φ', // Phi
   'ΠH': 'Φ', // Phi
   'Ph': 'Φ', // Phi
   'Πh': 'Φ', // Phi
   'KH': 'Χ', // Chi
   'ΚH': 'Χ', // Chi
   'Kh': 'Χ', // Chi
   'Κh': 'Χ', // Chi
   'TH': 'Θ', // Theta
   'ΤH': 'Θ', // Theta
   'Th': 'Θ', // Theta
   'Τh': 'Θ', // Theta
   'PS': 'Ψ', // Psi
   'ΠS': 'Ψ', // Psi
   'Ps': 'Ψ', // Psi
   'Πs': 'Ψ', // Psi
   'Ps': 'Ξ', // Xi
   'Κs': 'Ξ', // Xi
   'Rh': 'Ῥ', // Rho
   'Ρh': 'Ῥ', // Rho

  //complex
  'ἀ\'': 'ἄ', 
  'ἐ\'': 'ἔ',
  'ἰ\'': 'ἴ',
  'ὀ\'': 'ὄ',
  'ὐ\'': 'ὔ',
  'ἠ\'': 'ἤ',
  'ὠ\'': 'ὤ',
  'ἁ\'': 'ἅ',
  'ἑ\'': 'ἕ',
  'ἱ\'': 'ἵ',
  'ὁ\'': 'ὅ',
  'ὑ\'': 'ὕ',
  'ἡ\'': 'ἥ',
  'ὡ\'': 'ὥ',

  'ἄ\'': 'ἂ', 
  'ἔ\'': 'ἒ',
  'ἴ\'': 'ἲ',
  'ὄ\'': 'ὂ',
  'ὔ\'': 'ὒ',
  'ἤ\'': 'ἢ',
  'ὤ\'': 'ὢ',
  'ἅ\'': 'ἃ',
  'ἕ\'': 'ἓ',
  'ἵ\'': 'ἳ',
  'ὅ\'': 'ὃ',
  'ὕ\'': 'ὓ',
  'ἥ\'': 'ἣ',
  'ὥ\'': 'ὣ',

  'ἀ~': 'ἆ', 
  'ἰ~': 'ἶ',
  'ὐ~': 'ὖ',
  'ἠ~': 'ἦ',
  'ὠ~': 'ὦ',
  'ἁ~': 'ἇ',
  'ἱ~': 'ἷ',
  'ὑ~': 'ὗ',
  'ἡ~': 'ἧ',
  'ὡ~': 'ὧ',

  //iota subscript-adscript
  'α=': 'ᾳ',
  'η=': 'ῃ',
  'ω=': 'ῳ',

  'ᾴ\'': 'ᾲ',
  'ῄ\'': 'ῂ',
  'ῴ\'': 'ῲ',

  'ᾳ\'': 'ᾴ',
  'ῃ\'': 'ῄ',
  'ῳ\'': 'ῴ',

  'ᾳ~': 'ᾷ',
  'ῃ~': 'ῇ',
  'ῳ~': 'ῷ',

  'ἀ=': 'ᾀ',
  'ἠ=': 'ᾐ',
  'ὠ=': 'ᾠ',
  'ἁ=': 'ᾁ',
  'ἡ=': 'ᾑ',
  'ὡ=': 'ᾡ',

  "ᾀ\'": 'ᾄ',
  "ᾐ\'": 'ᾔ',
  "ᾠ\'": 'ᾤ',
  "ᾁ\'": 'ᾅ',
  "ᾑ\'": 'ᾕ',
  "ᾡ\'": 'ᾥ',

  "ᾄ\'": 'ᾂ',
  "ᾔ\'": 'ᾒ',
  "ᾤ\'": 'ᾢ',
  "ᾅ\'": 'ᾃ',
  "ᾕ\'": 'ᾓ',
  "ᾥ\'": 'ᾣ',

  'ᾀ~': 'ᾆ',
  'ᾐ~': 'ᾖ',
  'ᾠ~': 'ᾦ',
  'ᾁ~': 'ᾇ',
  'ᾑ~': 'ᾗ',
  'ᾡ~': 'ᾧ',

  //rough breathing
  'ha': 'ἁ', 
  'he': 'ἑ',
  'hi': 'ἱ', 
  'ho': 'ὁ', 
  'hu': 'ὑ', 
  'hv': 'ὑ', 
  'hy': 'ὑ', 
  'hj': 'ἡ', 
  'hw': 'ὡ', 
  '-a': 'ἁ', 
  '-e': 'ἑ',
  '-i': 'ἱ', 
  '-o': 'ὁ', 
  '-u': 'ὑ', 
  '-v': 'ὑ', 
  '-y': 'ὑ', 
  '-j': 'ἡ', 
  '-w': 'ὡ', 
    
  //rough breathing
  'Ha': 'Ἁ', 
  'He': 'Ἑ',
  'Hi': 'Ἱ', 
  'Ho': 'Ὁ', 
  'Hu': 'Ὑ', 
  'Hv': 'Ὑ', 
  'Hy': 'Ὑ', 
  'Hj': 'Ἡ', 
  'Hw': 'Ὡ', 
  'HA': 'Ἁ', 
  'HE': 'Ἑ',
  'HI': 'Ἱ', 
  'HO': 'Ὁ', 
  'HU': 'Ὑ', 
  'HV': 'Ὑ', 
  'HY': 'Ὑ', 
  'HJ': 'Ἡ', 
  'HW': 'Ὡ', 

  //smooth breathing
  '#a': 'ἀ', 
  '#e': 'ἐ',
  '#i': 'ἰ', 
  '#o': 'ὀ', 
  '#u': 'ὐ', 
  '#v': 'ὐ', 
  '#y': 'ὐ', 
  '#j': 'ἠ', 
  '#w': 'ὠ', 
    
  //smooth breathing
  '#A': 'Ἀ', 
  '#E': 'Ἐ',
  '#I': 'Ἰ', 
  '#O': 'Ὀ', 
  '#J': 'Ἠ', 
  '#W': 'Ὠ', 

   //accented
   "ά\'": "ὰ",    
   "έ\'": "ὲ",
   "ί\'": "ὶ",
   "ό\'": "ὸ",
   "ύ\'": "ὺ",
   "ή\'": "ὴ",
   "ώ\'": "ὼ",

   "α\'": "ά",
   "ε\'": "έ",
   "ι\'": "ί",
   "ο\'": "ό",
   "υ\'": "ύ",
   "η\'": "ή",
   "ω\'": "ώ",

   "α~": "ᾶ",    
   "η~": "ῆ",
   "ι~": "ῖ",
   "ω~": "ῶ",
   "υ~": "ῦ",

   "α-": "ᾱ",
   "ι-": "ῑ",
   "υ-": "ῡ",

  //accented
  "Ά\'": "Ὰ",  
  "Έ\'": "Ὲ",
  "Ί\'": "Ὶ",
  "Ό\'": "Ὸ",
  "ϓ\'": "Ὺ",
  'Ή\'': 'Ὴ',
  'Ώ\'': 'Ὼ',

  "Α\'": "Ά",
  "Ε\'": "Έ",
  "Ι\'": "Ί",
  "Ο\'": "Ό",
  "Υ\'": "ϓ",
  'Η\'': 'Ή',
  'Ω\'': 'Ώ',

  //monophthongs
  'a': 'α', // Alpha
  'b': 'β', // Beta
  'd': 'δ', // Delta
  'e': 'ε', // Epsilon
  'g': 'γ', // Gamma
  'h': '-', // Placeholder
  'j': 'η', // Eta
  'i': 'ι', // Iota 
  'k': 'κ', // Kappa
  'l': 'λ', // Lambda
  'm': 'μ', // Mu
  'n': 'ν', // Nu
  'o': 'ο', // Omicron
  'p': 'π', // Pi
  'r': 'ρ', // Rho
  's': 'σ', // Sigma
  't': 'τ', // Tau
  'u': 'υ', // Upsilon
  'v': 'υ', // Upsilon 
  'y': 'υ', // Upsilon 
  'w': 'ω', // Omega
  'x': 'ξ', // Xi
  'z': 'ζ', // Zeta

  //monophthongs
  'A': 'Α', // Alpha
  'B': 'Β', // Beta
  'D': 'Δ', // Delta
  'E': 'Ε', // Epsilon
  'G': 'Γ', // Gamma
  'H': '-', // Placeholder
  'J': 'Η', // Eta
  'I': 'Ι', // Iota 
  'K': 'Κ', // Kappa
  'L': 'Λ', // Lambda
  'M': 'Μ', // Mu
  'N': 'Ν', // Nu
  'O': 'Ο', // Omicron
  'P': 'Π', // Pi
  'R': 'Ρ', // Rho
  'S': 'Σ', // Sigma
  'T': 'Τ', // Tau
  'U': 'Υ', // Upsilon
  'V': 'Υ', // Upsilon 
  'Y': 'Υ', // Upsilon 
  'W': 'Ω', // Omega
  'X': 'Ξ', // Xi
  'Z': 'Ζ', // Zeta
  
   //archaic
   'F=': 'Ϝ', // Digamma
   'Q=': 'Ϙ', // Koppa 
   'Ss=': 'Ͳ', //Sampi
   'Σσ=': 'Ͳ', //Sampi
   'Sz=': 'Ϻ', //San
   'Σζ=': 'Ϻ', //San
   'S-=': 'Ϸ', //Sho
   'Σ-=': 'Ϸ', //Sho

  //archaic
  'f=': 'ϝ', // Digamma
  'q=': 'ϙ', // Koppa 
  'ss=': 'ͳ', //Sampi 
  'σσ=': 'ͳ', //Sampi 
  'sz=': 'ϻ', //San
  'σζ=': 'ϻ', //San
  's-=': 'ϸ', //Sho
  'σ-=': 'ϸ', //Sho
};

const textArea = document.getElementById('textArea');

const delay = 100;

let timeoutId;

function transcribe(event) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
  const currentText = event.target.value;

  let processedText = currentText;
  for(const [key, value] of Object.entries(greekMap)) {
    const regex = new RegExp(key, 'g');
    processedText= processedText.replace(regex, value);
  }
  processedText = processedText.replace(/σ\s/g, 'ς ');
  event.target.value = processedText;
}, delay);
}

textArea.addEventListener('input', transcribe);

function copyFn() {
  const textArea = document.getElementById('textArea');
  
  textArea.select();
  textArea.setSelectionRange(0, 99999); //mobile odd tings

  try {
    navigator.clipboard.writeText(textArea.value).then(()=> {
      alert('Text copied to clipboard!');
    }).catch (err => {
      alert('Failed to copy text. Please try again!');
      console.error('Error copying text: ', err);
    });
  } catch (err) {
    alert('Failed to copy text. Please try again!');
    console.error('Error copying text: ', err);
  }
}

function saveFn() {
  const textArea = document.getElementById('textArea');
  const text = textArea.value;
  const blob = new Blob([text], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Historia__Greek.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function clearFn() {
  const textArea = document.getElementById('textArea');
  textArea.value = '';
}

function transcribebtn (letter){
  const textArea = document.getElementById('textArea');

  const start = textArea.selectionStart;
  const end = textArea.selectionEnd

  const currentText = textArea.value

  textArea.value = currentText.slice(0, start) + letter + currentText.slice(end);
  textArea.selectionStart = textArea.selectionEnd = start + letter.length;

  textArea.focus();
}


function lexFn() {
  const textArea = document.getElementById('textArea');
  if (!textArea) {
    console.error('Text area element not found.');
    return;
  }
  const text = textArea.value.trim();

  if (text === '') {
    alert('Please enter text before adding to the lexicon.');
    return;
  }

  let lexiconEntries;
  try {
    lexiconEntries = JSON.parse(localStorage.getItem('lexiconEntries')) || [];
  } catch (e) {
    console.error('Failed to parse lexiconEntries from localStorage', e);
    lexiconEntries = [];
  }
  
  lexiconEntries.push(text);
  localStorage.setItem('lexiconEntries', JSON.stringify(lexiconEntries));

  textArea.value = '';
}