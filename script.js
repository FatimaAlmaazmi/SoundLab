var audio1 = document.getElementById("drums").volume = 0.2;

var intro = document.querySelector('.intro');

drums.addEventListener('play', function(){

 console.log("playing");

});

var catdiv = document.querySelector('.catdiv');
var ott = document.querySelector('.ott');

intro.addEventListener('click', function(){
  intro.classList.add('hidden');
  catdiv.style.display = "flex";
  ott.style.display = "flex";
  drums.play();
});

var audio2 = document.getElementById("cat").volume = 0.5;

cat.addEventListener('play', function(){

 console.log("playing cat");

});


document.body.addEventListener('keydown', function(c){
  if(event.key == 'c'){

    cat.play();

    var popupCat = document.createElement('div');
    popupCat.classList.add('popupcat');

     popupCat.style.top = window.innerHeight * Math.random() + "px";
     popupCat.style.left = window.innerWidth * Math.random() + "px";
     setInterval(function(){
        popupCat.remove();

      }, 2000);

  document.body.appendChild(popupCat);

  }
});



const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();

autoWah.Q.value = 6;

const synth = new Tone.Synth().connect(autoWah);

document.body.addEventListener('keydown', function(event){
  if(event.key == '1'){
    synth.triggerAttackRelease("C4", "8n");
  }
  else if(event.key == '2'){
synth.triggerAttackRelease("E4", "8n");

  }
  else if(event.key == '3'){
synth.triggerAttackRelease("G4", "8n");

  }
})
