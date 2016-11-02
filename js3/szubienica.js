var bazaHasel = new Array(10);
bazaHasel[0] = "Czuć się jak ryba w wodzie";
bazaHasel[1] = "Do wesela się zagoi";
bazaHasel[2] = "Co ma wisieć nie utonie";
bazaHasel[3] = "Jaka praca taka płaca";
bazaHasel[4] = "Kto pyta nie błądzi";
bazaHasel[5] = "Szewc bez butów chodzi";
bazaHasel[6] = "W zdrowym ciele zdrowy duch";
bazaHasel[7] = "Szukać igły w stogu siana";
bazaHasel[8] = "Co się odwlecze to nie uciecze";
bazaHasel[9] = "Hulaj dusza piekła nie ma";

var rand = Math.floor(Math.random()*9+1);
var haslo = bazaHasel[rand];
haslo = haslo.toUpperCase();
var haslo1 = "";
var dlugosc = haslo.length;
var ile_skuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var litery = new Array(35);
litery = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"];﻿

for(i = 0; i < dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 +=" ";
	else haslo1 +="-";
}
function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

function start()
{
	var tresc_diva = "" ;
	for(i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva += '<div id="'+element+'"class="litera" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
		if((i+1)%7==0) tresc_diva += '<div style="clear:both;"></div>';
	}
	document.getElementById("alfabet").innerHTML = tresc_diva;
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce,znak) 
{
	if(miejsce > this.length-1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona=true;
		}
	}
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");
		ile_skuch++;
		var obraz = "img/s"+ile_skuch+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	if(haslo == haslo1) 
	document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło:"+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	if(ile_skuch>=9)
	document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło:"+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
	trafiona = false;
	wypisz_haslo();
}
 
window.onload = start;
