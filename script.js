const PI = 3.14;
var radius = 6.7383e6;
let circumference = 2*(PI * radius);
let areaSurface = 4*(PI * (radius ** 2));
let volume = 4/3*(PI * (radius ** 3));
	
document.write('The radius of the sphere is ' + radius + '<br>');
document.write('The circumference is ' + circumference + '<br>');
document.write('The surfrace area is ' + areaSurface + '<br>');
document.write('The volume is ' + volume + '<br>');