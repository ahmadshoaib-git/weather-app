import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
body {
  min-height:100vh;
}
#__next {
    min-height: 100vh;
  }

  :root {
    @-moz-document url-prefix() {
      scrollbar-color: #71717a #F5F5F5 !important; (track, thumb);
    }
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.375rem;
    background-color: #F5F5F5;
    border-radius: 3.125rem;
  }

  ::-webkit-scrollbar-corner {
    background-color: #71717a;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(158, 153, 153) !important;
    border-radius: 3.125rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #eaecec !important;
    border-radius: 3.125rem;
  }
`;
