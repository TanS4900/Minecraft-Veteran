function populate(){
  if (quiz.isEnded()){
      //comment showscore 
  }
  else {
      //show questions
      var element = document.getElementById("question");

      element.innerHTML = quiz.getQuestionIndex().text;

      //showchoices
      var choices = qiuz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++){

      }
  }
}


var questions = [
new Question("What is the default skin, and what name does it have?",["Alex","Lily","Doge","Steve"],"Steve"),
new Question("What are the main hostile mobs in Minecraft?" ,["Spiders,Creepers,Enderman.Skeletons, and Zombies","Wither, and Ghasts","Blazes,wither skeletons,ghasts, and pigmen","None of the above"],"Spiders,Creepers,Enderman.Skeletons, and Zombies"),
new Question("What are the four mobs you can tame in Minecraft?" ,["Sheep,Cows,Pigs,and Rabbits","Wolves,Cats,Horses,and Foxes","Blazes,wither skeletons,ghasts, and pigmen","Villagers, Iron Golems,Enderman, and Wither Skeletons"],"Wolves,Cats,Horses,and Foxes"),
new Question ("Which Minecraft character is well-known to be scary?" ,["Slenderman","Enderdragon","Herobrine","None of the above"],"Herobrine"),
new Question ("Who created Minecraft?" ,["Jerry","Jeb","Notch","Herobrine"],"Notch")
];



var quiz = new Quiz(questions);


populate();