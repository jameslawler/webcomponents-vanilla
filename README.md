# webcomponents-vanilla

A simple demonstration of a hosted web component. There are two folders in this project `client` and `host`.

## Host

This project hosts a simple js file that has a self contained web component called `wireframe-header`. It can be imported in any HTML page and used with the `<wireframe-header>` component.

## Client

A demonstration project that imports the hosted web component and renders it on a simple page.

```html
<head>
  <script type="module" src="http://localhost:9080/wireframe-header.js"></script>
</head>
<body>
  <wireframe-header
    company="My Company"
    phone="07 1234 1234"
  >
  </wireframe-header>
</body>
```

## How to run

Run `npm start` in both projects to start up static web servers under different ports.

To test it you will need a chrome extension to allow CORS - https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US
