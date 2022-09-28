+++
title = "OpenGL Paint"
date = ""
showthedate = false
author = ""
cover = ""
tags = []
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

A simple paint application written in C++ using OpenGL.

It provides basic functionalities like different shaped cursors and erasers, ability to select different colors as well as to save the image with keyboard shortcuts.

To draw, click the left mouse button and move the mouse, release to stop drawing.

Multiple brush shapes are accessible with right click menu.

The current brush color is displayed on the left side.

Keyboard shortcuts ( more like the only option ):

    x to clear the screen.
    + to increase the brush size.
    - to decrease the brush size.
    h toggle making the bush shape hollow or filled ( not useful if intend to draw strokes with that brush ).
    s save the image as screenshot.jpg.
    0-6 move between different color presets.
    r increase the red value in the color.
    R decrease the red value in the color.
    g increase the green value in the color.
    G decrease the green value in the color.
    b increase the blue value in the color.
    B decrease the blue value in the color.

The ability to save the image is provided by the freeimage library and the image is saved as screenshot.jpeg in the project directory.

### Dependencies:

- g++ ( For Linux )
- Visual Studio ( For Windows)
- Windows.h ( For Windows )
- FreeImage
- FreeGLUT

### Building:

First clone the git repository or download the zip from github:

```
git clone https://github.com/purgeme/GL_Paint.git
```

Next, build the program:

```
cd GL_Paint
cd src
g++ -o GL_Paint *.cpp -lglut -lGL -lGLU -lfreeimage
```

### Running:

Pre-built binaries are provided in Distribution folder, or you can build it yourself.

#### On Linux:

First make sure the compiled binary is executable:

```
chmod +x GL_Paint
```

Then simple execute the binary:

```
./GL_Paint
```

#### On Windows:

On windows you can run it straight through Visual Studio or just run the pre-built executable GL_Paint.exe inside `Distribution`.

## TODO:

- [ ] Add proper GUI elements
- [ ] Add ability to select save location for screenshot