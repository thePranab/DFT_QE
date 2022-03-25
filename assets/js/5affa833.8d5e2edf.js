"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[694],{705:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),s=t(8066),r=["components"],l={title:"Self consistent field calculation for silicon",sidebar_label:"SCF calculation"},c=void 0,p={unversionedId:"hands-on/scf",id:"hands-on/scf",title:"Self consistent field calculation for silicon",description:"",source:"@site/docs/hands-on/scf.mdx",sourceDirName:"hands-on",slug:"/hands-on/scf",permalink:"/espresso/hands-on/scf",editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/scf.mdx",tags:[],version:"current",frontMatter:{title:"Self consistent field calculation for silicon",sidebar_label:"SCF calculation"},sidebar:"docs",previous:{title:"Hands-on",permalink:"/espresso/category/hands-on"},next:{title:"Convergence testing",permalink:"/espresso/hands-on/convergence"}},d={},u=[{value:"Resources",id:"resources",level:2}],m={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We need to provide various important parameters for the self consistent\ncalculation (solves the Kohn-Sham equation self-consistently) via an input file.\nIn QE input files, there are ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMELISTS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT_CARDS"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMELISTS"),"\nvariables have default values, and should be provided a new value as required by\nspecific calculation. The variables can be declared in any specific order. On\nthe other hand, the variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT_CARDS")," has always to be specified\nand in specific order. Logically independent ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT_CARDS")," may be organized in\nany order."),(0,o.kt)("p",null,"There are three mandatory ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMELISTS")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"PWscf"),": (1) ",(0,o.kt)("inlineCode",{parentName:"p"},"&CONTROL"),": specifies the\nflux of computation, (2) ",(0,o.kt)("inlineCode",{parentName:"p"},"&SYSTEM"),": specifies the system, and (3) ",(0,o.kt)("inlineCode",{parentName:"p"},"&ELECTRONS"),":\nspecifies the algorithms used to solve the Kohn-Sham equation. There are two\nother ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMELISTS"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"&IONS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&CELLS"),", which need to be specified depending on\nthe calculation."),(0,o.kt)("p",null,"Three ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT_CARDS"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ATOMIC_SPECIES"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ATOMIC_POSITIONS"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"K_POINTS")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"PWscf")," are mandatory. There are few others that must be provided in certain\ncalculations."),(0,o.kt)("p",null,"Blow is out input file is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/espresso/"},"pw.scf.silicon.in"),". The input files are typically named with\na prefix ",(0,o.kt)("inlineCode",{parentName:"p"},".in"),". The inputs are organized as ",(0,o.kt)("inlineCode",{parentName:"p"},"&namelists")," followed by their\nfields or cards. The ",(0,o.kt)("inlineCode",{parentName:"p"},"&control"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"&system"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"&electrons")," namelists are\nrequired. There are also optional ",(0,o.kt)("inlineCode",{parentName:"p"},"&cell")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&ions"),", you must provide them if\nyour calculation require them. Most variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"namelists")," have certain\ndefault values (which may or may not fit your needs), however some variables you\nmust always provide. Comment lines can be added with lines starting with a ",(0,o.kt)("inlineCode",{parentName:"p"},"!"),"\nlike in Fortran."),(0,o.kt)(s.Z,{language:"bash",title:"src/silicon/pw.scf.silicon.in",mdxType:"CodeBlock"},"&CONTROL\n! we want to perform self consistent field calculation\n  calculation = 'scf',\n\n! prefix is reference to the output files\n  prefix = 'silicon',\n\n! output directory. Note that it is deprecated.\n  outdir = './tmp/silicon/'\n\n! directory for the pseudo potential directory\n  pseudo_dir = './pseudos/'\n\n! verbosity high will give more details on the output file\n  verbosity = 'high'\n/\n\n&SYSTEM\n! Bravais lattice index, which is 2 for FCC structure\n  ibrav =  2,\n\n! Lattice constant in BOHR\n  celldm(1) = 10.26,\n\n! number of atoms in an unit cell\n  nat =  2,\n\n! number of different types of atom in the cell\n  ntyp = 1,\n\n! kinetic energy cutoff for wavefunction in Ry\n  ecutwfc = 30\n\n! number of bands to calculate\n  nbnd = 8\n/\n\n&ELECTRONS\n! Mixing factor used in the self-consistent method\n  mixing_beta = 0.6\n/\n\nATOMIC_SPECIES\n  Si 28.086 Si.pz-vbc.UPF\n\nATOMIC_POSITIONS (alat)\n  Si 0.0 0.0 0.0\n  Si 0.25 0.25 0.25\n\nK_POINTS (automatic)\n  6 6 6 0 0 0\n"),(0,o.kt)("p",null,"I am using the pseudo potential file (Si.pz-vbc.UPF) downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://www.quantum-espresso.org/pseudopotentials"},"Quantum\nEspresso Website"),"."),(0,o.kt)("p",null,"You must read the ",(0,o.kt)("strong",{parentName:"p"},"PWscf user manual")," for in-depth understanding. Check the\n",(0,o.kt)("inlineCode",{parentName:"p"},"qe-x.x/PW/Doc/")," folder under your installation directory. There is also another\nfile ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT_PW.html")," regarding the details of input parameters. PW stands for\nplane waves."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.x")," in self consistent mode for silicon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < pw.scf.silicon.in > pw.scf.silicon.out\n# For parallel execution\nmpirun -np 4 pw.x -inp pw.scf.silicon.in > pw.scf.silicon.out\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that I have added the executable path to my bash/zsh profile, otherwise you\nhave to provide the full path where the ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.x")," executable is located."))),(0,o.kt)("p",null,"Now let\u2019s look at the output file ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.scf.silicon.out")," and see how the\nconvergence is reached:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grep -e 'total energy' -e estimate pw.scf.silicon.out\n")),(0,o.kt)("p",null,"and you should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-fortran"},"     total energy              =     -15.85014573 Ry\n     Harris-Foulkes estimate   =     -15.86899637 Ry\n     estimated scf accuracy    <       0.06093037 Ry\n     total energy              =     -15.85194177 Ry\n     Harris-Foulkes estimate   =     -15.85292281 Ry\n     estimated scf accuracy    <       0.00462014 Ry\n     total energy              =     -15.85218359 Ry\n     Harris-Foulkes estimate   =     -15.85220235 Ry\n     estimated scf accuracy    <       0.00011293 Ry\n!    total energy              =     -15.85219789 Ry\n     Harris-Foulkes estimate   =     -15.85219831 Ry\n     estimated scf accuracy    <       0.00000099 Ry\n     The total energy is the sum of the following terms:\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the above calculation, if you check the output file ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.scf.silicon.out"),", you\nwill find: highest occupied, lowest unoccupied level (ev): 6.2117 6.8442.\nTherefore, the bandgap is 0.6325 eV, which is an underestimation of actual\nbandgap (1.12 eV)."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tips on convergence")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reduce ",(0,o.kt)("inlineCode",{parentName:"p"},"mixing_beta")," value, especially if there is an oscillation around the\nconvergence energy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it is metallic system, use smearing and degauss. In this case, the SCF\naccuracy gradually goes down then suddenly increases (due to slight change in\nFermi energy highest occupied / lowest unoccupied levels change).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Increase energy and charge density cutoffs (make sure they are sufficient).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Certain pseudo potential files have issues, you may try with pseudo\npotentials from different libraries.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suggested values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"conv_thr"),": for energy and eigenvalues (scf\ncalculation) 1.0d-7, for forces (relax calculation) 1.0d-8, for stress (vc-relax\ncalculation) 1.0d-9 Ry. For certain calculation convergence might be very slow\nfor the first iteration, one can start the calculation with a higher threshold,\nafter few iterations reduce it and restart the calculation."))))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.quantum-espresso.org/Doc/pw_user_guide/"},"https://www.quantum-espresso.org/Doc/pw_user_guide/"))))}h.isMDXComponent=!0}}]);