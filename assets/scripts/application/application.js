/*define(function(require,exports,module){
   
     var util = {};
   
     var colorRange = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
   
     util.randomColor = function(){
          return '#' +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)] +
               colorRange[Math.floor(Math.random() * 16)];
     };
   
   
     var helloSeaJS = document.getElementById('hello-seajs');
     helloSeaJS.style.color = util.randomColor();
     window.setInterval(function(){
          helloSeaJS.style.color = util.randomColor();
     },1500);
});*/

define(function(require,exports,module){
   
     var a = 0;
     var mhtml = document.getElementsByTagName('html')[0];
     mhtml.addEventListener("click",function(){
          document.getElementsByTagName("section")[0].style.display = "none";
          switch(a)
          {
               case 0:
                    mhtml.style.background = "red";
                    a=1;
                    break;
               case 1:
                    mhtml.style.background = "orange";
                    a=2;
                    break;
               case 2:
                    mhtml.style.background = "yellow";
                    a=3;
                    break;
               case 3:
                    mhtml.style.background = "green";
                    a=4;
                    break;
               case 4:
                    mhtml.style.background = "blue";
                    a=5;
                    break;
               case 5:
                    mhtml.style.background = "indigo";
                    a=6;
                    break;
               case 6:
                    mhtml.style.background = "purple";
                    a=7;
                    break;
               case 7:
                    confirm("监测结束，点击OK返回");
                    mhtml.style.background = "white";
                    document.getElementsByTagName("section")[0].style.display = "block";
                    a=0;
                    break;
          }
     });
});
