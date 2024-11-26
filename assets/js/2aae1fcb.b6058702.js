"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([["29"],{4395:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>p,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>d});var i=JSON.parse('{"id":"hands-on/ni","title":"Spin polarized bandstructure calculation for nickel","description":"We prepare the input file pwscfni.in and run the calculation:","source":"@site/docs/hands-on/ni.mdx","sourceDirName":"hands-on","slug":"/hands-on/ni","permalink":"/espresso/hands-on/ni","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/ni.mdx","tags":[],"version":"current","frontMatter":{"title":"Spin polarized bandstructure calculation for nickel","sidebar_label":"Ni (spin pol. bands)"},"sidebar":"docs","previous":{"title":"Fe (magnetic)","permalink":"/espresso/hands-on/fe"},"next":{"title":"DFT+U calculation","permalink":"/espresso/hands-on/dft-u"}}'),a=s("5893"),r=s("65"),t=s("5056");let d={title:"Spin polarized bandstructure calculation for nickel",sidebar_label:"Ni (spin pol. bands)"},p=void 0,c={},l=[];function o(n){let e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["We prepare the input file ",(0,a.jsx)(e.code,{children:"pw_scf_ni.in"})," and run the calculation:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 8 pw.x -i pw_scf_ni.in > pw_scf_ni.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Prepare the input file for bands calculation ",(0,a.jsx)(e.code,{children:"pw_bands_ni.in"})," with our desired\nk-path and run:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 8 pw.x -i pw_bands_ni.in > pw_bands_ni.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Now we perform the ",(0,a.jsx)(e.strong,{children:"bands.x"})," calculation with ",(0,a.jsx)(e.code,{children:"spin_component=1"})," to process\nonly the spin up bands:"]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/ni/bands_ni_up.in",showLineNumbers:!0,children:"&BANDS\n    outdir='./tmp/',\n    prefix='ni',\n    filband='ni_bands_up.dat',\n    spin_component = 1,\n/\n"}),"\n",(0,a.jsx)(e.p,{children:"Run the calculation:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 8 bands.x -i bands_ni_up.in > bands_ni_up.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Similarly, we process the spin down bands ",(0,a.jsx)(e.code,{children:"spin_component=2"})," and plot them."]}),"\n",(0,a.jsx)("img",{src:s(2013).Z,class:"inv-hue-rot-180",alt:"ni-spin-bands"})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},2013:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/ni-spin-bands-2d86482da5664329843fb81d437f8cb0.webp"}}]);