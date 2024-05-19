(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const E="Budget.Fragment",k="Budget.TextNode";function L(e,t){let n=t.key||"";return delete t.key,{type:e,props:t,key:n}}function N(e){return typeof e=="object"?e.type:k}var s;(function(e){e.UPDATE="Update",e.PUT="PUT",e.DELETE="DELETE",e.REPLACE="REPLACE"})(s||(s={}));const R=["children","key","props"],m=e=>!R.includes(e),I=(e,t)=>n=>e[n]!==t[n],P=e=>t=>!(t in e);let h,a;const g=[];function x(e){e=e||{dom:h.dom,props:h.props},g.length=0,e.alternate=h;let t=e;for(;t;)t=B(t);S(e)}function S(e){g.forEach(t=>p(t)),p(e.child),h=e}function p(e){if(!e)return;let t=e.parent;for(;!t.dom;)t=t.parent;const n=t.dom;e.effect===s.PUT&&e.dom?n.appendChild(e.dom):e.effect===s.UPDATE?D(e.dom,e.alternate.props,e.props):e.effect===s.DELETE?A(e,n):e.effect===s.REPLACE&&e.alternate&&T(e,e.alternate,n),p(e.child),p(e.sibling)}function T(e,t,n){e.dom&&t.dom?n.replaceChild(e.dom,t.dom):T(e.dom?e:e.child,t.dom?t:t.child,n)}function A(e,t){e.dom?t.removeChild(e.dom):A(e.child,t)}function B(e){if(typeof e.type=="function"?O(e):e.type==E?y(e):U(e),e.child)return e.child;let t=e;for(;t;){if(t.sibling)return t.sibling;t=t.parent}}function O(e){a=e,a.hooks=[],a.hookIndex=0,e.props.children=e.type(e.props),y(e)}function U(e){e.dom||(e.dom=j(e)),y(e)}function y(e){const t=(Array.isArray(e.props.children)?e.props.children:[e.props.children]).filter(c=>c!=null);let n=0,o=e.alternate&&e.alternate.child,i;for(;n<t.length||o!=null;){let c;const r=t[n],u=N(r),f=typeof r=="object"?r.props:{textContent:r.toString()};o&&r&&u===o.type&&o?c={type:o.type,props:f,dom:o.dom,parent:e,alternate:o,effect:s.UPDATE}:r?o?(c={type:u,props:f,parent:e,effect:s.REPLACE,alternate:o},o.child=void 0):c={type:u,props:f,parent:e,effect:s.PUT}:o&&(o.effect=s.DELETE,g.push(o)),n===0?e.child=c:i&&(i.sibling=c),o&&(o=o.sibling),i=c,n++}}function D(e,t,n){Object.keys(t).filter(m).filter(P(n)).forEach(o=>{e.removeAttribute(o)}),Object.keys(n).filter(m).filter(I(t,n)).forEach(o=>{e[o]=n[o]})}function j(e){if(e.type===k)return document.createTextNode(e.props.textContent||"");const t=document.createElement(e.type||""),n=e.props;return Object.keys(n).filter(m).forEach(o=>{t[o]=n[o]}),t}function z(e){return new H(e)}class H{constructor(t){this.container=t}render(t){const n={dom:this.container,props:{children:t}};x(n)}}function M(e,t){const n=C(a),o={action:e,deps:t};(!n||n.deps.some((i,c)=>i!==o.deps[c]))&&(o.destructor=o.action()),a.hooks.push(o),a.hookIndex++}function v(e){const t=C(a),n={state:t?t.state:e,actions:[]};(t?t.actions:[]).forEach(c=>{n.state=c(n.state)});const i=c=>{n.actions.push(c),window.requestIdleCallback(()=>x())};return a.hooks.push(n),a.hookIndex++,[n.state,i]}function C(e){return e.alternate&&e.alternate.hooks&&e.alternate.hooks[e.hookIndex]}function l(e,t,n){return t.key=n,L(e,t)}const w=E,d=l,_="data:image/svg+xml,%3csvg%20enable-background='new%200%200%20128%20128'%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m118.89%2075.13c-1.46-3.15-3.92-5.73-7-7.33-1.86-1.16-3.88-2.05-6-2.63%201.53-5.6-.64-10.06-3.69-13.39-4.51-4.88-9.2-5.59-9.2-5.59%201.62-3.07%202.11-6.61%201.36-10-.77-3.69-3.08-6.86-6.36-8.72-3.1-1.83-6.92-2.73-10.84-3.47-1.88-.34-9.81-1.45-13.1-6-2.65-3.69-2.73-10.33-3.45-12.32s-3.38-1.15-6.23.76c-3.33%202.26-10.23%209.39-12.89%2016.56-1.76%204.41-2.2%209.23-1.28%2013.89-2.14.35-4.23.97-6.21%201.85-.16%200-.32.1-.49.17-3%201.24-9.43%207-10%2015.85-.21%203.13.19%206.26%201.17%209.24-2.19.57-4.3%201.43-6.26%202.57-2.29.98-4.38%202.38-6.15%204.13-1.95%202.41-3.37%205.2-4.15%208.2-1.81%206.61-1.1%2013.66%202%2019.77%201.8%203.47%204.06%206.67%206.74%209.52%208.55%208.79%2023.31%2012.11%2035%2014%2014.19%202.34%2029.05%201.52%2042.33-4%2019.92-8.22%2025.22-21.44%2026-25.17%201.73-8.25-.39-16.02-1.3-17.89z'%20fill='%23885742'/%3e%3cpath%20d='m87.45%2092.89c-1.57.8-3.17%201.52-4.78%202.16-1.08.43-2.17.82-3.27%201.17-1.1.36-2.21.67-3.33%201-2.24.56-4.52.97-6.82%201.21-1.74.19-3.5.28-5.25.28-4.62%200-9.22-.65-13.67-1.91l-1.46-.44c-2.45-.78-4.84-1.73-7.15-2.84l-1.39-.69c1.66%206.79%206.35%2012.43%2012.72%2015.31%203.43%201.59%207.17%202.4%2010.95%202.38%203.82.03%207.6-.75%2011.09-2.31%206.43-2.83%2011.11-8.57%2012.58-15.44z'%20fill='%2335220b'/%3e%3cpath%20d='m85.19%2090c-7%201.23-14.09%201.82-21.19%201.77-7.1.04-14.19-.55-21.19-1.77-1.17-.23-2.3.54-2.53%201.71-.05.27-.05.56%200%20.83v.25c7.32%203.83%2015.46%205.84%2023.72%205.87%201.75%200%203.51-.09%205.25-.28%202.3-.24%204.58-.65%206.82-1.21%201.12-.28%202.23-.59%203.33-1s2.19-.74%203.27-1.17c1.62-.67%203.21-1.39%204.78-2.16l.22-.12.06-.27c.17-1.19-.66-2.29-1.86-2.46-.22-.03-.45-.03-.68.01z'%20fill='%23fff'/%3e%3ccircle%20cx='80.13'%20cy='69.49'%20fill='%23fff'%20r='12.4'/%3e%3cellipse%20cx='80.13'%20cy='69.49'%20fill='%2335220b'%20rx='5.73'%20ry='5.82'/%3e%3ccircle%20cx='47.87'%20cy='69.49'%20fill='%23fff'%20r='12.4'/%3e%3cellipse%20cx='47.87'%20cy='69.49'%20fill='%2335220b'%20rx='5.73'%20ry='5.82'/%3e%3c/svg%3e",F="/budget-react-template/vite.svg",V="data:image/svg+xml,%3csvg%20fill='none'%20height='128'%20viewBox='0%200%20128%20128'%20width='128'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20fill='%233178c6'%20height='128'%20rx='6'%20width='128'/%3e%3cpath%20clip-rule='evenodd'%20d='m74.2622%2099.468v14.026c2.2724%201.168%204.9598%202.045%208.0625%202.629%203.1027.585%206.3728.877%209.8105.877%203.3503%200%206.533-.321%209.5478-.964%203.016-.643%205.659-1.702%207.932-3.178%202.272-1.476%204.071-3.404%205.397-5.786%201.325-2.381%201.988-5.325%201.988-8.8313%200-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827%200-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391%202.0976-1.9943c.9031-.5551%202.0101-.9861%203.3211-1.2929%201.311-.3069%202.7676-.4603%204.3699-.4603%201.1658%200%202.3958.0877%203.6928.263%201.296.1753%202.6.4456%203.911.8109%201.311.3652%202.585.8254%203.824%201.3806%201.238.5552%202.381%201.198%203.43%201.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211%200-6.4674.3579-9.439%201.0738-2.9715.7159-5.5862%201.8336-7.844%203.353-2.2578%201.5195-4.0422%203.4553-5.3531%205.8075-1.311%202.3522-1.9665%205.1646-1.9665%208.4373%200%204.1785%201.2017%207.7433%203.6052%2010.6945%202.4035%202.9513%206.0523%205.4496%2010.9466%207.495%201.9228.7889%203.7145%201.5633%205.375%202.323%201.6606.7597%203.0954%201.5486%204.3044%202.3668s2.1628%201.7094%202.8618%202.6736c.7.9643%201.049%202.06%201.049%203.2873%200%20.9062-.218%201.7462-.655%202.5202s-1.1%201.446-1.9885%202.016c-.8886.57-1.9956%201.016-3.3212%201.337-1.3255.321-2.8768.482-4.6539.482-3.0299%200-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e";function W(e){const[t,n]=v(0),o=e.children?Array.isArray(e.children)&&e.children||[e.children]:[];function i(c){n(r=>(o.length+r+c)%o.length)}return d(w,{children:[d("div",{className:"toggle",children:[l("button",{onclick:()=>i(-1),children:"Prev"}),l("span",{children:t.toString()}),l("button",{onclick:()=>i(1),children:"Next"})]}),o[t]]})}function G(){const[e,t]=v(0);return d(w,{children:[d("button",{onclick:()=>t(n=>n+1),children:["Count is: ",e.toString()]}),e>=10&&l("p",{children:"Wow!"}),e>=30&&l("p",{children:"Amazing!"}),e>=100&&l("p",{children:"Insane!"})]})}function J({username:e}){const[t,n]=v("");return M(()=>{fetch(`https://api.github.com/users/${e}`).then(o=>o.json()).then(o=>{n(()=>o.avatar_url)})},[e]),t?l("a",{href:`https://github.com/${e}`,target:"_blank",rel:"noopener",children:l("img",{src:t,alt:e,title:`Go to ${e}'s github profile`,width:"150"})}):l("p",{children:"Loading..."})}function $(){return d(w,{children:[d("div",{children:[l("a",{href:"https://vitejs.dev",target:"_blank",rel:"noopener",title:"Vite",children:l("img",{src:F,className:"logo",alt:"Vite logo"})}),l("a",{href:"https://github.com/JoeMcCleery/budget-react",target:"_blank",rel:"noopener",title:"BudgetReact",children:l("img",{src:_,className:"logo react",alt:"BudgetReact logo"})}),l("a",{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener",title:"TypeScript",children:l("img",{src:V,className:"logo typescript",alt:"TypeScript logo"})})]}),l("h1",{children:"Vite + BudgetReact + TypeScript"}),d("div",{className:"card",children:[d(W,{children:[l("p",{children:"Now, this is a story all about how..."}),l("p",{children:"My life got flipped-turned upside down..."}),l("p",{children:"And I'd like to take a minute..."}),l("p",{children:"Just sit right there..."}),l("p",{children:"I'll tell you how I became the prince of a town called Bel-Air!"})]}),l(G,{}),d("p",{children:["Edit ",l("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),l("p",{className:"read-the-docs",children:"Click on the Vite, BudgetReact and TypeScript logos to learn more"}),l("div",{className:"card",children:l(J,{username:"JoeMcCleery"})})]})}z(document.getElementById("root")).render(l($,{}));
