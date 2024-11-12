"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5502],{3013:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(4848),r=n(8453);const i={slug:"/http/mission/set-task",sidebar_position:4},l=void 0,d={id:"HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",title:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",description:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",source:"@site/docs/navis/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f.md",sourceDirName:"HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3",slug:"/http/mission/set-task",permalink:"/navis/http/mission/set-task",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/HTTP-API/\u4efb\u52a1\u76f8\u5173\u63a5\u53e3/\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/http/mission/set-task",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u5f53\u524d\u5bfc\u822a\u7684\u5730\u56fe\u6267\u884c\u5217\u8868\u4efb\u52a1",permalink:"/navis/http/mission/excute-list-task"},next:{title:"\u83b7\u53d6\u67d0\u4e2a\u5730\u56fe\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",permalink:"/navis/http/mission/get-task"}},c={},o=[{value:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",id:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",level:4}];function a(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h4,{id:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f",children:"\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"POST\u8bf7\u6c42:"}),"\r\n",(0,s.jsx)(e.a,{href:"http://localhost/apiUrl/set_task",children:"http://localhost/apiUrl/set_task"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8bf7\u6c42\u5934\u90e8:"}),"\r\nAuthorization:\u4ece/login\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\u4e2d\u83b7\u53d6\u503c"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),"\r\n\u8bbe\u7f6e\u67d0\u4e2a\u5730\u56fe\u7684\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f,\u586b\u5199position\u65f6\u9700\u8981\u586b\u5199\u5730\u56fe\u5750\u6807\uff0c\u5982\u4f55\u83b7\u53d6\u5730\u56fe\u5750\u6807\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/navis/http/mission/png-to-map",children:"\u5750\u6807\u8f6c\u6362"})})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8bf7\u6c42\u53c2\u6570:"}),"\r\n\u8868\u5355json\u6570\u636e"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n    "mapName": "",\r\n    "taskName": "",\r\n    "editedName": "",\r\n    "mode": "",\r\n    "evadible": 1,\r\n    "speed": 1,\r\n    "rotateSpeed": 1,\r\n    "remark": "",\r\n    "personName": "",\r\n    "points": [\r\n        {\r\n            "isNew": true,\r\n            "id": "task-fc4992cd-30f0-4344-986b-433e6023f4fe",\r\n            "position": {\r\n                "x": 0,\r\n                "y": 1,\r\n                "theta": 10\r\n            },\r\n            "cpx": 0,\r\n            "cpy": 0,\r\n            "pointType": "navigation",\r\n            "pointName": "",\r\n            "actions": [\r\n                {\r\n                    "deviceId": "robot",\r\n                    "actionType": "move",\r\n                    "actionContent": "1"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8bf7\u6c42\u53c2\u6570\u4e0e\u63a5\u53e3",(0,s.jsx)(e.code,{children:"\u83b7\u53d6\u67d0\u4e2a\u5730\u56fe\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f"}),"\u4e00\u81f4\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/navis/http/mission/get-task",children:"\u83b7\u53d6\u67d0\u4e2a\u5730\u56fe\u67d0\u4e2a\u4efb\u52a1\u4fe1\u606f"})})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n    "success": true,\r\n    "code": 0, \r\n    "msg": "\u6210\u529f",\r\n    "data":""\r\n}\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"success"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bf7\u6c42\u662f\u5426\u6210\u529f"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"code"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u7801\uff0c\u4f18\u5148\u5224\u65ad\u8be5\u72b6\u6001\u7801,\u8fd4\u56de0\u5373\u8868\u793a\u6210\u529f,-1\u8868\u793a\u5931\u8d25"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"msg"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u63cf\u8ff0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"data"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5e94\u7b54\u6570\u636e"})]})]})]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>d});var s=n(6540);const r={},i=s.createContext(r);function l(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);