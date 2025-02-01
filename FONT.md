# Vite App with Google Fonts

This is a simple Vite app setup that includes linking a Google Font to the `index.html` file. The Google Font is applied globally across the app.

## Steps to Link Google Font in `index.html`

1. Open your `public/index.html` file.
2. Add the following Google Font link inside the `<head>` section:

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <!-- Add Google Font link here -->
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  
 <!-- Add multiple Google Font link here -->
  <link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
  <body>
    <div id="app"></div>
  </body>
</html>
```

```css
/* src/index.css */
body {
  font-family: 'Roboto', sans-serif;
}
```

## Importing the Google Font in a CSS or SCSS File (Best for Global Styles)
```css
/* src/index.css or src/styles.css */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

```

## Importing Google Font in JS (For CSS-in-JS or Styled Components)
```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello World!</div>
    </>
  );
};

export default App;

```

##  Using a Font Loading Library (Best for Performance)
```jsx
Install the fontfaceobserver library:
```
