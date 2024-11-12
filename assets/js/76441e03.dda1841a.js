"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2917],{2653:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(4848),l=s(8453);const r={sidebar_position:9},t="\u4efb\u52a1\u76f8\u5173\u63a5\u53e3\u4f7f\u7528\u6307\u5357",c={id:"HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u672c\u7ae0\u63a5\u53e3\u4f7f\u7528\u6848\u4f8b",title:"\u4efb\u52a1\u76f8\u5173\u63a5\u53e3\u4f7f\u7528\u6307\u5357",description:"\u672c\u6307\u5357\u6db5\u76d6\u4e86\u4e0e\u4efb\u52a1\u76f8\u5173\u7684\u51e0\u4e2a\u4e3b\u8981HTTP API\u63a5\u53e3\u3002\u6240\u6709\u63a5\u53e3\u90fd\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u5305\u542b\u4ece /login \u63a5\u53e3\u83b7\u53d6\u7684 Authorization \u503c\u3002",source:"@site/docs/navis/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u672c\u7ae0\u63a5\u53e3\u4f7f\u7528\u6848\u4f8b.md",sourceDirName:"HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3",slug:"/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u672c\u7ae0\u63a5\u53e3\u4f7f\u7528\u6848\u4f8b",permalink:"/navis/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u672c\u7ae0\u63a5\u53e3\u4f7f\u7528\u6848\u4f8b",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u672c\u7ae0\u63a5\u53e3\u4f7f\u7528\u6848\u4f8b.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5730\u56fe\u5750\u6807\u8f6c\u6210\u56fe\u7247\u50cf\u7d20\u5750\u6807",permalink:"/navis/http/mission/map-to-png"},next:{title:"\u7248\u672c\u4fe1\u606f\u76f8\u5173\u63a5\u53e3",permalink:"/navis/ws/version"}},d={},o=[{value:"1. \u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",id:"1-\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",level:2},{value:"2. \u6267\u884c\u5b9e\u65f6\u4efb\u52a1",id:"2-\u6267\u884c\u5b9e\u65f6\u4efb\u52a1",level:2},{value:"3. \u6267\u884c\u5217\u8868\u4efb\u52a1",id:"3-\u6267\u884c\u5217\u8868\u4efb\u52a1",level:2},{value:"4. \u8bbe\u7f6e\u4efb\u52a1\u4fe1\u606f",id:"4-\u8bbe\u7f6e\u4efb\u52a1\u4fe1\u606f",level:2},{value:"5. \u83b7\u53d6\u4efb\u52a1\u4fe1\u606f",id:"5-\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u4efb\u52a1\u76f8\u5173\u63a5\u53e3\u4f7f\u7528\u6307\u5357",children:"\u4efb\u52a1\u76f8\u5173\u63a5\u53e3\u4f7f\u7528\u6307\u5357"})}),"\n",(0,i.jsxs)(e.p,{children:["\u672c\u6307\u5357\u6db5\u76d6\u4e86\u4e0e\u4efb\u52a1\u76f8\u5173\u7684\u51e0\u4e2a\u4e3b\u8981HTTP API\u63a5\u53e3\u3002\u6240\u6709\u63a5\u53e3\u90fd\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u5305\u542b\u4ece ",(0,i.jsx)(e.code,{children:"/login"})," \u63a5\u53e3\u83b7\u53d6\u7684 Authorization \u503c\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"1-\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",children:"1. \u521d\u59cb\u5316\u4f4d\u7f6e\u70b9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3"}),": POST ",(0,i.jsx)(e.code,{children:"http://localhost/apiUrl/initialpose"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u9014"}),": \u673a\u5668\u4eba\u81ea\u5b9a\u4f4d\u529f\u80fd"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ec5\u5728\u5bfc\u822a\u72b6\u6001\u4e0b\u6709\u6548"}),"\n",(0,i.jsx)(e.li,{children:"\u5750\u6807\u9700\u8981\u4f7f\u7528\u5730\u56fe\u5750\u6807\u7cfb"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e"}),":","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\r\n  "x": 6.826084199456158,\r\n  "y": -1.6206613090806088,\r\n  "z": 0\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\u6267\u884c\u5b9e\u65f6\u4efb\u52a1",children:"2. \u6267\u884c\u5b9e\u65f6\u4efb\u52a1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3"}),": POST ",(0,i.jsx)(e.code,{children:"http://localhost/apiUrl/realtime_task"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u9014"}),": \u5728\u5f53\u524d\u5bfc\u822a\u5730\u56fe\u4e0a\u6267\u884c\u5b9e\u65f6\u4efb\u52a1"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9700\u8981\u5148\u5f00\u542f\u5bfc\u822a"}),"\n",(0,i.jsx)(e.li,{children:"\u5750\u6807\u9700\u8981\u4f7f\u7528\u5730\u56fe\u5750\u6807\u7cfb"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e\u793a\u4f8b"}),":","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\r\n  "loopTime": 1,\r\n  "points": [{ \r\n    "position": {\r\n      "x": 0,\r\n      "y": 0,\r\n      "theta": 0\r\n    },\r\n    "isNew": false,\r\n    "cpx": 0,\r\n    "cpy": 0\r\n  }],\r\n  "mode": "point"\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"3-\u6267\u884c\u5217\u8868\u4efb\u52a1",children:"3. \u6267\u884c\u5217\u8868\u4efb\u52a1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3"}),": POST ",(0,i.jsx)(e.code,{children:"http://localhost/apiUrl/run_list_task"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u9014"}),": \u6267\u884c\u9884\u5b9a\u4e49\u7684\u4efb\u52a1\u5217\u8868\u4e2d\u7684\u4efb\u52a1"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e\u793a\u4f8b"}),":","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\r\n  "mapName": "\u5730\u56fe\u540d\u79f0",\r\n  "taskName": "\u4efb\u52a1\u540d\u79f0",\r\n  "loopTime": 1\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"4-\u8bbe\u7f6e\u4efb\u52a1\u4fe1\u606f",children:"4. \u8bbe\u7f6e\u4efb\u52a1\u4fe1\u606f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3"}),": POST ",(0,i.jsx)(e.code,{children:"http://localhost/apiUrl/set_task"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u9014"}),": \u8bbe\u7f6e\u6216\u66f4\u65b0\u7279\u5b9a\u5730\u56fe\u7684\u4efb\u52a1\u4fe1\u606f"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"}),": \u5750\u6807\u9700\u8981\u4f7f\u7528\u5730\u56fe\u5750\u6807\u7cfb"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e"}),": \u5305\u542b\u5b8c\u6574\u7684\u4efb\u52a1\u4fe1\u606f\uff0c\u5305\u62ec\u4efb\u52a1\u70b9\u3001\u52a8\u4f5c\u7b49"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"5-\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f",children:"5. \u83b7\u53d6\u4efb\u52a1\u4fe1\u606f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3"}),": GET ",(0,i.jsx)(e.code,{children:"http://localhost/apiUrl/get_tasks?mapName=xx&taskName=xx"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7528\u9014"}),": \u83b7\u53d6\u7279\u5b9a\u5730\u56fe\u7684\u7279\u5b9a\u4efb\u52a1\u4fe1\u606f"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u53c2\u6570"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"mapName"}),": \u5730\u56fe\u540d\u79f0"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"taskName"}),": \u4efb\u52a1\u540d\u79f0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"tip",children:[(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u6240\u6709\u63a5\u53e3\u90fd\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u5305\u542b Authorization \u503c\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5750\u6807\u76f8\u5173\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u4f7f\u7528\u5730\u56fe\u5750\u6807\u7cfb\uff0c\u53ef\u53c2\u8003\u5750\u6807\u8f6c\u6362\u76f8\u5173\u6587\u6863\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u6267\u884c\u4efb\u52a1\u524d\uff0c\u8bf7\u786e\u4fdd\u673a\u5668\u4eba\u5df2\u7ecf\u5f00\u542f\u5bfc\u822a\u5e76\u5b9a\u4f4d\u51c6\u786e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u7248\u672c\u7279\u5b9a\u7684\u529f\u80fd\uff0c\u8bf7\u6ce8\u610f\u67e5\u770b\u76f8\u5173\u7684\u7248\u672c\u8981\u6c42\u8bf4\u660e\u3002"}),"\n"]}),(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u8fd9\u4e9b\u63a5\u53e3\u65f6\uff0c\u8bf7\u786e\u4fdd\u7406\u89e3\u6bcf\u4e2a\u53c2\u6570\u7684\u542b\u4e49\uff0c\u5e76\u6839\u636e\u5b9e\u9645\u9700\u6c42\u6b63\u786e\u8bbe\u7f6e\u53c2\u6570\u503c\u3002\u5982\u6709\u7591\u95ee\uff0c\u53ef\u4ee5\u53c2\u8003\u5404\u63a5\u53e3\u7684\u8be6\u7ec6\u8bf4\u660e\u6216\u54a8\u8be2\u6280\u672f\u652f\u6301\u3002"})]})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);