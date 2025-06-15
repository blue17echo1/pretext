  	settings.render=0;
	import three;
    import graph3;
    import bsp;
    currentprojection=orthographic(0.9,-2,1);
    currentlight=nolight;

	size(300,300,keepAspect=true);
    
   
    //Planes
    
	path3 y=plane((1,0,0),(0,1,0),(0,0,0));
	
	face[] faces;
	filldraw(faces.push(y),project(y),lightgrey);
	
	add(faces);
	
	//Dot and orientation
	
	draw((0.4,0.2,0)--(0.4,0.2,0.6),linewidth(0.8pt)+darkgrey+dashed);
	dot((0.4,0.2,0.6),linewidth(6pt));
	dot((0.8,0.4,0),linewidth(6pt));
	draw((0.8,0.4,0)--(0.4,0.2,0.6),linewidth(0.8pt)+darkgrey,Arrow3);

	//Creates Axis

    defaultpen(fontsize(18pt));
    xaxis3(Label("$x$"),-.25,1.2,linewidth(1pt),above=true,Arrow3);
    yaxis3(Label("$y$"),-.25,1.5,linewidth(1pt),above=true,Arrow3);
    zaxis3(Label("$z$"),-.25,1,linewidth(1pt),above=true,Arrow3);
    
