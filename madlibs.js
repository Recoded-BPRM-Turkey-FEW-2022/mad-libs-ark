
function fetchStory(rawStory) {
  return fetch('./story.txt')
  .then(response => response.text()).then(processedStory => {
    console.log(processedStory);
    parseStory(processedStory);
  });
}

// fetchStory();

const FormMadlibs = document.getElementById("FormMadlibs");
const madLibsPreview = document.getElementById("formMadLibsPreview");


function parseStory(processedStory) {
const arrayStory = processedStory.split(" ");

const regexN = /[[n]]/;
const regexV = /[[v]]/;
const regexA = /[[a]]/;

for(let i of arrayStory) {
  if(regexN.test(i)) {
    const elementNoun = document.createElement("input");
    elementNoun.innerText = i;
    elementNoun.placeholder = "Noun";
    elementNoun.onkeydown = "handleEnter(event)";
    FormMadlibs.appendChild(elementNoun);

    const elementPreview = document.createElement("p");
    elementPreview.textContent = "Noun";
    elementPreview.style.color = "#5c8fff";
    madLibsPreview.appendChild(elementPreview);

    elementNoun.addEventListener("change", () => {
      if(elementNoun.value.length <= 20){
        elementPreview.textContent = elementNoun.value;
      }
      else {
        alert("A maximum of 20 characters is allowed.");
      }
      
    });
  }
  else if(regexV.test(i)) {
    const elementVerb = document.createElement("input");
    elementVerb.innerText = i;
    elementVerb.placeholder = "Verb";
    elementVerb.onkeydown = "handleEnter(event)";
    FormMadlibs.appendChild(elementVerb);

    const elementPreview = document.createElement("p");
    elementPreview.textContent = "Verb";
    elementPreview.style.color = "#5c8fff";
    madLibsPreview.appendChild(elementPreview);

    elementVerb.addEventListener("change", () => {
      if(elementVerb.value.length <= 20){
        elementPreview.textContent = elementVerb.value;
      }
      else {
        alert("A maximum of 20 characters is allowed.");
      }
    });
  }
  else if(regexA.test(i)) {
    const elementAdjective = document.createElement("input");
    elementAdjective.innerText = i;
    elementAdjective.placeholder = "Adjective";
    elementAdjective.onkeydown = "handleEnter(event)";
    FormMadlibs.appendChild(elementAdjective);

    const elementPreview = document.createElement("p");
    elementPreview.textContent = "Adjective";
    elementPreview.style.color = "#5c8fff";
    madLibsPreview.appendChild(elementPreview);

    elementAdjective.addEventListener("change", () => {
      if(elementAdjective.value.length <= 20){
        elementPreview.textContent = elementAdjective.value;
      }
      else {
        alert("A maximum of 20 characters is allowed.");
      }
    });
  }
  else {
    const elementNoun = document.createElement("label");
    elementNoun.textContent = i;

    const elementPreview = document.createElement("p");
    elementPreview.textContent = i;

    FormMadlibs.appendChild(elementNoun);
    madLibsPreview.appendChild(elementPreview);
  }
}
}

function handleEnter(event) {
if (event.key==="Enter") {
  const index = [...FormMadlibs].indexOf(event.target);
  FormMadlibs.elements[index + 1].focus();
   //event.preventDefault();
}
}

FormMadlibs.addEventListener("keydown", handleEnter);

function previewChange(elementPreview, id) {
elementPreview.textContent = document.getElementById(id).value;
}

getRawStory().then(parseStory).then((processedStory) => {
// console.log(processedStory);
processedStory;
});