"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[904],{2769:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>f,contentTitle:()=>h,default:()=>x,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var a=s(5893),t=s(1151),i=s(9286);const l="&CONTROL\n  calculation= 'vc-relax',\n  prefix= 'al',\n  outdir= '/tmp/'\n  pseudo_dir = '../pseudos/'\n  etot_conv_thr= 1e-6,\n  forc_conv_thr= 1e-5\n/\n\n&SYSTEM\n  ibrav=  2,\n  celldm(1)= 7.652,\n  nat=  1,\n  ntyp= 1,\n  ecutwfc = 50,\n  ecutrho= 500,\n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\n&IONS\n/\n\n&CELL\n  cell_dofree= 'ibrav'\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  10 10 10 0 0 0\n",r="&CONTROL\n  calculation= 'scf',\n  restart_mode= 'from_scratch',\n  prefix= 'al',\n  outdir= '/tmp/',\n  pseudo_dir= '../pseudos/'\n/\n\n&SYSTEM\n  ibrav= 2,\n  celldm(1) = 7.63075,\n  nat= 1,\n  ntyp= 1,\n  ecutwfc= 50,\n  ecutrho= 500,\n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  10 10 10 0 0 0\n",c="&CONTROL\n  calculation= 'nscf',\n  restart_mode= 'from_scratch',\n  prefix= 'al',\n  outdir= '/tmp/',\n  pseudo_dir= '../pseudos/'\n/\n\n&SYSTEM\n  ibrav= 2,\n  celldm(1) = 7.63075,\n  nat= 1,\n  ntyp= 1,\n  ecutwfc= 50,\n  ecutrho= 500,\n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  40 40 40 0 0 0\n",o="&DOS\n  prefix= 'al',\n  outdir= '/tmp/',\n  fildos= 'al_dos.dat',\n  emin= -10,\n  emax= 35\n/\n",d="&CONTROL\n  calculation= 'bands',\n  restart_mode= 'from_scratch',\n  prefix= 'al',\n  outdir= '/tmp/',\n  pseudo_dir= '../pseudos/'\n/\n\n&SYSTEM\n  ibrav= 2,\n  celldm(1) = 7.63075,\n  nat= 1,\n  ntyp= 1,\n  ecutwfc= 50,\n  ecutrho= 500,\n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS {crystal_b}\n5\n  00.000 0.500 00.000 20  !L\n  00.000 0.000 00.000 30  !G\n  -0.500 0.000 -0.500 10  !X\n  -0.375 0.250 -0.375 30  !U\n  00.000 0.000 00.000 20  !G\n",u="&BANDS\n  prefix = 'al'\n  outdir = '/tmp/'\n  filband = 'al_bands.dat'\n/\n",p={title:"DOS and bandstructure for Aluminum (metal)",sidebar_label:"Al (metal)"},h=void 0,m={id:"hands-on/aluminum",title:"DOS and bandstructure for Aluminum (metal)",description:"Variable cell relaxation",source:"@site/docs/hands-on/aluminum.mdx",sourceDirName:"hands-on",slug:"/hands-on/aluminum",permalink:"/espresso/hands-on/aluminum",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/aluminum.mdx",tags:[],version:"current",frontMatter:{title:"DOS and bandstructure for Aluminum (metal)",sidebar_label:"Al (metal)"},sidebar:"docs",previous:{title:"Bandstructure",permalink:"/espresso/hands-on/bands"},next:{title:"P-DOS",permalink:"/espresso/hands-on/pdos"}},f={},g=[{value:"Variable cell relaxation",id:"variable-cell-relaxation",level:2},{value:"Self consistent field (SCF) calculation",id:"self-consistent-field-scf-calculation",level:2},{value:"Non-self consistent field calculation",id:"non-self-consistent-field-calculation",level:2},{value:"Density of states",id:"density-of-states",level:2},{value:"Bandstructure calculation",id:"bandstructure-calculation",level:2},{value:"Importance of smearing in convergence",id:"importance-of-smearing-in-convergence",level:2}];function b(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"variable-cell-relaxation",children:"Variable cell relaxation"}),"\n",(0,a.jsx)(e.p,{children:"First we are going to relax the cell and choose appropriate lattice constant for\nour chosen pseudo potential. In case of metals, it is important to provide\nsmearing parameters in the input file."}),"\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_vc_relax.in",showLineNumbers:!0,children:l}),"\n",(0,a.jsxs)(e.p,{children:["We run ",(0,a.jsx)(e.code,{children:"pw.x"})," to perform variable cell relaxation calculation:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pw.x < al_vc_relax.in > al_vc_relax.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Now you may open the output file in ",(0,a.jsx)(e.strong,{children:"vi"})," editor and invoke search by pressing\n",(0,a.jsx)(e.code,{children:"/"})," and type ",(0,a.jsx)(e.em,{children:"Final enthalpy"})," You will find the final lattice parameters below\nit."]}),"\n",(0,a.jsx)(e.h2,{id:"self-consistent-field-scf-calculation",children:"Self consistent field (SCF) calculation"}),"\n",(0,a.jsx)(e.p,{children:"We obtain relaxed lattice constant = 7.652 * 0.498611683 / 0.5 = 7.63075 Bohr.\nWe will use this value for our next step, self consistent calculation."}),"\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_scf.in",showLineNumbers:!0,children:r}),"\n",(0,a.jsx)(e.p,{children:"We run our self consistent calculation:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pw.x < al_scf.in > al_scf.out\n"})}),"\n",(0,a.jsx)(e.h2,{id:"non-self-consistent-field-calculation",children:"Non-self consistent field calculation"}),"\n",(0,a.jsx)(e.p,{children:"Inspect the output file, and let's proceed to next step non-self consistent\ncalculation:"}),"\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_nscf.in",showLineNumbers:!0,children:c}),"\n",(0,a.jsxs)(e.p,{children:["Note the changes in input file. The calculation changed to ",(0,a.jsx)(e.code,{children:"nscf"})," and we are now\nusing a higher number of k-points grid."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pw.x < al_nscf.in > al_nscf.out\n"})}),"\n",(0,a.jsx)(e.h2,{id:"density-of-states",children:"Density of states"}),"\n",(0,a.jsx)(e.p,{children:"Next we go ahead with our density of states calculation:"}),"\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_dos.in",showLineNumbers:!0,children:o}),"\n",(0,a.jsxs)(e.p,{children:["We run ",(0,a.jsx)(e.code,{children:"dos.x"})," with DOS inputs:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"dos.x < al_dos.in > al_dos.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Note from our ",(0,a.jsx)(e.code,{children:"al_nscf.out"})," that our Fermi energy is at 7.9421 eV. We plot our\ndensity of states:"]}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/webp",srcSet:s(5615).Z}),(0,a.jsx)("img",{src:s(960).Z,alt:"al-dos"})]}),"\n",(0,a.jsx)(e.h2,{id:"bandstructure-calculation",children:"Bandstructure calculation"}),"\n",(0,a.jsx)(e.p,{children:"We prepare the input file the same as the case of our previous example silicon:"}),"\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_bands.in",showLineNumbers:!0,children:d}),"\n",(0,a.jsxs)(e.p,{children:["Followed by run ",(0,a.jsx)(e.code,{children:"pw.x"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pw.x < al_bands.in > al_bands.out\n"})}),"\n",(0,a.jsx)(e.p,{children:"Now we proceed with post-processing:"}),"\n","\n","\n",(0,a.jsx)(i.Z,{language:"bash",title:"src/al/al_bands_pp.in",showLineNumbers:!0,children:u}),"\n",(0,a.jsxs)(e.p,{children:["And run ",(0,a.jsx)(e.code,{children:"bands.x"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"bands.x < al_bands_pp.in > al_bands_pp.out\n"})}),"\n",(0,a.jsx)(e.p,{children:"We obtain the following bandstructure:"}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/webp",srcSet:s(4153).Z}),(0,a.jsx)("img",{src:s(2842).Z,alt:"al-bands"})]}),"\n",(0,a.jsx)(e.h2,{id:"importance-of-smearing-in-convergence",children:"Importance of smearing in convergence"}),"\n",(0,a.jsx)(e.p,{children:"Smearing is a technique used for suppressing unstable electron density in the\ncalculation of metals. Such a problem occurs in metals (and semimetals) because\nthe valence bands that cross Fermi level are partially occupied. Due to\nnumerical accuracy, the electrons may occupy the unoccupied states during some\niterations, making the algorithm unstable. In order to stablize the algorithm\nwithout using excessive number of k-points, smearing technique is used, which\nreplaces the occupation number (either 0 or 1) is replaced by a smoothly varying\nfunction of energy. Such a smearing function could be Fermi Dirac distribution,\ninstead of a step function (T = 0 K), we can use the finite temperature form."}),"\n",(0,a.jsx)(e.p,{children:"Below we will test the convergence using PWTK against the number of k-points,\nthree different smearing functions (Gauss, Methfessel-Paxton, and\nMarzari-Vanderbilt), and for various smearing values."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"pwtk al.degauss.pwtk\n"})}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/webp",srcSet:s(3632).Z}),(0,a.jsx)("img",{src:s(2940).Z,alt:"al-smearing"})]}),"\n",(0,a.jsxs)(e.p,{children:["We see that the ",(0,a.jsx)(e.code,{children:"m-v"})," and ",(0,a.jsx)(e.code,{children:"m-p"})," broadening allow for faster and smother\nconvergence while depending less on ",(0,a.jsx)(e.code,{children:"degauss"})," value than Gaussian broadening.\nThe number suffix next to the legend labels are number of uniform k-points in\nMonkhorst-Plank grid."]})]})}function x(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(b,{...n})}):b(n)}},2842:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-bands-80a59f979dc76cc93a8a3f0098e552db.png"},4153:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-bands-263ee17f888fd759e02a3ccd0fb26952.webp"},960:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-dos-1a1a20854f28a36239168339111e6b9e.png"},5615:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-dos-2de0749d0dfd3663a87c46f12a56f226.webp"},2940:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-smearing-5ed252d6a01bf986d7bbebf6226b6feb.png"},3632:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/al-smearing-b0cd82054a83bde2e60e5d7f57866f10.webp"}}]);