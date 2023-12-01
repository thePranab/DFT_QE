"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[771],{4275:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=s(5893),o=s(1151),t=s(9286);const a="&projwfc\n    outdir       = './tmp/'\n    prefix       = 'silicon'\n    ngauss       = 0\n    degauss      = 0.036748\n    DeltaE       = 0.005\n    kresolveddos = .true.\n    filpdos      = 'silicon.k'\n/\n",l={title:"k-resolved DOS",keywords:["Density of States"]},r=void 0,p={id:"hands-on/kpdos",title:"k-resolved DOS",description:"Here we will calculate k-resolved density of states for silicon. First we begin",source:"@site/docs/hands-on/kpdos.mdx",sourceDirName:"hands-on",slug:"/hands-on/kpdos",permalink:"/espresso/hands-on/kpdos",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/kpdos.mdx",tags:[],version:"current",frontMatter:{title:"k-resolved DOS",keywords:["Density of States"]},sidebar:"docs",previous:{title:"P-DOS",permalink:"/espresso/hands-on/pdos"},next:{title:"Graphene",permalink:"/espresso/hands-on/graphene"}},c={},d=[];function h(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here we will calculate k-resolved density of states for silicon. First we begin\nwith self consistent field calculation. Here is the input:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pw.x -inp si_scf.in > si_scf.out\n"})}),"\n",(0,i.jsx)(n.p,{children:"Followed by the bands calculation. Note that for bands calculation I have\ndoubled the number of k-points compared to our previous bands calculation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pw.x -inp si_bands.in > si_bands.out\n"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the orbital projections with k-resolved information:"}),"\n","\n","\n",(0,i.jsx)(t.Z,{language:"bash",title:"src/silicon/si_projwfc.in",showLineNumbers:!0,children:a}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"projwfc.x -inp si_projwfc.in > si_projwfc.out\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will give separate orbital projections, as well as total sum for k-resolved\nDOS. Make plots:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="notebooks/silicon-kpdos.ipynb" showLineNumbers',children:"import matplotlib.pyplot as plt\nfrom matplotlib import rcParamsDefault\nimport numpy as np\nimport zipfile\n%matplotlib inline\n\n# data file was compressed to reduce file size\nzipobj = zipfile.ZipFile('../src/silicon/silicon.k.pdos_tot.zip', 'r')\nzipdata = zipobj.open('silicon.k.pdos_tot')\ndata = np.loadtxt(zipdata)\n\nk = np.unique(data[:, 0])  # k values\ne = np.unique(data[:, 1])  # dos energy values\n\ndos = np.zeros([len(k), len(e)])\n\nfor i in range(len(data)):\n    e_index = int(i % len(e))\n    k_index = int(data[i][0] - 1)\n    dos[k_index, e_index] = data[i][2]\n\nplt.pcolormesh(k, e, dos.T, cmap='magma', shading='auto')\n# plt.ylim(-2, 10)\nplt.xticks([])\nplt.ylabel('Energy (eV)')\nplt.xticks([])\nplt.gcf().text(0.12, 0.06, 'L', fontsize=16, fontweight='normal')\nplt.gcf().text(0.29, 0.06, '$\\Gamma$', fontsize=16, fontweight='normal')\nplt.gcf().text(0.55, 0.06, 'X', fontsize=16, fontweight='normal')\nplt.gcf().text(0.63, 0.06, 'U', fontsize=16, fontweight='normal')\nplt.gcf().text(0.892, 0.06, '$\\Gamma$', fontsize=16, fontweight='normal')\nplt.axvline(21, c='yellow', lw=1, alpha=0.5)\nplt.axvline(51, c='yellow', lw=1, alpha=0.5)\nplt.axvline(61, c='yellow', lw=1, alpha=0.5)\nplt.show()\n"})}),"\n",(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{type:"image/webp",srcSet:s(9736).Z}),(0,i.jsx)("img",{src:s(3042).Z,alt:"silicon-kpdos"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.code,{children:"ibrav=0"}),", you can calculate ",(0,i.jsx)(n.code,{children:"projwfc"})," with ",(0,i.jsx)(n.code,{children:"lsym=.false."}),"\noption."]})}),"\n",(0,i.jsxs)(n.p,{children:["If we have contribution from multiple orbitals, we can sum desired projections\nusing ",(0,i.jsx)(n.code,{children:"sumpdos.x"})," program. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sumpdos.x *\\(Cl\\)*\\(p\\) > Cl_2p_tot.dat\n"})}),"\n",(0,i.jsx)(n.p,{children:"This way we can plot different orbital projections along with energy and\nk-resolution."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3042:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/silicon-kpdos-b2754c293a6015dc188488084104f6e7.png"},9736:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/silicon-kpdos-b66d3c028fb8a161bda92596c58e9cf3.webp"}}]);