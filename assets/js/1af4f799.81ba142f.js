"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([["7937"],{7849:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"hands-on/epsilon","title":"Dielectric constant","description":"First we perform self consistent field calculation:","source":"@site/docs/hands-on/epsilon.mdx","sourceDirName":"hands-on","slug":"/hands-on/epsilon","permalink":"/espresso/hands-on/epsilon","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/epsilon.mdx","tags":[],"version":"current","frontMatter":{"title":"Dielectric constant"},"sidebar":"docs","previous":{"title":"Bi2Se3 (TI)","permalink":"/espresso/hands-on/Bi2Se3"},"next":{"title":"Fermi Surface","permalink":"/espresso/hands-on/fermi-surface"}}'),a=s("5893"),t=s("65"),l=s("5056");let r={title:"Dielectric constant"},c=void 0,o={},d=[{value:"Resources",id:"resources",level:3}];function h(e){let n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"First we perform self consistent field calculation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mpirun -np 4 pw.x -i pw.scf.silicon_epsilon.in > pw.scf.silicon_epsilon.out\n"})}),"\n","\n",(0,a.jsx)(l.Z,{language:"bash",title:"src/silicon/pw.scf.silicon_epsilon.in",showLineNumbers:!0,children:"&CONTROL\n  calculation = 'scf',\n  prefix = 'silicon',\n  outdir = '/tmp/'\n  pseudo_dir = '../pseudos/'\n  verbosity = 'high'\n/\n\n&SYSTEM\n  ibrav =  2,\n  celldm(1) = 10.26,\n  nat =  2,\n  ntyp = 1,\n  ecutwfc = 40\n  nbnd = 20\n  nosym = .TRUE.\n  noinv = .TRUE.\n/\n\n&ELECTRONS\n  mixing_beta = 0.6\n/\n\nATOMIC_SPECIES\n  Si 28.086 Si.pz-vbc.UPF\n\nATOMIC_POSITIONS (alat)\n  Si 0.0 0.0 0.0\n  Si 0.25 0.25 0.25\n\nK_POINTS crystal\n216\n  0.00000000  0.00000000  0.00000000  4.629630e-03\n  0.00000000  0.00000000  0.16666667  4.629630e-03\n  0.00000000  0.00000000  0.33333333  4.629630e-03\n  0.00000000  0.00000000  0.50000000  4.629630e-03\n  0.00000000  0.00000000  0.66666667  4.629630e-03\n  0.00000000  0.00000000  0.83333333  4.629630e-03\n  0.00000000  0.16666667  0.00000000  4.629630e-03\n  0.00000000  0.16666667  0.16666667  4.629630e-03\n  0.00000000  0.16666667  0.33333333  4.629630e-03\n  0.00000000  0.16666667  0.50000000  4.629630e-03\n  0.00000000  0.16666667  0.66666667  4.629630e-03\n  0.00000000  0.16666667  0.83333333  4.629630e-03\n  0.00000000  0.33333333  0.00000000  4.629630e-03\n  0.00000000  0.33333333  0.16666667  4.629630e-03\n  0.00000000  0.33333333  0.33333333  4.629630e-03\n  0.00000000  0.33333333  0.50000000  4.629630e-03\n  0.00000000  0.33333333  0.66666667  4.629630e-03\n  0.00000000  0.33333333  0.83333333  4.629630e-03\n  0.00000000  0.50000000  0.00000000  4.629630e-03\n  0.00000000  0.50000000  0.16666667  4.629630e-03\n  0.00000000  0.50000000  0.33333333  4.629630e-03\n  0.00000000  0.50000000  0.50000000  4.629630e-03\n  0.00000000  0.50000000  0.66666667  4.629630e-03\n  0.00000000  0.50000000  0.83333333  4.629630e-03\n  0.00000000  0.66666667  0.00000000  4.629630e-03\n  0.00000000  0.66666667  0.16666667  4.629630e-03\n  0.00000000  0.66666667  0.33333333  4.629630e-03\n  0.00000000  0.66666667  0.50000000  4.629630e-03\n  0.00000000  0.66666667  0.66666667  4.629630e-03\n  0.00000000  0.66666667  0.83333333  4.629630e-03\n  0.00000000  0.83333333  0.00000000  4.629630e-03\n  0.00000000  0.83333333  0.16666667  4.629630e-03\n  0.00000000  0.83333333  0.33333333  4.629630e-03\n  0.00000000  0.83333333  0.50000000  4.629630e-03\n  0.00000000  0.83333333  0.66666667  4.629630e-03\n  0.00000000  0.83333333  0.83333333  4.629630e-03\n  0.16666667  0.00000000  0.00000000  4.629630e-03\n  0.16666667  0.00000000  0.16666667  4.629630e-03\n  0.16666667  0.00000000  0.33333333  4.629630e-03\n  0.16666667  0.00000000  0.50000000  4.629630e-03\n  0.16666667  0.00000000  0.66666667  4.629630e-03\n  0.16666667  0.00000000  0.83333333  4.629630e-03\n  0.16666667  0.16666667  0.00000000  4.629630e-03\n  0.16666667  0.16666667  0.16666667  4.629630e-03\n  0.16666667  0.16666667  0.33333333  4.629630e-03\n  0.16666667  0.16666667  0.50000000  4.629630e-03\n  0.16666667  0.16666667  0.66666667  4.629630e-03\n  0.16666667  0.16666667  0.83333333  4.629630e-03\n  0.16666667  0.33333333  0.00000000  4.629630e-03\n  0.16666667  0.33333333  0.16666667  4.629630e-03\n  0.16666667  0.33333333  0.33333333  4.629630e-03\n  0.16666667  0.33333333  0.50000000  4.629630e-03\n  0.16666667  0.33333333  0.66666667  4.629630e-03\n  0.16666667  0.33333333  0.83333333  4.629630e-03\n  0.16666667  0.50000000  0.00000000  4.629630e-03\n  0.16666667  0.50000000  0.16666667  4.629630e-03\n  0.16666667  0.50000000  0.33333333  4.629630e-03\n  0.16666667  0.50000000  0.50000000  4.629630e-03\n  0.16666667  0.50000000  0.66666667  4.629630e-03\n  0.16666667  0.50000000  0.83333333  4.629630e-03\n  0.16666667  0.66666667  0.00000000  4.629630e-03\n  0.16666667  0.66666667  0.16666667  4.629630e-03\n  0.16666667  0.66666667  0.33333333  4.629630e-03\n  0.16666667  0.66666667  0.50000000  4.629630e-03\n  0.16666667  0.66666667  0.66666667  4.629630e-03\n  0.16666667  0.66666667  0.83333333  4.629630e-03\n  0.16666667  0.83333333  0.00000000  4.629630e-03\n  0.16666667  0.83333333  0.16666667  4.629630e-03\n  0.16666667  0.83333333  0.33333333  4.629630e-03\n  0.16666667  0.83333333  0.50000000  4.629630e-03\n  0.16666667  0.83333333  0.66666667  4.629630e-03\n  0.16666667  0.83333333  0.83333333  4.629630e-03\n  0.33333333  0.00000000  0.00000000  4.629630e-03\n  0.33333333  0.00000000  0.16666667  4.629630e-03\n  0.33333333  0.00000000  0.33333333  4.629630e-03\n  0.33333333  0.00000000  0.50000000  4.629630e-03\n  0.33333333  0.00000000  0.66666667  4.629630e-03\n  0.33333333  0.00000000  0.83333333  4.629630e-03\n  0.33333333  0.16666667  0.00000000  4.629630e-03\n  0.33333333  0.16666667  0.16666667  4.629630e-03\n  0.33333333  0.16666667  0.33333333  4.629630e-03\n  0.33333333  0.16666667  0.50000000  4.629630e-03\n  0.33333333  0.16666667  0.66666667  4.629630e-03\n  0.33333333  0.16666667  0.83333333  4.629630e-03\n  0.33333333  0.33333333  0.00000000  4.629630e-03\n  0.33333333  0.33333333  0.16666667  4.629630e-03\n  0.33333333  0.33333333  0.33333333  4.629630e-03\n  0.33333333  0.33333333  0.50000000  4.629630e-03\n  0.33333333  0.33333333  0.66666667  4.629630e-03\n  0.33333333  0.33333333  0.83333333  4.629630e-03\n  0.33333333  0.50000000  0.00000000  4.629630e-03\n  0.33333333  0.50000000  0.16666667  4.629630e-03\n  0.33333333  0.50000000  0.33333333  4.629630e-03\n  0.33333333  0.50000000  0.50000000  4.629630e-03\n  0.33333333  0.50000000  0.66666667  4.629630e-03\n  0.33333333  0.50000000  0.83333333  4.629630e-03\n  0.33333333  0.66666667  0.00000000  4.629630e-03\n  0.33333333  0.66666667  0.16666667  4.629630e-03\n  0.33333333  0.66666667  0.33333333  4.629630e-03\n  0.33333333  0.66666667  0.50000000  4.629630e-03\n  0.33333333  0.66666667  0.66666667  4.629630e-03\n  0.33333333  0.66666667  0.83333333  4.629630e-03\n  0.33333333  0.83333333  0.00000000  4.629630e-03\n  0.33333333  0.83333333  0.16666667  4.629630e-03\n  0.33333333  0.83333333  0.33333333  4.629630e-03\n  0.33333333  0.83333333  0.50000000  4.629630e-03\n  0.33333333  0.83333333  0.66666667  4.629630e-03\n  0.33333333  0.83333333  0.83333333  4.629630e-03\n  0.50000000  0.00000000  0.00000000  4.629630e-03\n  0.50000000  0.00000000  0.16666667  4.629630e-03\n  0.50000000  0.00000000  0.33333333  4.629630e-03\n  0.50000000  0.00000000  0.50000000  4.629630e-03\n  0.50000000  0.00000000  0.66666667  4.629630e-03\n  0.50000000  0.00000000  0.83333333  4.629630e-03\n  0.50000000  0.16666667  0.00000000  4.629630e-03\n  0.50000000  0.16666667  0.16666667  4.629630e-03\n  0.50000000  0.16666667  0.33333333  4.629630e-03\n  0.50000000  0.16666667  0.50000000  4.629630e-03\n  0.50000000  0.16666667  0.66666667  4.629630e-03\n  0.50000000  0.16666667  0.83333333  4.629630e-03\n  0.50000000  0.33333333  0.00000000  4.629630e-03\n  0.50000000  0.33333333  0.16666667  4.629630e-03\n  0.50000000  0.33333333  0.33333333  4.629630e-03\n  0.50000000  0.33333333  0.50000000  4.629630e-03\n  0.50000000  0.33333333  0.66666667  4.629630e-03\n  0.50000000  0.33333333  0.83333333  4.629630e-03\n  0.50000000  0.50000000  0.00000000  4.629630e-03\n  0.50000000  0.50000000  0.16666667  4.629630e-03\n  0.50000000  0.50000000  0.33333333  4.629630e-03\n  0.50000000  0.50000000  0.50000000  4.629630e-03\n  0.50000000  0.50000000  0.66666667  4.629630e-03\n  0.50000000  0.50000000  0.83333333  4.629630e-03\n  0.50000000  0.66666667  0.00000000  4.629630e-03\n  0.50000000  0.66666667  0.16666667  4.629630e-03\n  0.50000000  0.66666667  0.33333333  4.629630e-03\n  0.50000000  0.66666667  0.50000000  4.629630e-03\n  0.50000000  0.66666667  0.66666667  4.629630e-03\n  0.50000000  0.66666667  0.83333333  4.629630e-03\n  0.50000000  0.83333333  0.00000000  4.629630e-03\n  0.50000000  0.83333333  0.16666667  4.629630e-03\n  0.50000000  0.83333333  0.33333333  4.629630e-03\n  0.50000000  0.83333333  0.50000000  4.629630e-03\n  0.50000000  0.83333333  0.66666667  4.629630e-03\n  0.50000000  0.83333333  0.83333333  4.629630e-03\n  0.66666667  0.00000000  0.00000000  4.629630e-03\n  0.66666667  0.00000000  0.16666667  4.629630e-03\n  0.66666667  0.00000000  0.33333333  4.629630e-03\n  0.66666667  0.00000000  0.50000000  4.629630e-03\n  0.66666667  0.00000000  0.66666667  4.629630e-03\n  0.66666667  0.00000000  0.83333333  4.629630e-03\n  0.66666667  0.16666667  0.00000000  4.629630e-03\n  0.66666667  0.16666667  0.16666667  4.629630e-03\n  0.66666667  0.16666667  0.33333333  4.629630e-03\n  0.66666667  0.16666667  0.50000000  4.629630e-03\n  0.66666667  0.16666667  0.66666667  4.629630e-03\n  0.66666667  0.16666667  0.83333333  4.629630e-03\n  0.66666667  0.33333333  0.00000000  4.629630e-03\n  0.66666667  0.33333333  0.16666667  4.629630e-03\n  0.66666667  0.33333333  0.33333333  4.629630e-03\n  0.66666667  0.33333333  0.50000000  4.629630e-03\n  0.66666667  0.33333333  0.66666667  4.629630e-03\n  0.66666667  0.33333333  0.83333333  4.629630e-03\n  0.66666667  0.50000000  0.00000000  4.629630e-03\n  0.66666667  0.50000000  0.16666667  4.629630e-03\n  0.66666667  0.50000000  0.33333333  4.629630e-03\n  0.66666667  0.50000000  0.50000000  4.629630e-03\n  0.66666667  0.50000000  0.66666667  4.629630e-03\n  0.66666667  0.50000000  0.83333333  4.629630e-03\n  0.66666667  0.66666667  0.00000000  4.629630e-03\n  0.66666667  0.66666667  0.16666667  4.629630e-03\n  0.66666667  0.66666667  0.33333333  4.629630e-03\n  0.66666667  0.66666667  0.50000000  4.629630e-03\n  0.66666667  0.66666667  0.66666667  4.629630e-03\n  0.66666667  0.66666667  0.83333333  4.629630e-03\n  0.66666667  0.83333333  0.00000000  4.629630e-03\n  0.66666667  0.83333333  0.16666667  4.629630e-03\n  0.66666667  0.83333333  0.33333333  4.629630e-03\n  0.66666667  0.83333333  0.50000000  4.629630e-03\n  0.66666667  0.83333333  0.66666667  4.629630e-03\n  0.66666667  0.83333333  0.83333333  4.629630e-03\n  0.83333333  0.00000000  0.00000000  4.629630e-03\n  0.83333333  0.00000000  0.16666667  4.629630e-03\n  0.83333333  0.00000000  0.33333333  4.629630e-03\n  0.83333333  0.00000000  0.50000000  4.629630e-03\n  0.83333333  0.00000000  0.66666667  4.629630e-03\n  0.83333333  0.00000000  0.83333333  4.629630e-03\n  0.83333333  0.16666667  0.00000000  4.629630e-03\n  0.83333333  0.16666667  0.16666667  4.629630e-03\n  0.83333333  0.16666667  0.33333333  4.629630e-03\n  0.83333333  0.16666667  0.50000000  4.629630e-03\n  0.83333333  0.16666667  0.66666667  4.629630e-03\n  0.83333333  0.16666667  0.83333333  4.629630e-03\n  0.83333333  0.33333333  0.00000000  4.629630e-03\n  0.83333333  0.33333333  0.16666667  4.629630e-03\n  0.83333333  0.33333333  0.33333333  4.629630e-03\n  0.83333333  0.33333333  0.50000000  4.629630e-03\n  0.83333333  0.33333333  0.66666667  4.629630e-03\n  0.83333333  0.33333333  0.83333333  4.629630e-03\n  0.83333333  0.50000000  0.00000000  4.629630e-03\n  0.83333333  0.50000000  0.16666667  4.629630e-03\n  0.83333333  0.50000000  0.33333333  4.629630e-03\n  0.83333333  0.50000000  0.50000000  4.629630e-03\n  0.83333333  0.50000000  0.66666667  4.629630e-03\n  0.83333333  0.50000000  0.83333333  4.629630e-03\n  0.83333333  0.66666667  0.00000000  4.629630e-03\n  0.83333333  0.66666667  0.16666667  4.629630e-03\n  0.83333333  0.66666667  0.33333333  4.629630e-03\n  0.83333333  0.66666667  0.50000000  4.629630e-03\n  0.83333333  0.66666667  0.66666667  4.629630e-03\n  0.83333333  0.66666667  0.83333333  4.629630e-03\n  0.83333333  0.83333333  0.00000000  4.629630e-03\n  0.83333333  0.83333333  0.16666667  4.629630e-03\n  0.83333333  0.83333333  0.33333333  4.629630e-03\n  0.83333333  0.83333333  0.50000000  4.629630e-03\n  0.83333333  0.83333333  0.66666667  4.629630e-03\n  0.83333333  0.83333333  0.83333333  4.629630e-03\n"}),"\n",(0,a.jsx)(n.p,{children:"Especially, notice following changes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  nbnd = 20\n  nosym = .true.\n  noinv = .true.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We turn off the automatic reduction of k-points that ",(0,a.jsx)(n.code,{children:"pw.x"})," does by using\ncrystal symmetries (",(0,a.jsx)(n.code,{children:"nosym = .true."})," and ",(0,a.jsx)(n.code,{children:"noinv = .true."}),"). This is because\n",(0,a.jsx)(n.code,{children:"epsilon.x"})," does not recognize crystal symmetries, therefore the entire list of\nk-points in the grid is needed. Secondly, we calculate a larger number of bands\n(20), since we are interested in interband transitions. Also, note that\n",(0,a.jsx)(n.code,{children:"epsilon.x"})," doesn't support the reduction of the k-points grid into the\nirreducible Brillouin zone, so the PW runs must be performed with a uniform\nk-points grid and all k-points weights must be equal to each other, i.e. in the\nk-points card the k-points coordinates must be given manually in ",(0,a.jsx)(n.code,{children:"crystal"})," or\n",(0,a.jsx)(n.code,{children:"alat"})," or ",(0,a.jsx)(n.code,{children:"bohr"}),", but not with the ",(0,a.jsx)(n.code,{children:"automatic"})," option. However, the automatic\nk-points option seems to work. If necessary, we can perform ",(0,a.jsx)(n.code,{children:"nscf"})," calculation\nwith finer k-grid."]}),"\n",(0,a.jsxs)(n.p,{children:["Next step is to prepare the input file for ",(0,a.jsx)(n.code,{children:"epsilon.x"}),":"]}),"\n","\n",(0,a.jsx)(l.Z,{language:"bash",title:"src/silicon/epsilon.si.in",showLineNumbers:!0,children:'&inputpp\n  outdir = "/tmp/"\n  prefix = "silicon"\n  calculation = "eps"\n/\n\n&energy_grid\n  smeartype = "gauss"\n  intersmear = 0.2\n  wmin =  0.0\n  wmax = 30.0\n  nw = 500\n/\n'}),"\n",(0,a.jsxs)(n.p,{children:["The variables ",(0,a.jsx)(n.code,{children:"smeartype"})," and ",(0,a.jsx)(n.code,{children:"intersmear"})," define the numerical approximation\nused to represent the Dirac delta functions in the expression for ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"\u03F5"}),(0,a.jsx)(n.mn,{children:"2"})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\epsilon_2"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"\u03F5"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200B"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})})]}),"\ngiven above. The variables ",(0,a.jsx)(n.code,{children:"wmin"}),", ",(0,a.jsx)(n.code,{children:"wmax"})," and ",(0,a.jsx)(n.code,{children:"nw"})," define the energy grid for\nthe dielectric function. All the energy variables are in eV."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mpirun -np 4 epsilon.x -i epsilon.si.in > epsilon.si.out\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We will see the results are saved in separate ",(0,a.jsx)(n.code,{children:".dat"})," files. We can plot the real\n(",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"\u03F5"}),(0,a.jsx)(n.mn,{children:"1"})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\epsilon_1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"\u03F5"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200B"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})})]}),") and imaginary (",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"\u03F5"}),(0,a.jsx)(n.mn,{children:"2"})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\epsilon_2"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"\u03F5"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200B"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})})]}),") parts of dielectric constants:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'import matplotlib.pyplot as plt\nfrom matplotlib import rcParamsDefault\nimport numpy as np\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\ndata_r = np.loadtxt(\'../src/silicon/epsr_silicon.dat\')\ndata_i = np.loadtxt(\'../src/silicon/epsi_silicon.dat\')\nenergy_r, epsilon_r = data_r[:, 0], data_r[:, 2]\nenergy_i, epsilon_i = data_i[:, 0], data_i[:, 2]\n\nplt.plot(energy_r, epsilon_r, lw=1, label="$\\\\epsilon_1$")\nplt.plot(energy_i, epsilon_i, lw=1, label="$\\\\epsilon_2$")\nplt.xlim(0, 15)\nplt.xlabel("Energy (eV)")\nplt.ylabel("$\\\\epsilon_1~/~\\\\epsilon_2$")\nplt.legend(frameon=False)\nplt.show()\n'})}),"\n",(0,a.jsx)("img",{src:s(7983).Z,class:"inv-hue-rot-180",alt:"silicon-epsilon"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Ultra-soft pseudopotentials do not work with ",(0,a.jsx)(n.code,{children:"epsilon.x"}),". Also note that the\nabove example is not tested against the k-mesh. We usually need finer k-mesh for\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"\u03F5"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"\u03F5"})]})})]})," to converge. By default the maximum number of k-points is set to\n40000 in Quantum Espresso, if we need more k-points, we can change\n",(0,a.jsx)(n.a,{href:"https://gitlab.com/QEF/q-e/-/blob/develop/Modules/parameters.f90",children:"Modules/parameters.f90"}),"\nand recompile Quantum Espresso."]})}),"\n",(0,a.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)("a",{target:"_blank",href:s(8504).Z,children:"Epsilon.x manual"}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8504:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/files/eps_man-ab3fac19eb366509dd129c37fbf94ac0.pdf"},7983:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/silicon-epsilon-83924adfcef99d6186800decced9800e.webp"}}]);