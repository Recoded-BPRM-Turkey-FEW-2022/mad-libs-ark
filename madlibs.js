
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
  // console.log(arrayStory);

  const regexN = /[[n]]/;
  const regexV = /[[v]]/;
  const regexA = /[[a]]/;

  let id = 0;

  for(let i of arrayStory) {
    if(regexN.test(i)) {
      const elementNoun = document.createElement("input");
      elementNoun.innerText = i;
      elementNoun.placeholder = "Noun";
      elementNoun.id = id;
      elementNoun.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementNoun);

      const elementPreview = document.createElement("label");
      elementPreview.textContent = "Noun";
      elementPreview.style.color = "#5c8fff";
      madLibsPreview.appendChild(elementPreview);

      elementNoun.addEventListener("change", () => {
        elementPreview.textContent = elementNoun.value;
      });
      id++;

    }
    else if(regexV.test(i)) {
      const elementVerb = document.createElement("input");
      elementVerb.innerText = i;
      elementVerb.placeholder = "Verb";
      elementVerb.id = id;
      elementVerb.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementVerb);

      const elementPreview = document.createElement("label");
      elementPreview.textContent = "Verb";
      elementPreview.style.color = "#5c8fff";
      madLibsPreview.appendChild(elementPreview);

      elementVerb.addEventListener("change", () => {
        elementPreview.textContent = elementVerb.value;
      });

      id++;

    }
    else if(regexA.test(i)) {
      const elementAdjective = document.createElement("input");
      elementAdjective.innerText = i;
      elementAdjective.placeholder = "Adjective";
      elementAdjective.id = id;
      elementAdjective.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementAdjective);

      const elementPreview = document.createElement("label");
      elementPreview.textContent = "Adjective";
      elementPreview.style.color = "#5c8fff";
      madLibsPreview.appendChild(elementPreview);

      elementAdjective.addEventListener("change", () => {
        elementPreview.textContent = elementAdjective.value;
      });
      id++;

    }
    else {
      const elementNoun = document.createElement("label");
      const elementPreview = document.createElement("label");
      elementNoun.textContent = i;
      elementPreview.textContent = i;
      FormMadlibs.appendChild(elementNoun);
      
      madLibsPreview.appendChild(elementPreview);

      id++;

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

