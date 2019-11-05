# Setting Up a Babel Project

Current browsers don’t support all the new ECMAScript 6 (aka ECMAScript 2015) features yet (see comptability table). You need to use a compiler (transpiler) to transform your ECMAScript 6 code to ECMAScript 5 compatible code. Although there are other options, Babel has become the de-facto standard to compile ECMAScript 6 applications to a version of ECMAScript that can run in current browsers. Babel can also compile other versions of ECMAScript as well as React’s JSX, but that is beyond the scope of this tutorial.

In this unit, you set up a development environment to develop and run an ECMAScript 6 application using Babel.

## Step 1: Install the Sample Application

```
git clone https://github.com/speedwar/babel7-boilerplate
```

## Step 2: Set Up Babel

```
npm install
```

## Step 3: Build and Run

On the command line, make sure you are in the es6-tutorial directory, and type the following command to run the babel script and compile main.js:

```
npm run build
```

Open index.html in your code editor, and modify the <script> tag as follows to load public/main.bundle.js, the compiled version of src/main.js:

<script src="build/main.bundle.js"></script>
Open a new command prompt. Navigate (cd) to the es6-tutorial directory, and type the following command to start http-server:

```
npm start
```

If port 8080 is already in use on your computer, modify the start script in package.json and specify a port that is available on your computer. For example:

```
"scripts": {
  "build": "babel src/main.js -o public/main.bundle.js",
  "start": "http-server -p 9000"
},
```

Open a browser and access http://localhost:8080

Click the Calculate button to calculate the monthly payment for the mortgage.
