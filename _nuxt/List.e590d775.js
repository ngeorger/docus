import{d as r,a1 as l,K as u,Q as n,a9 as p,k as _}from"./entry.3c9a45bf.js";import{_ as m}from"./MDCSlot.ef8c18fb.js";import{u as d,f}from"./node.676c5e99.js";const y=()=>({unwrap:d,flatUnwrap:f}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:o,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=o((a.default&&a.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",i.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(m,{use:()=>t}))])))}}});const k=_(g,[["__scopeId","data-v-c3518dcd"]]);export{k as default};