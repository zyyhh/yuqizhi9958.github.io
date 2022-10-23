"use strict";

var gl;
var points;

window.onload = function init(){
	var canvas = document.getElementById("sscanvas");
	gl = WebGLUtils.setupWebGL(canvas);
	if( !gl ){
		alert("WebGL isn't available.");
	}
	
	// Three Vertices
	/*var vertices = [
		-1.0, -1.0,
		 0.0,  1.0,
		 1.0, -1.0,
	];*/
	var vertices = [
		/* 0.0,  1.0,
		-1.0,  0.0,
		 0.0,  0.0,
		 0.0, -1.0,
		 1.0, -1.0,
		 1.0,  0.0,*/
		/*-1.0, -0.5,
		-0.5, 1.0,
		0.0, -0.5,
		0.5,-0.5,
		1.0,-0.5,
		1.0,0.5,
		0.5,0.5,*/
		/*-0.65,-0.55,
		0.65,-0.55,
		0.05,0.05,
		-0.45,-0.05,
		0.45,-0.05,
		0.05,0.55,
		-0.25,-1.05,
		0.25,-1.05,
		0.25,-0.55,
		-0.25,-0.55,*/
		/*-0.2,0.5,
		0.2,0.5,
		0.0,0.0,
		0.3,0.4,
		0.5,0.1,
		0.0,0.0,
		0.5,-0.15,
		0.2,-0.45,
		0.0,0.0,
		-0.1,-0.5,
		-0.4,-0.2,
		0.0,0.0,
		-0.5,0.0,
		-0.4,0.4,
		0.0,0.0,
		0.0,0.0,
		0.03,-0.8,
		0.1,-0.8,*/
		-0.15,0.5,
		0.15,0.5,
		0.0,0.0,
		
		0.32,0.63,
		0.38,0.6,
		0.0,0.0,
		
		0.35,0.4,
		0.5,0.15,
		0.0,0.0,

		0.75,0.037,
		0.75,-0.037,
		0.0,0.0,
		
		
		0.5,-0.15,
		0.35,-0.4,
		0.0,0.0,
		
		0.38,-0.6,
		0.32,-0.63,
		0.0,0.0,
		
		0.15,-0.5,
		-0.15,-0.5,
		0.0,0.0,
		
		0.037,-1,
		-0.037,-1,
		0.0,0.0,
		
		-0.32,-0.63,
		-0.38,-0.6,
		0.0,0.0,
		
		-0.35,-0.4,
		-0.5,-0.15,
		0.0,0.0,
		
		-0.75,0.037,
		-0.75,-0.037,
		0.0,0.0,
		
		-0.5,0.15,
		-0.35,0.4,
		0.0,0.0,
		
		-0.38,0.6,
		-0.32,0.63,
		0.0,0.0,
	];
	
	// Configure WebGL
	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	
	
	// Load shaders and initialize attribute buffers
	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	
	//Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	render();
}

function render(){
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	gl.drawArrays(gl.TRIANGLES, 3, 3);
	gl.drawArrays(gl.TRIANGLES, 6, 3);
	gl.drawArrays(gl.TRIANGLES, 9, 3);
	gl.drawArrays(gl.TRIANGLES, 12, 3);
	gl.drawArrays(gl.TRIANGLES, 15, 3);
	gl.drawArrays(gl.TRIANGLES, 18, 3);
	gl.drawArrays(gl.TRIANGLES, 21, 3);
	gl.drawArrays(gl.TRIANGLES, 24, 3);
	gl.drawArrays(gl.TRIANGLES, 27, 3);
	gl.drawArrays(gl.TRIANGLES, 30, 3);
	gl.drawArrays(gl.TRIANGLES, 33, 3);
	gl.drawArrays(gl.TRIANGLES, 36, 3);
	/*gl.drawArrays(gl.TRIANGLE_FAN, 6, 4);*/
}