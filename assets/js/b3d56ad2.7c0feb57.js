"use strict";(self.webpackChunkmm=self.webpackChunkmm||[]).push([[1645],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1570:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="PO02-Pol\xedtica de mensajes de commits",m={unversionedId:"Politicas/PO02",id:"Politicas/PO02",title:"PO02-Pol\xedtica de mensajes de commits",description:"Se debe seguir la regla early and often, la cual consiste en hacer peque\xf1os commits seguidos para mantener el c\xf3digo limpio y ordenado.",source:"@site/docs/Politicas/PO02.md",sourceDirName:"Politicas",slug:"/Politicas/PO02",permalink:"/Politicas/PO02",editUrl:"https://github.com/MutateInc/manual-de-operaciones/tree/main/docs/Politicas/PO02.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PO01-Pol\xedtica de nombramiento de ramas",permalink:"/Politicas/PO01"},next:{title:"PO03-Pol\xedtica de Pull Requests",permalink:"/Politicas/PO03"}},p={},c=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Recomendaciones",id:"recomendaciones",level:2},{value:"Referencias",id:"referencias",level:2},{value:"Autores",id:"autores",level:2},{value:"Versiones",id:"versiones",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"po02-pol\xedtica-de-mensajes-de-commits"},"PO02-Pol\xedtica de mensajes de commits"),(0,l.kt)("p",null,"Se debe seguir la regla ",(0,l.kt)("a",{parentName:"p",href:"https://www.worklytics.co/commit-early-push-often/"},"early and often"),", la cual consiste en hacer peque\xf1os commits seguidos para mantener el c\xf3digo limpio y ordenado."),(0,l.kt)("p",null,"Los mensajes de commits deber\xe1n seguir el est\xe1ndar de ",(0,l.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits v1.0.0"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"<type>(<scope>)[!]: [optional emoji] <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type")," puede ser uno de los siguientes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"feat -> cualquier contenido nuevo que va a ser agregado."),(0,l.kt)("li",{parentName:"ul"},"fix -> correcciones a contenido ya en repo (bugfixes)."),(0,l.kt)("li",{parentName:"ul"},"test -> agrega o corrige pruebas."),(0,l.kt)("li",{parentName:"ul"},"style -> cambios que no afectan el significado del codigo ni su performance (espacios en blanco y formateo)."),(0,l.kt)("li",{parentName:"ul"},"revert -> eliminar el commit anterior."),(0,l.kt)("li",{parentName:"ul"},"refactor -> cambio que no arregla un bug ni agrega un feature (reestructuraci\xf3n de c\xf3digo)."),(0,l.kt)("li",{parentName:"ul"},"docs -> documentaci\xf3n de c\xf3digo.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scope")," es el grupo de casos al que pertenece la funcionalidad a implementar/editar.",(0,l.kt)("br",{parentName:"p"}),"\n","Por ejemplo, diferentes tipos de scope para la wiki son:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pol\xedtica "),(0,l.kt)("li",{parentName:"ul"},"Gu\xeda"),(0,l.kt)("li",{parentName:"ul"},"Proceso"),(0,l.kt)("li",{parentName:"ul"},"Plantilla"),(0,l.kt)("li",{parentName:"ul"},"Definici\xf3n")),(0,l.kt)("p",null,"El scope para c\xf3digo ser\xeda la user story a la que pertenece.\n",(0,l.kt)("inlineCode",{parentName:"p"},"description")," es un resumen de que cambios se hicieron sin entrar a mucho detalle y sin repetir el scope y el tipo. Debe ser una oraci\xf3n en min\xfasculas usando TIEMPO IMPERATIVO.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"emoji")," es un emoji que representa el tipo de cambio. ",(0,l.kt)("strong",{parentName:"p"},"OPCIONAL"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"body")," es una descripci\xf3n detallada del cambio.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"footer(s)")," incluye cambios que rompan alguna funcionalidad, precedidos por ",(0,l.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mensaje de commit"),(0,l.kt)("th",{parentName:"tr",align:null},"Caso de ejemplo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feat(auth): \u2728 implement hash salting")),(0,l.kt)("td",{parentName:"tr",align:null},"Se agrega la funcionalidad de salteado a las contrase\xf1as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style(auth): \ud83c\udfa8 run prettier")),(0,l.kt)("td",{parentName:"tr",align:null},"Se ejecut\xf3 un software de formato (Prettier) en el proceso de auth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"chore(general)!: \ud83d\udca5 drop support for Node 6",(0,l.kt)("br",null),"BREAKING CHANGE: use JavaScript features not available in Node 6")),(0,l.kt)("td",{parentName:"tr",align:null},"Se actualiz\xf3 la versi\xf3n de Node y versiones anteriores ya no son soportadas")))),(0,l.kt)("h2",{id:"recomendaciones"},"Recomendaciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Usar la extension de VSCode ",(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits"},"ConventionalCommits by Vivaxy")," la cual ofrece un UI para generar mensajes de commits."),(0,l.kt)("li",{parentName:"ul"},"Leer el resumen de ",(0,l.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits v1.0.0")),(0,l.kt)("li",{parentName:"ul"},"Implementar ",(0,l.kt)("a",{parentName:"li",href:"https://commitlint.js.org"},"commitlint")," en los repositorios, el cual verifica que los mensajes sean v\xe1lidos."),(0,l.kt)("li",{parentName:"ul"},"Implementar ",(0,l.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky"},"Husky")," con ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/git-cz"},"git-cz")," para proveer una interfaz en consola al ejecutar ",(0,l.kt)("inlineCode",{parentName:"li"},"git commit"),".")),(0,l.kt)("h2",{id:"referencias"},"Referencias"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitmoji.dev/"},"Gitmoji")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/carloscuesta/gitmoji/blob/master/src/data/gitmojis.json"},"Gitmoji (json doc)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0"},"Conventional Commits v1.0.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://commitlint.js.org/"},"Commit Lint"))),(0,l.kt)("h2",{id:"autores"},"Autores"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.github.com/BernardoEstrada"},"@BernardoEstrada")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.github.com/MartinNoboa"},"@MartinNoboa"))),(0,l.kt)("h2",{id:"versiones"},"Versiones"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Versi\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Responsables"),(0,l.kt)("th",{parentName:"tr",align:null},"Fecha"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Creaci\xf3n de la Pol\xedtica"),(0,l.kt)("td",{parentName:"tr",align:null},"Bernardo Estrada"),(0,l.kt)("td",{parentName:"tr",align:null},"18/03/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Correcci\xf3n ortogr\xe1fica"),(0,l.kt)("td",{parentName:"tr",align:null},"Bernardo Estrada"),(0,l.kt)("td",{parentName:"tr",align:null},"23/03/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Aumentar nivel de detalle"),(0,l.kt)("td",{parentName:"tr",align:null},"BE & MN"),(0,l.kt)("td",{parentName:"tr",align:null},"04/04/2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.3"),(0,l.kt)("td",{parentName:"tr",align:null},"Correcci\xf3n ortogr\xe1fica"),(0,l.kt)("td",{parentName:"tr",align:null},"Guillermo C. Espino"),(0,l.kt)("td",{parentName:"tr",align:null},"06/04/2022")))))}d.isMDXComponent=!0}}]);