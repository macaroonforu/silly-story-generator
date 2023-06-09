const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."; 

const insertX = ["Willy the Goblin", " Big Daddy", " Father Christmas"]; 
const insertY = ["the soup kitchen", "Disneyland", "the White House"]; 
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]; 

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText; 
    newStory = newStory.replaceAll(":insertx:", randomValueFromArray(insertX)); 
    newStory = newStory.replace(":inserty:", randomValueFromArray(insertY));
    newStory = newStory.replace(":insertz:", randomValueFromArray(insertZ)); 
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name); 
  }
  if(document.getElementById("uk").checked) {
    newStory = newStory.replace("94 fahrenheit", Math.round(5/(9*(94-32))) + ' centigrade'); 
    newStory = newStory.replace("300 pounds", Math.round(300/14) + ' stone'); 
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}




   


