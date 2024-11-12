"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7618],{6390:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var s=l(4848),n=l(8453);const r={slug:"/ws/charge/set_value",sidebar_position:4},i=void 0,d={id:"WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u8bbe\u7f6e\u5145\u7535\u9608\u503c",title:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",description:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",source:"@site/docs/navis/WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u8bbe\u7f6e\u5145\u7535\u9608\u503c.md",sourceDirName:"WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3",slug:"/ws/charge/set_value",permalink:"/navis/ws/charge/set_value",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u8bbe\u7f6e\u5145\u7535\u9608\u503c.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ws/charge/set_value",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5145\u7535\u6a21\u5757\u5f00\u5173",permalink:"/navis/ws/charge/set"},next:{title:"\u5145\u7535\u6869\u4fe1\u606f",permalink:"/navis/ws/charge/charge_info"}},c={},x=[{value:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",id:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",level:4}];function h(e){const t={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",children:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u6ce8\u610f"}),"\uff0c\u53ea\u6709\u5904\u4e8e\u5bfc\u822a\u72b6\u6001\u6709\u6548\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u5bfc\u822a\u8bf7\u53c2\u8003\u63a5\u53e3 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/navis/ws/robot/slam_status",children:"\u8bbe\u5907\u5f53\u524d\u72b6\u6001"})}),"\r\n\u8bbe\u7f6e\u5145\u7535\u7684\u6700\u5c0f\u548c\u6700\u5927\u9608\u503c\uff0c\u5f53\u7535\u91cf\u5c0f\u4e8e\u7b49\u4e8e\u6700\u5c0f\u5145\u7535\u9608\u503c\u65f6\u673a\u5668\u4eba\u4f1a",(0,s.jsx)(t.strong,{children:"\u4e3b\u52a8\u89e6\u53d1"}),"\u5145\u7535\uff0c\u5f53\u5927\u4e8e\u7b49\u4e8e\u6700\u5927\u5145\u7535\u9608\u503c\u65f6\u53d6\u6d88\u5145\u7535\u3002\u65e0\u8bba\u8bbe\u7f6e\u7684\u9608\u503c\u662f\u5426\u5408\u7406\uff0c\u6700\u7ec8\u4f1a\u8fd4\u56de\u6700\u7ec8\u9608\u503c\u548c\u76f8\u5173\u4fe1\u606f\uff0c\u76ee\u524d\u4ee5\u4e0b3\u79cd\u60c5\u51b5\u4f1a\u8bbe\u7f6e\u5931\u8d25\uff1a","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u6700\u5c0f\u5145\u7535\u9608\u503c\u5c0f\u4e8e10"}),"\n",(0,s.jsx)(t.li,{children:"\u6700\u5927\u5145\u7535\u9608\u503c\u5927\u4e8e100"}),"\n",(0,s.jsx)(t.li,{children:"\u6700\u5927\u5145\u7535\u9608\u503c\u5c0f\u4e8e\u7b49\u4e8e\u6700\u5c0f\u5145\u7535\u9608\u503c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "op": "call_service",\r\n    "service": "/find_charger/set_charge_level",\r\n    "type":"tools_msgs/setChargeLevel",\r\n    "args": {\r\n        "min_charge_level":10,\r\n        "max_charge_level":20\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8c03\u7528\u670d\u52a1call_service"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u540d\u79f0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"type"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"args"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b\u8bf7\u6c42\u6570\u636e\u7684\u53c2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"min_charge_level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6700\u5c0f\u5145\u7535\u9608\u503c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"max_charge_level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6700\u5927\u5145\u7535\u9608\u503c"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e94\u7b54\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "values": {\r\n        "message": "success.",\r\n        "min_charge_level": 10,\r\n        "max_charge_level": 20,\r\n        "success": true\r\n    },\r\n    "result": true,\r\n    "service": "/find_charger/set_charge_level",\r\n    "op": "service_response"\r\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'\u8c03\u7528\u670d\u52a1call_service\u7684\u56de\u590d\u5b57\u6bb5"service_response"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u540d\u79f0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"result"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u8c03\u7528\u670d\u52a1\u662f\u5426\u6210\u529f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b\u56de\u590d\u6570\u636e\u7684\u53c2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"message"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u670d\u52a1\u7c7b\u578b\u56de\u590d\u5177\u4f53\u4fe1\u606f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"success"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5f00\u542f\u6216\u8005\u53d6\u6d88\u81ea\u4e3b\u56de\u5145 \u8bf7\u6c42\u662f\u5426\u6210\u529f"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"min_charge_level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6700\u5c0f\u5145\u7535\u9608\u503c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"max_charge_level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6700\u5927\u5145\u7535\u9608\u503c"})]})]})]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>d});var s=l(6540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);