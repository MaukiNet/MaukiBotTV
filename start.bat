REM Setting up build location
if exist dist/ (
	mkdir dist
)

REM setting up node.js
npm install
npm run build
npm run start
