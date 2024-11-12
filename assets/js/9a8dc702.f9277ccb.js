"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9621],{5763:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var s=l(4848),n=l(8453);const i={slug:"/ws/device/lifter/control",sidebar_position:4},r=void 0,d={id:"WEBSOCKET-API/\u5b9a\u65f6\u4efb\u52a1-\u8bbe\u5907\u76f8\u5173\u63a5\u53e3/\u5347\u964d\u6746\u63a7\u5236",title:"\u5347\u964d\u6746\u63a7\u5236",description:"\u5347\u964d\u6746\u63a7\u5236",source:"@site/docs/navis/WEBSOCKET-API/\u5b9a\u65f6\u4efb\u52a1-\u8bbe\u5907\u76f8\u5173\u63a5\u53e3/\u5347\u964d\u6746\u63a7\u5236.md",sourceDirName:"WEBSOCKET-API/\u5b9a\u65f6\u4efb\u52a1-\u8bbe\u5907\u76f8\u5173\u63a5\u53e3",slug:"/ws/device/lifter/control",permalink:"/navis/ws/device/lifter/control",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/\u5b9a\u65f6\u4efb\u52a1-\u8bbe\u5907\u76f8\u5173\u63a5\u53e3/\u5347\u964d\u6746\u63a7\u5236.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ws/device/lifter/control",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u65f6\u4efb\u52a1\u961f\u5217\u72b6\u6001",permalink:"/navis/ws/cron/running-list"},next:{title:"\u5347\u964d\u6746\u72b6\u6001",permalink:"/navis/ws/device/lifter/status"}},c={},x=[{value:"\u5347\u964d\u6746\u63a7\u5236",id:"\u5347\u964d\u6746\u63a7\u5236",level:4}];function h(e){const t={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u5347\u964d\u6746\u63a7\u5236",children:"\u5347\u964d\u6746\u63a7\u5236"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),"\r\n\u6dfb\u52a0\u673a\u68b0\u81c2\u3001\u5347\u964d\u6746\u3001RGBD\u76f8\u673a\u7b49\u8bbe\u5907\u65f6\u7684\u9a8c\u8bc1\u63a5\u53e3,\u5224\u65ad\u662f\u5426\u652f\u6301\u8be5\u7c7b\u578b\u8bbe\u5907\uff0c\u68c0\u6d4b\u8bbe\u5907\u662f\u5426\u8fde\u63a5\u6b63\u5e38\u3002\r\n",(0,s.jsx)(t.strong,{children:"\u6ce8\u610f"})," \u5fc5\u987b\u662f\u7531\u672c\u53f8\u63d0\u4f9b\u7684\u673a\u68b0\u81c2,\u5347\u964d\u6746,\u76f8\u673a\u624d\u53ef\u4f7f\u7528\u6b64\u7c7b\u63a5\u53e3\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "op": "call_service",\r\n    "service": "LiftingMotorService",\r\n    "type": "bt_task_msgs/LiftInterfaceSrv",\r\n    "args": {\r\n        "mode": -4,\r\n        "val": 1,\r\n        "id": "lifter_1"\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8c03\u7528\u670d\u52a1call_service"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u540d\u79f0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"type"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"args"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b\u8bf7\u6c42\u6570\u636e\u7684\u53c2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"val"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u53c2\u6570\u503c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"mode"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u63a7\u5236\u6a21\u5f0f:",(0,s.jsx)("div",{children:"mode=0\u4e3a\u4f4d\u7f6e\u63a7\u5236\u6a21\u5f0f\uff0cval\u503c\u8868\u793a\u8981\u8fd0\u52a8\u7684\u5347\u964d\u67f1\u9ad8\u5ea6\u503c,\u8303\u56f4[0,400];"}),(0,s.jsx)("div",{children:"mode=-2\u4e3a\u63a7\u5236\u7535\u673a\u6025\u505c; "}),(0,s.jsx)("div",{children:"-4\u4e3a\u63a7\u5236\u7535\u673a\u6052\u5b9a\u901f\u5ea6\u8fd0\u52a8\uff0c\u5176\u4e2d\uff0c\u901f\u5ea6\u4e3a\u6b63\u8868\u793a\u5347\u964d\u67f1\u5411\u4e0a\uff0c\u901f\u5ea6\u4e3a\u8d1f\u8868\u793a\u5347\u964d\u67f1\u5411\u4e0b,val=[-1000,1000],\u6b63\u5e38\u901f\u5ea6\u503c\u7ed9500\u5373\u53ef;"})," ",(0,s.jsx)("div",{children:"mode=-10\u5f00\u59cb\u8ba2\u9605\u6307\u5b9aid\u7684topic\uff0c\u5e76\u4e14\u53d1\u5e03\u8be5id\u7684\u8bdd\u9898; "})," ",(0,s.jsx)("div",{children:" mode=-11\u53d6\u6d88\u8ba2\u9605\u6307\u5b9aid\u7684topic\uff0c\u4e0d\u518d\u53d1\u5e03\u8be5id\u7684\u8bdd\u9898;"}),"  ",(0,s.jsx)("div",{children:"mode=-5 \u8bbe\u5b9a\u7535\u673a\u6700\u5927\u901f\u5ea6\uff0c\u53ef\u4ee5\u7528\u6765\u8bbe\u5b9a\u4f4d\u7f6e\u6a21\u5f0f\u4e0b\u5347\u964d\u67f1\u7684\u901f\u5ea6"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bbe\u5907ID"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e94\u7b54\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "values": {\r\n        "message": "\u8bbe\u7f6e\u6210\u529f",\r\n        "code": 10301,\r\n        "success": true\r\n    },\r\n    "result": true,\r\n    "service": "/LiftingMotorService",\r\n    "op": "service_response"\r\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'\u8c03\u7528\u670d\u52a1call_service\u7684\u56de\u590d\u5b57\u6bb5"service_response"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u540d\u79f0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"result"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8c03\u7528\u670d\u52a1\u662f\u5426\u6210\u529f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b\u56de\u590d\u6570\u636e\u7684\u53c2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"success"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u64cd\u4f5c\u5347\u964d\u6746\u8bbe\u5907\u662f\u5426\u6210\u529f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"code"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e94\u7b54\u7801,\u548cmessage\u5185\u5bb9\u5bf9\u5e94"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"message"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5177\u4f53\u5e94\u7b54\u6d88\u606f"})]})]})]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>d});var s=l(6540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);