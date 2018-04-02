const barin = require('brain.js');

function generateRandomRGB(){
  return {
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256)
  };
}

function generateRandomTheme() {
  return {
    editor_background: generateRandomRGB(),
    editor_foreground: {
      red: 255,
      green: 255,
      blue: 255
    },
    editorLineNumber_foreground: generateRandomRGB(),
    editor_selectionBackground: generateRandomRGB(),
    editor_selectionForeground: generateRandomRGB(),
    editor_inactiveSelectionBackground: generateRandomRGB(),
    editor_selectionHighlightBackground: generateRandomRGB(),
    editor_selectionHighlightBorder: generateRandomRGB(),
    editorBracketMatch_background: generateRandomRGB(),
    editorBracketMatch_border: generateRandomRGB(),
    tokenColors: {
      comment_foreground: generateRandomRGB(),
      string_foreground: generateRandomRGB(),
      number_foreground: generateRandomRGB(),
      builtIn_constant_foreground: generateRandomRGB(),
      variable_foreground: generateRandomRGB(),
      keyword_foreground: generateRandomRGB(),
      storage_foreground: generateRandomRGB(),
      storageType_foreground: generateRandomRGB(),
      className_foreground: generateRandomRGB(),
      functionName_foreground: generateRandomRGB(),
      functionArgument_foreground: generateRandomRGB()
    }
  };
}

function updateView(editorId, theme){
  document.querySelectorAll(editorId).forEach((element) => {
    element.style.background = "rgb(" +
      theme.editor_background.red + "," +
      theme.editor_background.green + "," +
      theme.editor_background.blue + ")";

    element.style.color = "rgb(" +
      theme.editor_foreground.red + "," +
      theme.editor_foreground.green + "," +
      theme.editor_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .line-num").forEach((element) => {
    element.style.color = "rgb(" +
      theme.editorLineNumber_foreground.red + "," +
      theme.editorLineNumber_foreground.green + "," +
      theme.editorLineNumber_foreground.blue + ")";
  });


  document.querySelectorAll(editorId + " .comment").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.comment_foreground.red + "," +
      theme.tokenColors.comment_foreground.green + "," +
      theme.tokenColors.comment_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .string").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.string_foreground.red + "," +
      theme.tokenColors.string_foreground.green + "," +
      theme.tokenColors.string_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .number").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.number_foreground.red + "," +
      theme.tokenColors.number_foreground.green + "," +
      theme.tokenColors.number_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .builtin-const").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.builtIn_constant_foreground.red + "," +
      theme.tokenColors.builtIn_constant_foreground.green + "," +
      theme.tokenColors.builtIn_constant_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .variable").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.variable_foreground.red + "," +
      theme.tokenColors.variable_foreground.green + "," +
      theme.tokenColors.variable_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .keyword").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.keyword_foreground.red + "," +
      theme.tokenColors.keyword_foreground.green + "," +
      theme.tokenColors.keyword_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .storage").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.storage_foreground.red + "," +
      theme.tokenColors.storage_foreground.green + "," +
      theme.tokenColors.storage_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .storage-type").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.storageType_foreground.red + "," +
      theme.tokenColors.storageType_foreground.green + "," +
      theme.tokenColors.storageType_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .class-name").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.className_foreground.red + "," +
      theme.tokenColors.className_foreground.green + "," +
      theme.tokenColors.className_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .func-name").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.functionName_foreground.red + "," +
      theme.tokenColors.functionName_foreground.green + "," +
      theme.tokenColors.functionName_foreground.blue + ")";
  });

  document.querySelectorAll(editorId + " .func-arg").forEach((element) => {
    element.style.color = "rgb(" +
      theme.tokenColors.functionArgument_foreground.red + "," +
      theme.tokenColors.functionArgument_foreground.green + "," +
      theme.tokenColors.functionArgument_foreground.blue + ")";
  });


  document.querySelectorAll(editorId + " .selected").forEach((element) => {
    element.style.background = "rgb(" +
      theme.editor_selectionBackground.red + "," +
      theme.editor_selectionBackground.green + "," +
      theme.editor_selectionBackground.blue + ")";
    element.style.color = "rgb(" +
      theme.editor_selectionForeground.red + "," +
      theme.editor_selectionForeground.green + "," +
      theme.editor_selectionForeground.blue + ")";
  });

  document.querySelectorAll(editorId + " .inactive-selected").forEach((element) => {
    element.style.background = "rgb(" +
      theme.editor_inactiveSelectionBackground.red + "," +
      theme.editor_inactiveSelectionBackground.green + "," +
      theme.editor_inactiveSelectionBackground.blue + ")";
  });

  document.querySelectorAll(editorId + " .highligth-selected").forEach((element) => {
    element.style.background = "rgb(" +
      theme.editor_selectionHighlightBackground.red + "," +
      theme.editor_selectionHighlightBackground.green + "," +
      theme.editor_selectionHighlightBackground.blue + ")";
    element.style.border = "1px dotted rgb(" +
      theme.editor_selectionHighlightBorder.red + "," +
      theme.editor_selectionHighlightBorder.green + "," +
      theme.editor_selectionHighlightBorder.blue + ")";
  });

  document.querySelectorAll(editorId + " .selected-bracket").forEach((element) => {
    element.style.background = "rgb(" +
      theme.editorBracketMatch_background.red + "," +
      theme.editorBracketMatch_background.green + "," +
      theme.editorBracketMatch_background.blue + ")";
    element.style.border = "1px dotted rgb(" +
      theme.editorBracketMatch_border.red + "," +
      theme.editorBracketMatch_border.green + "," +
      theme.editorBracketMatch_border.blue + ")";
  });
}

function setStars(whichStar) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.add("gold");
    if (i >= whichStar) {
      break;
    }
  }
}

function clearStars() {
  for (const star of stars) {
    star.classList.remove("gold");
  }
}

function addNewTheme(editorId, {theme, score}) {
  const newTheme = document.createElement("div");
  newTheme.classList.add("editor");
  newTheme.id = editorId;
  themes.appendChild(newTheme);
  updateView(editorId, theme);
}

const stars = document.querySelectorAll(".star");
const themes = document.getElementById("themes")

window.localStorage.trainingData = window.localStorage.trainingData || JSON.stringify([]);

var currentTheme = generateRandomTheme();


stars.forEach((star, i) => {
  const score = i / 4;
  star.addEventListener("mouseenter", setStars.bind(setStars, i));
  star.addEventListener("mouseleave", clearStars);
  star.addEventListener("click", saveTrainingData.bind(saveTrainingData, score));
});

function saveTrainingData(score) {
  const data = JSON.parse(window.localStorage.trainingData)

  data.push({
    input: currentTheme,
    output: [score]
  })

  window.localStorage.trainingData = JSON.stringify(data)


  predictThemeCombinations()
  clearStars()
  generateRandomTheme()
}

function predictThemeCombinations() {
  const data = JSON.parse(window.localStorage.trainingData)
  if (!data.length) {
    return;
  }

  themes.innerHTML = ""
  const net = new brain.NeuralNetwork({activation: "leaky-relu"});
  const results = []

  net.train(data)

  for (let i = 0; i < 100000; i++) {
    const tempTheme = generateRandomTheme();

    const [ score ] = net.run(tempTheme);
    results.push({ tempTheme, score});
  }

  // sort results
  const sortedResults = results.sort(function(a, b) {
    var a = a.score
    var b = b.score

    return b - a
  })

  // keep the top 20 results!
  for (let i = 0; i < 20; i++) {
    addNewTheme("editor-" + i, sortedResults[i])
  }
}
