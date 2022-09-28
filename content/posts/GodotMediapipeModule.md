+++
title = "Godot Mediapipe Module"
date = ""
showthedate = false
author = ""
authorTwitter = "" #do not include @
cover = ""
tags = []
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

This is a module for the Godot game engine which allows using mediapipe solutions inside the game engine.

With this module it is possible to use mediapipe solutions inside Godot. Currently only tracking solutions which return a NormalizedLandmarksList, like Holistic tracking.

Currently only Linux is supported and tested, it can be built for windows if you have the required knowledge.

## Getting started:

### Building manually:

First clone the repository or download zip from github:

```
git clone https://github.com/purgeme/godot_mediapipe_module
```

Next, run the setup script:

```
./setup.sh
```

Next, run the built script:

```
./build.sh
```

Builds the engine. The generated binary is in `godot/bin/`.

Before running the binary make sure to run: `source envs` to setup the environment variables so that the binary is able to find the library or you can manually add the library to your system. The library is placed under `library` directory.