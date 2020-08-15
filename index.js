 var mt = document.getElementById("MT");
 mt.onclick = function() {
     document.getElementById("ar1").style.display = "flex"
     document.getElementById("ar2").style.display = "none"
     document.getElementById("ar3").style.display = "none"
     document.getElementById("ar4").style.display = "none"
     document.getElementById("ar5").style.display = "none"
 }

 function bks() {
     document.getElementById("ar1").style.display = "none"
     document.getElementById("ar2").style.display = "flex"
     document.getElementById("ar3").style.display = "none"
     document.getElementById("ar4").style.display = "none"
     document.getElementById("ar5").style.display = "none"
 }
 var PR = document.getElementById("pr");
 PR.onclick = function() {
     document.getElementById("ar1").style.display = "none"
     document.getElementById("ar2").style.display = "none"
     document.getElementById("ar3").style.display = "flex"
     document.getElementById("ar4").style.display = "none"
     document.getElementById("ar5").style.display = "none"
 }
 var CF = document.getElementById("cf");
 CF.onclick = function() {
     document.getElementById("ar1").style.display = "none"
     document.getElementById("ar2").style.display = "none"
     document.getElementById("ar3").style.display = "none"
     document.getElementById("ar4").style.display = "flex"
     document.getElementById("ar5").style.display = "none"
 }
 var HB = document.getElementById("hb");
 HB.onclick = function() {
     document.getElementById("ar1").style.display = "none"
     document.getElementById("ar2").style.display = "none"
     document.getElementById("ar3").style.display = "none"
     document.getElementById("ar4").style.display = "none"
     document.getElementById("ar5").style.display = "flex"
 }
 var bar = document.getElementById("bars");
 bar.onclick = function() {
     var x = document.getElementsByClassName("bars");

     x[0].style.backgroundColor = "black";
     x[0].style.fontSize = "15px";
     x[0].style.display = "grid";
     x[0].style.position = "absolute";
     x[0].style.Left = "0";
     x[0].style.marginTop = "50px";
     x[0].style.height = "200px";
     x[0].style.width = "50%";
     x[0].style.height = "30%";
     x[0].style.animation = "hari1 1s"
     document.getElementById("circle").style.display = "block";

 }
 var circle1 = document.getElementById("circle");
 circle1.onclick = function() {
     var y = document.getElementsByClassName("bars");
     y[0].style.display = "none"
     circle1.style.display = "none"
 }
 var btn2 = document.getElementsByClassName("btn2");
 btn2[0].onclick = function() {
     document.getElementsByClassName("f2")[0].style.display = "block"
     document.getElementsByClassName("f3")[0].style.display = "none"
     document.getElementsByClassName("f4")[0].style.display = "none"
     document.getElementsByClassName("f1")[0].style.display = "none"

 }
 var btn3 = document.getElementsByClassName("btn3");
 btn3[0].onclick = function() {
     document.getElementsByClassName("f2")[0].style.display = "none"
     document.getElementsByClassName("f3")[0].style.display = "block"
     document.getElementsByClassName("f4")[0].style.display = "none"
     document.getElementsByClassName("f1")[0].style.display = "none"

 }
 var btn4 = document.getElementsByClassName("btn4");
 btn4[0].onclick = function() {
     document.getElementsByClassName("f2")[0].style.display = "none"
     document.getElementsByClassName("f3")[0].style.display = "none"
     document.getElementsByClassName("f4")[0].style.display = "block"
     document.getElementsByClassName("f1")[0].style.display = "none"

 }
 var btn1 = document.getElementsByClassName("btn1");
 btn1[0].onclick = function() {
     document.getElementsByClassName("f2")[0].style.display = "none"
     document.getElementsByClassName("f3")[0].style.display = "none"
     document.getElementsByClassName("f4")[0].style.display = "none"
     document.getElementsByClassName("f1")[0].style.display = "block"

 }
 var bt2 = document.getElementById("bt2");
 bt2.onclick = function() {
     document.getElementsByClassName("ff2")[0].style.display = "block"
     document.getElementsByClassName("ff3")[0].style.display = "none"
     document.getElementsByClassName("ff4")[0].style.display = "none"
     document.getElementsByClassName("ff1")[0].style.display = "none"

 }
 var bt3 = document.getElementById("bt3");
 bt3.onclick = function() {
     document.getElementsByClassName("ff2")[0].style.display = "none"
     document.getElementsByClassName("ff3")[0].style.display = "block"
     document.getElementsByClassName("ff4")[0].style.display = "none"
     document.getElementsByClassName("ff1")[0].style.display = "none"

 }
 var bt4 = document.getElementById("bt4");
 bt4.onclick = function() {
     document.getElementsByClassName("ff2")[0].style.display = "none"
     document.getElementsByClassName("ff3")[0].style.display = "none"
     document.getElementsByClassName("ff4")[0].style.display = "block"
     document.getElementsByClassName("ff1")[0].style.display = "none"

 }
 var bt1 = document.getElementById("bt1");
 bt1.onclick = function() {
     document.getElementsByClassName("ff2")[0].style.display = "none"
     document.getElementsByClassName("ff3")[0].style.display = "none"
     document.getElementsByClassName("ff4")[0].style.display = "none"
     document.getElementsByClassName("ff1")[0].style.display = "block"

 }
 var bn2 = document.getElementById("bn2");
 bn2.onclick = function() {
     document.getElementsByClassName("fff2")[0].style.display = "block"
     document.getElementsByClassName("fff3")[0].style.display = "none"
     document.getElementsByClassName("fff4")[0].style.display = "none"
     document.getElementsByClassName("fff1")[0].style.display = "none"

 }
 var bn3 = document.getElementById("bn3");
 bn3.onclick = function() {
     document.getElementsByClassName("fff2")[0].style.display = "none"
     document.getElementsByClassName("fff3")[0].style.display = "block"
     document.getElementsByClassName("fff4")[0].style.display = "none"
     document.getElementsByClassName("fff1")[0].style.display = "none"

 }
 var bn4 = document.getElementById("bn4");
 bn4.onclick = function() {
     document.getElementsByClassName("fff2")[0].style.display = "none"
     document.getElementsByClassName("fff3")[0].style.display = "none"
     document.getElementsByClassName("fff4")[0].style.display = "block"
     document.getElementsByClassName("fff1")[0].style.display = "none"

 }
 var bn1 = document.getElementById("bn1");
 bn1.onclick = function() {
     document.getElementsByClassName("fff2")[0].style.display = "none"
     document.getElementsByClassName("fff3")[0].style.display = "none"
     document.getElementsByClassName("fff4")[0].style.display = "none"
     document.getElementsByClassName("fff1")[0].style.display = "block"

 }
 var bnt2 = document.getElementById("bnt2");
 bnt2.onclick = function() {
     document.getElementsByClassName("ffff2")[0].style.display = "block"
     document.getElementsByClassName("ffff3")[0].style.display = "none"
     document.getElementsByClassName("ffff4")[0].style.display = "none"
     document.getElementsByClassName("ffff1")[0].style.display = "none"

 }
 var bnt3 = document.getElementById("bnt3");
 bnt3.onclick = function() {
     document.getElementsByClassName("ffff2")[0].style.display = "none"
     document.getElementsByClassName("ffff3")[0].style.display = "block"
     document.getElementsByClassName("ffff4")[0].style.display = "none"
     document.getElementsByClassName("ffff1")[0].style.display = "none"

 }
 var bnt4 = document.getElementById("bnt4");
 bnt4.onclick = function() {
     document.getElementsByClassName("ffff2")[0].style.display = "none"
     document.getElementsByClassName("ffff3")[0].style.display = "none"
     document.getElementsByClassName("ffff4")[0].style.display = "block"
     document.getElementsByClassName("ffff1")[0].style.display = "none"

 }
 var bnt1 = document.getElementById("bnt1");
 bnt1.onclick = function() {
     document.getElementsByClassName("ffff2")[0].style.display = "none"
     document.getElementsByClassName("ffff3")[0].style.display = "none"
     document.getElementsByClassName("ffff4")[0].style.display = "none"
     document.getElementsByClassName("ffff1")[0].style.display = "block"

 }
 var mn2 = document.getElementById("mn2");
 mn2.onclick = function() {
     document.getElementsByClassName("mt2")[0].style.display = "block"
     document.getElementsByClassName("mt3")[0].style.display = "none"
     document.getElementsByClassName("mt4")[0].style.display = "none"
     document.getElementsByClassName("mt1")[0].style.display = "none"

 }
 var mn3 = document.getElementById("mn3");
 mn3.onclick = function() {
     document.getElementsByClassName("mt2")[0].style.display = "none"
     document.getElementsByClassName("mt3")[0].style.display = "block"
     document.getElementsByClassName("mt4")[0].style.display = "none"
     document.getElementsByClassName("mt1")[0].style.display = "none"

 }
 var mn4 = document.getElementById("mn4");
 mn4.onclick = function() {
     document.getElementsByClassName("mt2")[0].style.display = "none"
     document.getElementsByClassName("mt3")[0].style.display = "none"
     document.getElementsByClassName("mt4")[0].style.display = "block"
     document.getElementsByClassName("mt1")[0].style.display = "none"

 }
 var mn1 = document.getElementById("mn1");
 mn1.onclick = function() {
     document.getElementsByClassName("mt2")[0].style.display = "none"
     document.getElementsByClassName("mt3")[0].style.display = "none"
     document.getElementsByClassName("mt4")[0].style.display = "none"
     document.getElementsByClassName("mt1")[0].style.display = "block"

 }
 var mmn2 = document.getElementById("mmn2");
 mmn2.onclick = function() {
     document.getElementsByClassName("mmt2")[0].style.display = "block"
     document.getElementsByClassName("mmt3")[0].style.display = "none"
     document.getElementsByClassName("mmt4")[0].style.display = "none"
     document.getElementsByClassName("mmt1")[0].style.display = "none"

 }
 var mmn3 = document.getElementById("mmn3");
 mmn3.onclick = function() {
     document.getElementsByClassName("mmt2")[0].style.display = "none"
     document.getElementsByClassName("mmt3")[0].style.display = "block"
     document.getElementsByClassName("mmt4")[0].style.display = "none"
     document.getElementsByClassName("mmt1")[0].style.display = "none"

 }
 var mmn4 = document.getElementById("mmn4");
 mmn4.onclick = function() {
     document.getElementsByClassName("mmt2")[0].style.display = "none"
     document.getElementsByClassName("mmt3")[0].style.display = "none"
     document.getElementsByClassName("mmt4")[0].style.display = "block"
     document.getElementsByClassName("mmt1")[0].style.display = "none"

 }
 var mmn1 = document.getElementById("mmn1");
 mmn1.onclick = function() {
     document.getElementsByClassName("mmt2")[0].style.display = "none"
     document.getElementsByClassName("mmt3")[0].style.display = "none"
     document.getElementsByClassName("mmt4")[0].style.display = "none"
     document.getElementsByClassName("mmt1")[0].style.display = "block"

 }
 var mnn2 = document.getElementById("mnn2");
 mnn2.onclick = function() {
     document.getElementsByClassName("mtt2")[0].style.display = "block"
     document.getElementsByClassName("mtt3")[0].style.display = "none"
     document.getElementsByClassName("mtt4")[0].style.display = "none"
     document.getElementsByClassName("mtt1")[0].style.display = "none"

 }
 var mnn3 = document.getElementById("mnn3");
 mnn3.onclick = function() {
     document.getElementsByClassName("mtt2")[0].style.display = "none"
     document.getElementsByClassName("mtt3")[0].style.display = "block"
     document.getElementsByClassName("mtt4")[0].style.display = "none"
     document.getElementsByClassName("mtt1")[0].style.display = "none"

 }
 var mnn4 = document.getElementById("mnn4");
 mnn4.onclick = function() {
     document.getElementsByClassName("mtt2")[0].style.display = "none"
     document.getElementsByClassName("mtt3")[0].style.display = "none"
     document.getElementsByClassName("mtt4")[0].style.display = "block"
     document.getElementsByClassName("mtt1")[0].style.display = "none"

 }
 var mnn1 = document.getElementById("mnn1");
 mnn1.onclick = function() {
     document.getElementsByClassName("mtt2")[0].style.display = "none"
     document.getElementsByClassName("mtt3")[0].style.display = "none"
     document.getElementsByClassName("mtt4")[0].style.display = "none"
     document.getElementsByClassName("mtt1")[0].style.display = "block"

 }
 var nnn2 = document.getElementById("nnn2");
 nnn2.onclick = function() {
     document.getElementsByClassName("ttt2")[0].style.display = "block"
     document.getElementsByClassName("ttt3")[0].style.display = "none"
     document.getElementsByClassName("ttt4")[0].style.display = "none"
     document.getElementsByClassName("ttt1")[0].style.display = "none"

 }
 var nnn3 = document.getElementById("nnn3");
 nnn3.onclick = function() {
     document.getElementsByClassName("ttt2")[0].style.display = "none"
     document.getElementsByClassName("ttt3")[0].style.display = "block"
     document.getElementsByClassName("ttt4")[0].style.display = "none"
     document.getElementsByClassName("ttt1")[0].style.display = "none"

 }
 var nnn4 = document.getElementById("nnn4");
 nnn4.onclick = function() {
     document.getElementsByClassName("ttt2")[0].style.display = "none"
     document.getElementsByClassName("ttt3")[0].style.display = "none"
     document.getElementsByClassName("ttt4")[0].style.display = "block"
     document.getElementsByClassName("ttt1")[0].style.display = "none"

 }
 var nnn1 = document.getElementById("nnn1");
 nnn1.onclick = function() {
     document.getElementsByClassName("ttt2")[0].style.display = "none"
     document.getElementsByClassName("ttt3")[0].style.display = "none"
     document.getElementsByClassName("ttt4")[0].style.display = "none"
     document.getElementsByClassName("ttt1")[0].style.display = "block"

 }
 var nnnn2 = document.getElementById("nnnn2");
 nnnn2.onclick = function() {
     document.getElementsByClassName("tttt2")[0].style.display = "block"
     document.getElementsByClassName("tttt3")[0].style.display = "none"
     document.getElementsByClassName("tttt4")[0].style.display = "none"
     document.getElementsByClassName("tttt1")[0].style.display = "none"

 }
 var nnnn3 = document.getElementById("nnnn3");
 nnnn3.onclick = function() {
     document.getElementsByClassName("tttt2")[0].style.display = "none"
     document.getElementsByClassName("tttt3")[0].style.display = "block"
     document.getElementsByClassName("tttt4")[0].style.display = "none"
     document.getElementsByClassName("tttt1")[0].style.display = "none"

 }
 var nnnn4 = document.getElementById("nnnn4");
 nnnn4.onclick = function() {
     document.getElementsByClassName("tttt2")[0].style.display = "none"
     document.getElementsByClassName("tttt3")[0].style.display = "none"
     document.getElementsByClassName("tttt4")[0].style.display = "block"
     document.getElementsByClassName("tttt1")[0].style.display = "none"

 }
 var nnnn1 = document.getElementById("nnnn1");
 nnnn1.onclick = function() {
     document.getElementsByClassName("tttt2")[0].style.display = "none"
     document.getElementsByClassName("tttt3")[0].style.display = "none"
     document.getElementsByClassName("tttt4")[0].style.display = "none"
     document.getElementsByClassName("tttt1")[0].style.display = "block"

 }