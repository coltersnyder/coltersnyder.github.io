main();

function main(){
    const canvas = document.querySelector("#mainCanvas");
    const gl = canvas.getContext("webgl");

    if(gl === null){
        alert("Unable to Initialize WebGL. Your Browser May Not Support It.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;