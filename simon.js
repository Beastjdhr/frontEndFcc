$(document).ready(function () {

  var strict= false;
  var started= false;
  var on = false;
  var url="https://s3.amazonaws.com/freecodecamp/simonSound";
  var colors=['green', 'red', 'yellow', 'blue'];
  var num=0;
  var userPicks=[];
  var simonPicks=[];
  var cSounds=[];
  var cur=0;
  var cp=0;

  $('#start').click( () => {
    cp++;
    if (cp==1) {
    if (started===false) {
      $("#start").css('color',"#64DD17");
      started=true;
      if(started===true && on===true) {
        simonPlay();
        $('#num').text('00');
      }
    }

  }
  else {
    $('#start').css('color','#536DFE');
    started=false;
  }
  });

  $("#strict").click( () => {
    if (strict===false) {
      strict=true;
      $('#strict').css('color','#FF6D00');
    }
    else {
      strict=false;
      $('#strict').css('color','#FFC107');
    }
  });

$('#green').click( () => {
  userPicks.push('green');
  cur= userPicks.length - 1;
  pressed('green',1, '#00E676');
  setTimeout( () => {
  check()}, 100);
});

$('#red').click( () => {
  userPicks.push('red');
  cur= userPicks.length - 1;
  pressed('red',2,'#FF1744');
  setTimeout( () => {
  check()}, 100);
});

$('#yellow').click( () => {
  userPicks.push('yellow');
  cur= userPicks.length - 1;
  pressed('yellow',3, '#FFEB3B');
  setTimeout( () => {
    check()}, 100);
});

$('#blue').click( () => {
  userPicks.push('blue');
  cur= userPicks.length - 1;
  pressed('blue',4,'#3D5AFE');
  setTimeout( () => {
  check()}, 100);
});

$('#toggle').click( () => {
    if(on===true) {
        on=false;
        $('#on').remove();
        $("#toggle").html('<i class="fa fa-toggle-off fa-4x" aria-hidden="true" id="off"></i>');
        $('#num').text('');
        kill();
    }
    else {
      on=true;
      $('#off').remove();
      $('#num').text('--');
      $('#toggle').html('<i class="fa fa-toggle-on fa-4x" id="on" aria-hidden="true"></i>');
      if (started===true && on===true) {
        $('#num').text('00');
        simonPlay();
      }
    }
});

$("#restart").click( () => { reset()});



function show() {
  var msP=1;
  for (var i=0;i<simonPicks.length;i++) {
    function solve (ind, mult) {
    setTimeout( () => {
      var sound= cSounds[ind];
      $('#'+simonPicks[ind]).css('background-color','#fff');
      var dir ="https://s3.amazonaws.com/freecodecamp/simonSound"+ sound +'.mp3';
      var aud= new Audio(dir);
      aud.play();
    }, mult * 250);
    setTimeout( () => {
      if (simonPicks[ind]=='green') {
        $('#'+ simonPicks[ind]).css('background-color','#00E676');
      }
      else if (simonPicks[ind]=='red') {
        $('#'+simonPicks[ind]).css('background-color','#FF1744');
      }
      else if (simonPicks[ind]=='yellow') {
        $('#'+simonPicks[ind]).css('background-color','#FFEB3B');
      }
      else {
        $('#'+simonPicks[ind]).css('background-color','#3D5AFE');
      }
    }, mult *500 );
    clearTimeout();
  }
  solve(i, msP);
  msP++;
  }
}




function check() {
  if (userPicks.length==simonPicks.length && userPicks[userPicks.length-1] != simonPicks[simonPicks.length-1] && strict===true) {
    reset();
  }
  else if (userPicks[cur] != simonPicks[cur] && strict === true) {
    $("#num").text('!!');
    reset();
  }
  else if (userPicks[cur] != simonPicks[cur] && strict=== false) {
    $('#num').text('!!');
    cur=0;
    userPicks=[];
    show();

  }
  else if (userPicks.length == simonPicks.length && userPicks[userPicks.length-1]==simonPicks[simonPicks.length-1]) {
    if (num==20) {
      $("#tit").text('You Won!');
      kil();
    }
    else {
    userPicks=[];
    num++;
    num= num<10? '0' + num : num;
    cur=0;
    $('#num').text(num);
    clearTimeout();
    simonPlay();
  }
  }


}

function simonPlay() {
  var rNum= Math.floor(Math.random()*colors.length);
  var randomColor= colors[rNum];
  simonPicks.push(randomColor);
  var cor= rNum+ 1;
  cSounds.push(cor);
  show();
}

function reset() {
  clearTimeout();
  setTimeout( () => {
  simonPicks=[];
  cSounds=[];
  strict=false;
  cur=0;
  num=0;
  $('#num').text('00');
  simonPlay();
}, 500);
}

function kill() {
  $('#num').text('--');
  simonPicks=[];
  clearTimeout();
  cSounds=[];
  started=false;
  num=0;
  on=false;
  cp=0;
  strict=false;
  simonPlay=[];
  cur=0;
}

function pressed(chr, sK, hex) {
  var aDir= url + sK + '.mp3';
  var savA= new Audio(aDir);
  savA.play();



  clearTimeout();
}


});
