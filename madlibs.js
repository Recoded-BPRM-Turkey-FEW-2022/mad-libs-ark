
function fetchStory(rawStory) {
    return fetch('./story.txt')
    .then(response => response.text()).then(processedStory => {
      console.log(processedStory);
      parseStory(processedStory);

    });
}

// fetchStory();

const FormMadlibs = document.getElementById("FormMadlibs");

function parseStory(processedStory) {
  const arrayStory = processedStory.split(" ");
  console.log(arrayStory);
  const regexN = /[[n]]/;
  const regexV = /[[v]]/;
  const regexA = /[[a]]/;
  for(let i of arrayStory) {
    if(regexN.test(i)) {
      console.log("Noun:", i);
      const elementNoun = document.createElement("input");
      elementNoun.innerText = i;
      // elementNoun.textContent = i;
      FormMadlibs.appendChild(elementNoun);
      // function to create elements

    }
    else if(regexV.test(i)) {
      const elementNoun = document.createElement("input");
      elementNoun.innerText = i;
      
      // function to create elements
    }
    else if(regexA.test(i)) {
      const elementNoun = document.createElement("input");
      elementNoun.innerText = i;
      
      // function to create elements
    }
    else {
      const elementNoun = document.createElement("label");
      // elementNoun.innerText = i + " ";
      elementNoun.textContent = i + " ";
      FormMadlibs.appendChild(elementNoun);
    }

  }
}



getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
});

