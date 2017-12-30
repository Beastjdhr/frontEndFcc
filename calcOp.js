$(document).ready(function() {
  var screen='';
  $('#one').click(function () {
    screen+='1';
    $('#screen').text(screen);
  });
  $('#two').click(function () {
    screen+='2';
    $('#screen').text(screen);
  });
  $('#three').click(function () {
    screen+='3';
    $('#screen').text(screen);
  });
  $('#four').click(function () {
    screen+='4';
    $('#screen').text(screen);
  });
  $('#five').click(function () {
    screen+='5';
    $('#screen').text(screen);
  });
  $('#six').click(function () {
    screen+='6';
    $('#screen').text(screen);
  });
  $('#seven').click(function () {
    screen+='7';
    $('#screen').text(screen);
  });
  $('#eight').click(function () {
    screen+='8';
    $('#screen').text(screen);
  });
  $('#nine').click(function () {
    screen+='9';
    $('#screen').text(screen);
  });
  $('#zero').click(function () {
    screen+='0';
    $('#screen').text(screen);
  });
  $('#minus').click(function () {
    screen+='-';
    $('#screen').text(screen);
  });
  $('#divide').click(function () {
    screen+='/';
    $('#screen').text(screen);
  });$('#times').click(function () {
    screen+='*';
    $('#screen').text(screen);
  });$('#plus').click(function () {
    screen+='+';
    $('#screen').text(screen);
  });
    $('#clear').click(function() {
      screen='';
      $('#screen').text(screen);
    });
    $('#dot').click(function () {
      screen+='.';
      $('#screen').text(screen);
    });
    $('#equal').click(function () {
        if (screen.endsWith('*') || screen.endsWith('+') || screen.endsWith('-') || screen.endsWith('/')) {
          $('#screen').text('error: invalid input');
        }
        else {
        var res= eval(screen);
        screen=res;
        $('#screen').text(screen);
      }
    });
});
