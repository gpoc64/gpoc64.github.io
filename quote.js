 var prev=0;


function update(){
  change();
 createButton(); 
}




function change() {
  var quotes = ["Don't cry because it's over, smile because it happened@Dr. Seuss", "In the end, it's not the years in your life that count. It's the life in your years.@Abraham Lincoln", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.@Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch", "A room without books is like a body without a soul.@Marcus Tullius Cicero", "So many books, so little time.” @Frank Zappa", "Be the change that you wish to see in the world.@Mahatma Gandhi", "If you tell the truth, you don't have to remember anything.@Mark Twain"];
var num=Math.floor(Math.random() * quotes.length);
  while(num==prev){
    num=Math.floor(Math.random() * quotes.length);
  }
  prev=num;
  var quotedisplay = quotes[num].split("@");
  //console.log(quotedisplay[0]);
  //console.log(quotedisplay[1]);

  document.getElementById('quote').innerHTML =quotedisplay[0];
  document.getElementById('author').innerHTML = "--" + quotedisplay[1];

}

$(document).ready(function() {

  change();

  $("dt").css("fontSize", "19px");
  $("dl").css("fontSize", "16px");

  
});