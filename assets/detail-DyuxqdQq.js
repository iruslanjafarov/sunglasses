import{u as i,r as o,j as e}from"./index-BWLVPRxB.js";import{u as d,A as u,T as x,S as f,F as m,a as h}from"./favorite-DiSErdyA.js";const j=()=>{const{setProduct:r}=d(),{id:a}=i(),[l,s]=o.useState(!1),c=o.useCallback(async()=>{try{s(!0);const n=await(await fetch(`https://sweet-berry-detective.glitch.me/products/${a}`)).json();r(n),s(!1)}catch(t){throw s(!1),new Error(t instanceof Error?t.message:"Unknown error occurred")}},[a,r]);return o.useEffect(()=>{c()},[c]),{loading:l}},p=()=>{const{product:r}=d(),{loading:a}=j(),{path:l,name:s,price:c}=r||{},{id:t}=i(),n=t?+t:void 0;return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:a&&e.jsx("div",{className:"w-full h-full absolute top-0 left-0 flex justify-center items-center",children:e.jsx(x,{children:e.jsx(f,{})})})}),r&&!a&&e.jsx("div",{className:"w-full h-full top-0 left-0 absolute flex justify-center items-center px-6",children:e.jsxs(m,{children:[e.jsx("div",{className:"relative",children:e.jsx("img",{src:l,alt:s,className:"w-full lg:w-auto lg:max-w-full h-auto mt-6 rounded-lg"})}),e.jsxs("div",{className:"flex justify-between mt-6",children:[e.jsxs("div",{className:"relative flex gap-3",children:[e.jsx("h2",{className:"text-xl truncate",children:s}),e.jsx(h,{id:n})]}),e.jsxs("h3",{className:"text-xl text-gray-400 text-nowrap",children:[c," ₽"]})]})]})})]})},v=()=>e.jsx(p,{});export{v as default};
//# sourceMappingURL=detail-DyuxqdQq.js.map