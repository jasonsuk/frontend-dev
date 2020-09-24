
This directory is to help an understanding of basic Node.js and NPM

### Activities

On command line,
1. npm init -> to create package.js file
2. npm install lite-server -- save-dev -> to install lite-server
    
    lite server will show real-time changes made on codes, being reflexed on a browser.

    `-- save-dev` to install lite-server used for development dependency for a project. 
    Check what are created after the installation and change in package.json
    (more details : https://github.com/johnpapa/lite-server).

    - node_modules : to activate lite-server 
    - package-lock.json 

3. package.js -> add some customaized commands in "script"
    
   can load npm `run lite` by typing `npm start` on command line instead

    "scripts": {
		"start": "npm run lite",
		"test": "eslint *.js lib/*.js && istanbul cover _mocha -- -R spec",
		"lite": "lite-server"
	},