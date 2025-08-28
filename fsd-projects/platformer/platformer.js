$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 -create platform

    createPlatform (300, 650, 10, 50,)
    createPlatform (600, 300,100, 10)
    createPlatform (460, 500 , 50, 10)
    createPlatform (400, 600, 100 ,10)
    createPlatform ( 500, 370, 10, 60)



    // TODO 3 - Create Collectables
      
    createCollectable("database",400,650 ,);
    createCollectable("database",600,290)
    createCollectable("database",900,400)
    




    
    // TODO 4 - Create Cannons
     
    createCannon("right", 400 ,1000);
    createCannon("right",600,2000)
    createCannon("bottom",750, 900)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
 