var bodyBgs = [];  
         bodyBgs[0] = "assets/img/bg/1.jpg";  
         bodyBgs[1] = "assets/img/bg/2.jpg";  
         bodyBgs[2] = "assets/img/bg/3.jpg";  
         bodyBgs[3] = "assets/img/bg/4.jpg";  
         bodyBgs[4] = "assets/img/bg/5.jpg";  
         bodyBgs[5] = "assets/img/bg/6.jpg";   //请将001.jpg~006.jpg替换为图片的路径或url  
         var randomBgIndex = Math.round( Math.random() * 5); //请按图片的数量替换这里的数字"5"  
         document.write('body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}');  