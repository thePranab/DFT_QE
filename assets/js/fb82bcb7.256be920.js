"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([["1127"],{8053:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"hands-on/Bi2Se3","title":"Bandstructure of topological insulating Bi2Se3","description":"Topological insulators are a special class of material that is insulating in the","source":"@site/docs/hands-on/Bi2Se3.md","sourceDirName":"hands-on","slug":"/hands-on/Bi2Se3","permalink":"/espresso/hands-on/Bi2Se3","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/Bi2Se3.md","tags":[],"version":"current","frontMatter":{"title":"Bandstructure of topological insulating Bi2Se3","sidebar_label":"Bi2Se3 (TI)"},"sidebar":"docs","previous":{"title":"Spin-Orbit Coupling","permalink":"/espresso/hands-on/soc"},"next":{"title":"Dielectric constant","permalink":"/espresso/hands-on/epsilon"}}'),t=n("5893"),a=n("65");let o={title:"Bandstructure of topological insulating Bi2Se3",sidebar_label:"Bi2Se3 (TI)"},r=void 0,l={},c=[{value:"Resources",id:"resources",level:2}];function p(e){let s={a:"a",annotation:"annotation",code:"code",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Topological insulators are a special class of material that is insulating in the\nbulk, however exhibit conducting states in the surface.\nBi",(0,t.jsx)("sub",{children:"2"}),"Se",(0,t.jsx)("sub",{children:"3"})," is such a material. Spin orbit coupling and\nbreaking of the inversion symmetry at the surface of the crystal is crucial to\nthe existence of the Dirac surface state. Here we will calculate the\nbandstructure step by step: first for the bulk, next including SOC, and finally\nfor the slab. Please check the respective ",(0,t.jsx)(s.a,{href:"https://github.com/pranabdas/espresso/tree/master/src/Bi2Se3",children:"input files"}),". I followed the\nfollowing steps:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# SCF calculation for bulk\nmpirun -np 24 pw.x -i pw.scf.bi2se3_01.in > pw.scf.bi2se3_01.out\n# bands calculation for bulk\nmpirun -np 24 pw.x -i pw.bands.bi2se3_01.in > pw.bands.bi2se3_01.out\n# post processing for bulk bands\nmpirun -np 24 bands.x -i pp.bands.bi2se3_01.in > pp.bands.bi2se3_01.out\n\n# for bulk with SOC\nmpirun -np 24 pw.x -i pw.scf.bi2se3_02.in > pw.scf.bi2se3_02.out\nmpirun -np 24 pw.x -i pw.bands.bi2se3_02.in > pw.bands.bi2se3_02.out\nmpirun -np 24 bands.x -i pp.bands.bi2se3_02.in > pp.bands.bi2se3_02.out\n\n# slab calculation\nmpirun -np 24 pw.x -i pw.scf.bi2se3_03.in > pw.scf.bi2se3_03.out\nmpirun -np 24 pw.x -i pw.bands.bi2se3_03.in > pw.bands.bi2se3_03.out\nmpirun -np 24 bands.x -i pp.bands.bi2se3_03.in > pp.bands.bi2se3_03.out\n\n# DOS\nmpirun -np 24 pw.x -i pw.nscf.bi2se3_04.in > pw.nscf.bi2se3_04.out\nmpirun -np 24 dos.x -i pp.dos.bi2se3_04.in > pp.dos.bi2se3_04.out\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For the slab calculation the periodicity of the lattice was broken along the\nc-axis to artificially add 10 \u212B vacuum. In above calculation electronic spin\nwas not considered (meaning the states are degenerate with spin up and down).\nIf ",(0,t.jsx)(s.code,{children:"starting_magnetization"})," is set to zero (or not given) the code makes a\nspin-orbit calculation without spin magnetization. It assumes that time reversal\nsymmetry holds and it does not calculate the magnetization. The states are\nstill two-component spinors but the total magnetization is zero."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Bi2Se3-bands",src:n(6851).Z+"",width:"1897",height:"801"})}),"\n",(0,t.jsx)(s.p,{children:"Notice that for the Dirac surface states the gap did not completely close at the\nFermi energy. This is possibly due to finite size effect. We could repeat the\ncalculation with larger vacuum, and see what happens. Also the Fermi energy\nestimation seems incorrect."}),"\n",(0,t.jsxs)(s.p,{children:["In order to sample the ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{mathvariant:"normal",children:"\u0393"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Gamma"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord",children:"\u0393"})]})})]})," point for our DOS calculation, an odd k-grid\nmesh (25\u271525\u27155) was used. The signature of Dirac cone is evident from the DOS\nfigure."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Bi2Se3-dos",src:n(5758).Z+"",width:"1033",height:"574"})}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.quantumatk.com/tutorials/topological_insulator_bi2se3/topological_insulator_bi2se3.html",children:"https://docs.quantumatk.com/tutorials/topological_insulator_bi2se3/"})}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6851:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/Bi2Se3-bands-398bb56f7ede3a3314f95ee86bc5ada8.webp"},5758:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/Bi2Se3-dos-9b13e51a7bcda6fbee0ca43d715fac7b.webp"}}]);