(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{152:function(e,a,n){},260:function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),i=n(31),r=n.n(i),s=(n(152),n(9)),c=n(301),o=n(306),b=n(309),m=n(302),u=n(304),d=n(308),j=n(95),g=(n(259),n(1));var h=function(){var e=Object(l.useState)(JSON.parse(localStorage.getItem("data"))),a=Object(s.a)(e,2),n=a[0],t=(a[1],Object(l.useState)(JSON.parse(localStorage.getItem("userData")))),i=Object(s.a)(t,2),r=i[0],h=i[1],p=Object(l.useState)(!1),O=Object(s.a)(p,2),x=O[0],f=O[1],v=Object(l.useState)(""),y=Object(s.a)(v,2),S=y[0],k=y[1],F=Object(l.useState)(""),C=Object(s.a)(F,2),M=C[0],w=C[1],P=Object(l.useState)(!1),B=Object(s.a)(P,2),T=B[0],I=B[1],N={name:S,sectors:M,checkbox:x};console.log("s",n);var E=[{name:"Manufacturing",label:!0,sub:[{name:"Construction materials",label:!1},{name:"Electronics and Optics",label:!1},{name:"Food and Beverage",label:!0,sub:[{name:"Bakery & confectionery products",label:!1},{name:"Beverages",label:!1},{name:"Fish & fish products",label:!1},{name:"Meat & meat products",label:!1},{name:"Milk & dairy products",label:!1},{name:"Other",label:!1},{name:"Sweets & snack food",label:!1}]},{name:"Furniture",label:!0,sub:[{name:"Bathroom/sauna",label:!1},{name:"Bedroom",label:!1},{name:"Children\u2019s room",label:!1},{name:"Kitchen",label:!1},{name:"Living room",label:!1},{name:"Office",label:!1},{name:"Other (Furniture)",label:!1},{name:"Other",label:!1},{name:"Outdoor",label:!1},{name:"Project furniture",label:!1}]},{name:"Machinery",label:!0,sub:[{name:"Machinery components",label:!1},{name:"Machinery equipment/tools",label:!1},{name:"Manufacture of machinery",label:!1},{name:"Maritime",label:!0,sub:[{name:"Aluminium and steel workboats",label:!1},{name:"Boat/Yacht building",label:!1},{name:"Ship repair and conversion",label:!1}]},{name:"Metal structures",label:!1},{name:"Other",label:!1},{name:"Repair and maintenance service",label:!1}]},{name:"Metalworking",label:!0,sub:[{name:"Construction of metal structures",label:!1},{name:"Houses and buildings",label:!1},{name:"Metal products",label:!1},{name:"Metal works",label:!0,sub:[{name:"CNC-machining",label:!1},{name:"Forgings, Fasteners",label:!1},{name:"Gas, Plasma, Laser cutting",label:!1},{name:"MIG, TIG, Aluminum welding",label:!1}]}]},{name:"Plastic and Rubber",label:!0,sub:[{name:"Packaging",label:!1},{name:"Plastic goods",label:!1},{name:"Plastic processing technology",label:!0,sub:[{name:"Blowing",label:!1},{name:"Moulding",label:!1},{name:"Plastics welding and processing",label:!1}]},{name:"Plastic profiles",label:!1}]},{name:"Printing",label:!0,sub:[{name:"Advertising",label:!1},{name:"Book/Periodicals printing",label:!1},{name:"Labelling and packaging printing",label:!1}]},{name:"Textile and Clothing",label:!0,sub:[{name:"Clothing",label:!1},{name:"Textile",label:!1}]},{name:"Wood",label:!0,sub:[{name:"Other (Wood)",label:!1},{name:"Wooden building materials",label:!1},{name:"Wooden houses",label:!1}]}]},{name:"Other",label:!0,sub:[{name:"Creative industries",label:!1},{name:"Energy technology",label:!1},{name:"Environment",label:!1}]},{name:"Service",label:!0,sub:[{name:"Business services",label:!1},{name:"Engineering",label:!1},{name:"Information Technology and Telecommunications",label:!0,sub:[{name:"Data processing, Web portals, E-marketing",label:!1},{name:"Programming, Consultancy",label:!1},{name:"Software, Hardware",label:!1},{name:"Telecommunications",label:!1}]},{name:"Tourism",label:!1},{name:"Translation services",label:!1},{name:"Transport and Logistics",label:!0,sub:[{name:"Air",label:!1},{name:"Rail",label:!1},{name:"Road",label:!1},{name:"Water",label:!1}]}]}];function W(e,a){return e.label?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("option",{value:e.name,children:["\xa0\xa0",e.name]},a+e.name),e.sub.map((function(e,a){return Object(g.jsx)(g.Fragment,{children:A(e,a)})}))]}):Object(g.jsxs)("option",{value:e.name,children:["\xa0\xa0",e.name]},a+e.name)}function A(e,a){return e.label?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("option",{value:e.name,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.name]},a+e.name),e.sub.map((function(e,a){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("option",{value:e.name,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.name]},a+e.name)})}))]}):Object(g.jsxs)("option",{value:e.name,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.name]},a+e.name)}return Object(l.useEffect)((function(){window.localStorage.setItem("data",JSON.stringify(E))})),Object(l.useEffect)((function(){I(""===S||""===M||!1===x)}),[M,S,x]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.a,{container:!0,spacing:2,children:[Object(g.jsx)(o.a,{style:{display:"flex",justifyContent:"center"},item:!0,xs:12,children:Object(g.jsx)(b.a,{style:{padding:"10px"},children:Object(g.jsx)("b",{children:"Please enter your name and pick the Sectors you are currently involved in."})})}),Object(g.jsx)(o.a,{item:!0,md:6,children:Object(g.jsx)(b.a,{children:Object(g.jsx)(j.b,{validateOnChange:!0,enableReinitialize:"true",initialValues:{name:"",sectors:"",checkbox:!1},onSubmit:function(e,a){var n=a.resetForm;console.log("values",S,M,x),localStorage.setItem("userData",JSON.stringify(N)),h(N),n()},children:function(e){var a=e.setFieldValue;e.submitForm,e.values,e.errors,e.handleSubmit,e.resetForm;return Object(g.jsx)(j.a,{children:Object(g.jsxs)(b.a,{style:{padding:"20px"},children:[Object(g.jsx)(b.a,{style:{padding:"20px"},children:Object(g.jsx)(m.a,{name:"name",label:"Name",variant:"outlined",color:"secondary",size:"small",disabled:!1,fullWidth:!0,onChange:function(e){return k(e.target.value)}})}),Object(g.jsxs)(b.a,{style:{padding:"20px"},children:["Sectors:",Object(g.jsxs)(c.a,{native:!0,defaultValue:"",id:"grouped-native-select",placeholder:"Sectors",onChange:function(e){return w(e.target.value)},children:[Object(g.jsx)("option",{"aria-label":"None",value:"Sectors2"}),n&&n.map((function(e,a){return function(e,a){return e.label?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("option",{value:e.name,children:e.name},a+e.name),e.sub.map((function(e,a){return Object(g.jsx)(g.Fragment,{children:W(e,a)})}))]}):Object(g.jsx)("option",{value:e.name,children:e.name},a+e.name)}(e,a)}))]})]}),Object(g.jsxs)(b.a,{style:{padding:"20px"},children:[Object(g.jsx)(u.a,{color:"primary",name:"checkbox",checked:x&&x,onChange:function(e){e.target.checked?(a("checkbox",1),f(!0),console.log(e.target.checked)):(a("checkbox",0),f(!1),console.log(e.target.checked))}}),"Agree to terms"]}),Object(g.jsx)(b.a,{style:{padding:"20px"},children:Object(g.jsx)(d.a,{type:"submit",color:"primary",variant:"contained",disabled:T,children:"Save"})})]})})}})})}),Object(g.jsx)(o.a,{item:!0,md:6,children:Object(g.jsx)(b.a,{style:{justifyContent:"center",display:"flex"},children:Object(g.jsxs)(b.a,{style:{padding:"10px",border:"1px solid black",borderRadius:"5px",width:"50%"},children:[Object(g.jsxs)(b.a,{style:{padding:"20px"},children:["Name: ",r.name]}),Object(g.jsxs)(b.a,{style:{padding:"20px"},children:["Sectors: ",r.sectors]}),Object(g.jsxs)(b.a,{style:{padding:"20px"},children:["Agree: ",!0===r.checkbox?" Yes":"NO"]})]})})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,312)).then((function(a){var n=a.getCLS,l=a.getFID,t=a.getFCP,i=a.getLCP,r=a.getTTFB;n(e),l(e),t(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(t.a.StrictMode,{children:Object(g.jsx)(h,{})}),document.getElementById("root")),p()}},[[260,1,2]]]);
//# sourceMappingURL=main.6559e03f.chunk.js.map