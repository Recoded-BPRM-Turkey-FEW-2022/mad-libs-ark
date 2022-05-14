
function fetchStory(rawStory) {
    return fetch('./story.txt')
    .then(response => response.text()).then(processedStory => {
      console.log(processedStory);
      parseStory(processedStory);
    });
}

// fetchStory();

const FormMadlibs = document.getElementById("FormMadlibs");
const madLibsPreview = document.getElementById("madLibsPreview");


function parseStory(processedStory) {
  const arrayStory = processedStory.split(" ");
  console.log(arrayStory);

  const regexN = /[[n]]/;
  const regexV = /[[v]]/;
  const regexA = /[[a]]/;

  for(let i of arrayStory) {
    if(regexN.test(i)) {
      // console.log("Noun:", i);
      const elementNoun = document.createElement("input");
      elementNoun.innerText = i;
      elementNoun.placeholder = "Noun";
      elementNoun.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementNoun);
      
    }
    else if(regexV.test(i)) {
      const elementVerb = document.createElement("input");
      elementVerb.innerText = i;
      elementVerb.placeholder = "Verb";
      elementVerb.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementVerb);
      
    }
    else if(regexA.test(i)) {
      const elementAdjective = document.createElement("input");
      elementAdjective.innerText = i;
      elementAdjective.placeholder = "Adjective";
      elementAdjective.onkeydown = "handleEnter(event)";
      FormMadlibs.appendChild(elementAdjective);
      // madLibsPreview.appendChild(elementAdjective);
      
    }
    else {
      const elementNoun = document.createElement("label");
      // const elementNoun2 = document.createElement("label");
      elementNoun.textContent = i;
      // elementNoun2.textContent = i;
      FormMadlibs.appendChild(elementNoun);
      // madLibsPreview.appendChild(elementNoun2);
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

// function storyPreview() {
  
// }

getRawStory().then(parseStory).then((processedStory) => {
  // console.log(processedStory);
  processedStory;
});

