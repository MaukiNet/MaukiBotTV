#!/bin/bash

# Setting up build location
DIR="./dist"
if [ -d "$DIR" ]; then
	mkdir dist
fi

# setting up node.js
npm install
npm run build
npm run start