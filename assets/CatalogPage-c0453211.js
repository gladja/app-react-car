import{r as e,a as c,b as g,g as j,j as s}from"./index-bed01f74.js";import{s as m,a as p,M as C,S as u,F as f,C as h,H as S}from"./Header-11efe8f0.js";import{C as F}from"./Container-6044ccee.js";const E=()=>{const[a,t]=e.useState(1),[r,n]=e.useState(!1),l=c(m),d=c(p),o=g();e.useEffect(()=>{o(j(a))},[o,a]);const i=x=>{n(x)};return s.jsxs(s.Fragment,{children:[r&&s.jsx(C,{car:r,setSelectedCar:n}),l?s.jsx(u,{}):s.jsxs(s.Fragment,{children:[s.jsx(f,{page:a,setPage:t}),s.jsx(h,{cars:d,handleModal:i,page:a,setPage:t})]})]})},P=()=>s.jsx(s.Fragment,{children:s.jsxs(F,{children:[s.jsx(S,{}),s.jsx(E,{})]})});export{P as default};