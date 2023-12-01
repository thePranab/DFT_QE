"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[550],{391:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=s(5893),r=s(1151);const c={title:"Wannier method"},o=void 0,a={id:"hands-on/wannier",title:"Wannier method",description:"Obtain bandstructure of Silicon",source:"@site/docs/hands-on/wannier.mdx",sourceDirName:"hands-on",slug:"/hands-on/wannier",permalink:"/espresso/hands-on/wannier",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/wannier.mdx",tags:[],version:"current",frontMatter:{title:"Wannier method"},sidebar:"docs",previous:{title:"Phonon dispersion",permalink:"/espresso/hands-on/phonon"},next:{title:"Resources",permalink:"/espresso/resources"}},t={},l=[{value:"Obtain bandstructure of Silicon",id:"obtain-bandstructure-of-silicon",level:2},{value:"Resources",id:"resources",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"obtain-bandstructure-of-silicon",children:"Obtain bandstructure of Silicon"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Perform ",(0,i.jsx)(e.code,{children:"scf"})," calculation using Quantum Espresso ",(0,i.jsx)(e.code,{children:"pw.x"})]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'QE_PATH="/workspaces/q-e-qe-7.2/bin"\r\nmpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.silicon.in > pw.scf.silicon.out\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Perform ",(0,i.jsx)(e.code,{children:"nscf"})," calculation using ",(0,i.jsx)(e.code,{children:"pw.x"}),". Instead of automatic k-grid, we need\r\nto provide explicit list of k-points. Such explicit list of k-points can be\r\ngenerated using perl script included in the Wannier package under utility."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'WANNIER_PATH="/workspaces/wannier90-3.1.0"\r\n# directly append the k-points to the input file\r\n${WANNIER_PATH}/utility/kmesh.pl 4 4 4 >> pw.nscf.silicon.in\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Run ",(0,i.jsx)(e.code,{children:"nscf"})," calculation:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${QE_PATH}/pw.x -i pw.nscf.silicon.in > pw.nscf.silicon.out\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["Prepare input file for wannier90 (",(0,i.jsx)(e.code,{children:"silicon.win"}),"). Here we need the k-points\r\nlist without the weights:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"${WANNIER_PATH}/utility/kmesh.pl 4 4 4 wan\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Generate nnkp input:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# we can just provide the seedname or seedname.win\r\n${WANNIER_PATH}/wannier90.x -pp silicon\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["Create input file for ",(0,i.jsx)(e.code,{children:"pw2wan"}),", and generate initial projections:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${WANNIER_PATH}/pw2wannier90.x -i pw2wan.silicon.in > pw2\r\nwan.silicon.out\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"6",children:["\n",(0,i.jsx)(e.li,{children:"Run wannier calculation:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${WANNIER_PATH}/wannier90.x silicon\n"})}),"\n",(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{type:"image/webp",srcSet:s(1783).Z}),(0,i.jsx)("img",{src:s(6226).Z,alt:"silicon-wannier-bands"})]}),"\n",(0,i.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://sites.google.com/view/hubbard-koopmans/program",children:"https://sites.google.com/view/hubbard-koopmans/program"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},6226:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/silicon-wannier-bands-ccb3b415cc921e9ab5a011666624cec8.png"},1783:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/silicon-wannier-bands-d78d19c1d79381aa7d7a3dfefaff458a.webp"},1151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>o});var i=s(7294);const r={},c=i.createContext(r);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);