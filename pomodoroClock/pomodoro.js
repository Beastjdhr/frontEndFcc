$(document).ready(function () {
  var curS= 25;
  var curB=5;
  var sesh=curS;
  var brk=curB;
  var secs=1500;
  var pause=false;
  var cp=0;
  var bsecs=300;
  var buSecs=1500;
  var buBsecs=300;
  var killed= false;
  var session=0;

  $('#kill').click(function () {
    bsecs=-1;
    $("#timeK").text('');
    cp=0;
    killed=true;
    buSecs=-1;
    secs=-1;
    buBsecs=-1;
    curS=0;
    curB=0;
    clearInterval(session);
    $("#time").text('00:00');
    $("#seshT").text(curS);
    $("#breakT").text(curB);
  });

  $("#sMinus").click(function() {
    if(curS!= 0) {
    curS--;
    sesh=curS;
    secs= sesh*60;
    buSecs=secs;
    $('#seshT').text(curS);
  }
  });
  $("#sPlus").click(function() {
    curS++;
    sesh=curS;
    secs= sesh*60;
    buSecs=secs;
    $('#seshT').text(curS);
  });
  $("#bMinus").click(function() {
    if(curB!= 0) {
    curB--;
    bsecs=curB*60;
    buBsecs=bsecs;
    $('#breakT').text(curB);
  }
  });
  $("#bPlus").click(function() {
    curB++;
    brk=curB;
    bsecs=curB*60;
    buBsecs=bsecs;
    $('#breakT').text(curB);
  });

  $(".play").click(function () {
    pause=false;
    cp++;
    killed=false;
    if (cp==1) {
    session=setInterval(myTimer, 1000);
  }
  });

$('#restart').click(function () {
  secs= buSecs;
  bsecs=buBsecs;
});


  $('#pause').click(function () {
    pause=true;

  })

  function myTimer () {
    if (pause===false && secs>-1 && killed===false && cp>0) {
      $('#timeK').text("Time until break");
      var mins= Math.floor(secs/60);
      var segs= secs%60;
      mins=mins<10 ? "0" + mins : mins;
      segs= segs< 10 ? "0" +segs : segs;
      var time= mins+":"+segs;
      if(secs==0) {
        var mp3= 'http://www.freesfx.co.uk/rx2/mp3s/1/800_1244828278.mp3';
        var au= new Audio(mp3);
        au.play();
      }
      if (segs>-1 || mins>0) {
      $("#time").text(time);
      }
      secs--;
    }



    else if (pause===false && secs<=-1 && killed===false && cp>0) {
      $("#timeK").css('font-size','1.9rem');
      $("#timeK").text("Time until break's over");
      var bmins= Math.floor(bsecs/60);
      var bsegs= bsecs%60;
      bmins=bmins<10 ? "0" + bmins : bmins;
      bsegs= bsegs< 10 ? "0" +bsegs : bsegs;
      var btime= bmins+":"+bsegs;
      if(bsecs<0) {
        var wav= 'http://www.bndclan.com/Bend3r/Bend3r/hl-content/cstrike/sound/ambience/100airhorn.wav';
        var aud= new Audio(wav);
        aud.play();
        cp=0;
        $("#timeK").text("Break's over!");
        secs=buSecs;
        $("#time").text("00:00");
        bsecs=buBsecs;
        clearInterval(session);
      }
      if (bsecs>-1) {
      $("#time").text(btime);
      bsecs--;
    }
}

  };
});
