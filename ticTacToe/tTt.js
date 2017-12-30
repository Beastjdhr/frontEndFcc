$(document).ready( function () {
	var grid= ['one','two','three','four','five','six','seven','eight','nine'];
	var player='';
	var pCells=[];
	var cCells=[];
	var over=false;
	var comp='';
	var randCell=0;
	var victory=[['one','two','three'],['one','five','nine'],['four','five','six'],['seven','eight','nine'],['three','five','seven'],['two','five','eight'],['three','six','nine'],['one','four','seven']];

	$('#reset').click(function () {
		grid=[];
		over=false;
		pCells=[];
		checkVc=[];
		checkV=[];
		cCells=[];
		grid=['one','two','three','four','five','six','seven','eight','nine'];
		$('#result').css('visibility','hidden');
		for (var m=0;m<grid.length;m++) {
			$('#'+grid[m]).css('visibility','hidden');
			$('#'+grid[m]).css('color','#651FFF');
		}
	});
	$("#circle").click(function () {
		$("#intro").css("display","none");
		player= 'circle';
		comp= 'cross';
	});
	$("#cross").click(function () {
		$("#intro").css('display','none');
		player='cross';
		comp='circle';
	});
	$('.one').click( function () {
		playerMove('one');
		setTimeout(function () {compMove();},500);
	});
	$('.two').click(function () {
		playerMove('two');
		setTimeout(function () {compMove();},500);

	});
	$('.three').click(function () {
		playerMove('three');
		setTimeout(function () {compMove();},500);

	});
	$('.four').click(function () {
		playerMove('four');
		setTimeout(function () {compMove();},500);

	});
	$('.five').click(function () {
		playerMove('five');
		setTimeout(function () {compMove();},500);

	});
	$('.six').click(function () {
		playerMove('six');
		setTimeout(function () {compMove();},500);

	});
	$('.seven').click(function () {
		playerMove('seven');
		setTimeout(function () {compMove();},500);

	});
	$('.eight').click(function () {
		playerMove('eight');
		setTimeout(function () {compMove();},500);

	});
	$('.nine').click(function () {
		playerMove('nine');
		setTimeout(function () {compMove();},500);

	});

function playerMove(cell) {
	var id="#"+cell;
	pCells.push(cell);
	if (player=='circle') {
		$(id).text('O');
		$(id).css('visibility','visible');
		var ind= grid.indexOf(cell);
		grid.splice(ind,1);
	}
	else {
		$(id).text('X');
		$(id).css('visibility','visible');
		var ind= grid.indexOf(cell);
		grid.splice(ind,1);
	}
	for (var i=0;i<victory.length;i++) {
		var checkV=[];
		for (var n=0;n<victory[i].length;n++) {
			if (pCells.indexOf(victory[i][n])>=0 && checkV.indexOf(victory[i][n])==-1) {
				checkV.push(victory[i][n]);
			}
		}
		if (checkV.length>2) {
			over=true;
			for (var s=0;s<checkV.length;s++) {
				$("#"+checkV[s]).css('color','#D32F2F');
			}
			setTimeout(function () { $('#result').css('visibility','visible')}, 500);
		}
	}

}

function compMove() {
	if (over===false) {
	randCell= grid[Math.floor(Math.random()*grid.length)];
	cCells.push(randCell);
	if (player=='circle') {
		$("#"+randCell).text('X');
		$('#'+randCell).css('visibility','visible');
	}
	else {
		$('#'+randCell).css('visibility','visible');
		$('#'+randCell).text("O");
	}
	var rInd= grid.indexOf(randCell);
	grid.splice(rInd,1);

	for (var j=0;j<victory.length;j++) {
		var checkVc=[];
		for (var k=0;k<victory[j].length;k++) {
			if (cCells.indexOf(victory[j][k])>=0 && checkVc.indexOf(victory[j][k])==-1) {
				checkVc.push(victory[j][k]);
			}
		}
		if (checkVc.length>2) {
			over=true;
			console.log(checkVc);
			for (var t=0;t<checkVc.length;t++) {
				$("#"+checkVc[t]).css('color','#D32F2F');
			}
			setTimeout(function () {
				$('#result').css('visibility','visible');
				$('#msg').text('You lost.')}, 500);
		}
	}
}
}

});
