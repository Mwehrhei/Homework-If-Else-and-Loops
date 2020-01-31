var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(i=0;i<animals.length;i++){
 // If the array item is a "cat", it should write a line saying "I am a cat" to the HTML. 
  if(animals[i]=="cat"){
    document.querySelector(".monster" +i).innerHTML = "I am a cat";}
  //Otherwise, if the item is a dog, it should write a line saying "borf borf" to the HTML.
  else if(animals[i]=="dog"){
    document.querySelector(".monster" +i).innerHTML = "borf borf";}
  //Otherwise, it should write a line saying "I'm an animal".
  else{
    document.querySelector(".monster" +i).innerHTML = "I am an animal";}
                       }