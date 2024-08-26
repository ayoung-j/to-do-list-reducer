import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5% !important;
    font-family: "Pretendard", "Nanum Gothic", "Apple SD Gothic Neo", Helvetica, Arial, sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
}
@media screen and (min-width: 0\0) {
    /* IE 9, IE 10, IE 11 */
    :root,
    html {
        font-size: 10px;
    }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    /* IE 10, IE 11 */
    :root,
    html {
        font-size: 10px;
    }
}
body {
    font-size: 1.6rem;
    line-height: 1.5;
    color: #111;
}
::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}
::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
    border-radius: 12px; /* 스크롤바 둥근 테두리 */
    background-clip: padding-box;
    border: 5px solid transparent;
}
::-webkit-scrollbar-track {
    background: transparent; /*스크롤바 뒷 배경 색상*/
}
::placeholder {
    color: rgba(0, 0, 0, 0.5);
}
input,
button {
    font-family: "Pretendard", "Nanum Gothic", "Apple SD Gothic Neo", Helvetica, Arial, sans-serif;
    height: 48px;
    border-radius: 0 !important;
}
a, button{
    outline: none;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;
}
input:focus-visible {
    outline: 1px;
}
a{
    text-decoration: none;
    color: #111;
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
}
.container {
    width: 100%;
    max-width: calc(var(--container-width) + var(--gutter) * 2);
    padding: 0 var(--gutter);
    margin: 0 auto;
}
`;

export default GlobalStyle;
