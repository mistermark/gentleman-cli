var speed = 300;

$(function(){
  var $colorChangeElem = $('[data-js="strobe-text"]');
  var $zones = $colorChangeElem.find();
 
  $colorChangeElem.each(function(i){
    
    var colorTimeout = {
      id: null,
      $zones: $(this).find('[data-js="zone"]')
    };

    colorTimeout.$zones.on('click', onZoneClick(colorTimeout));

    repeater(colorTimeout, speed);
  });

  // repeater(colorTimeout);

  // $colorChangeElem.on('click', function(e){

  // });
  
});

function randomColor(){
  var colorNum = Math.floor(Math.random() * 255);
  return colorNum;
}

function changeColor(index){
    if(Math.floor(Math.random() * 2) === 0){
      var rgb = [randomColor(), randomColor(), randomColor()];
      $(this).css({ 'color': 'rgb(' + rgb.join(',') + ')'});
    }
}

function repeater(colorTimeout, time){
  colorTimeout.$zones.each(changeColor);
  colorTimeout.id = setTimeout(function(){
    repeater(colorTimeout, time);
  }, time);
}

function onZoneClick(colorTimeout){
  return function(e){

    //e.preventDefault();

    if(colorTimeout.id === null){

      repeater(colorTimeout, speed);

    } else {

      clearTimeout(colorTimeout.id);
      colorTimeout.id = null;
      
    }
  };
}