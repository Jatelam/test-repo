"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5683],{1371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(4848),l=n(8453);const r={slug:"/ws/charge/charge_info",sidebar_position:5},i=void 0,c={id:"WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u5145\u7535\u6869\u4fe1\u606f",title:"\u5145\u7535\u6869\u4fe1\u606f",description:"\u5145\u7535\u6869\u4fe1\u606f",source:"@site/docs/navis/WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u5145\u7535\u6869\u4fe1\u606f.md",sourceDirName:"WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3",slug:"/ws/charge/charge_info",permalink:"/navis/ws/charge/charge_info",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/\u81ea\u4e3b\u5145\u7535\u63a5\u53e3/\u5145\u7535\u6869\u4fe1\u606f.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/ws/charge/charge_info",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u5145\u7535\u9608\u503c",permalink:"/navis/ws/charge/set_value"},next:{title:"\u5b9a\u65f6\u4efb\u52a1-\u8bbe\u5907\u76f8\u5173\u63a5\u53e3",permalink:"/navis/ws/cron"}},d={},h=[{value:"\u5145\u7535\u6869\u4fe1\u606f",id:"\u5145\u7535\u6869\u4fe1\u606f",level:4}];function o(e){const t={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u5145\u7535\u6869\u4fe1\u606f",children:"\u5145\u7535\u6869\u4fe1\u606f"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u6ce8\u610f"})," \u53ea\u6709\u662f\u65e0\u7ebf\u5145\u7535\u6869\uff0c\u5e76\u4e14\u673a\u5668\u4eba\u5904\u4e8e\u81ea\u52a8\u56de\u5145\u72b6\u6001\u65f6\u6709\u6548\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "op":"subscribe",\r\n    "topic": "/charge_hz/charge_info",\r\n    "type": "charge_msgs/ChargeInfo"\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e94\u7b54\u6570\u636e"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n\r\n    "topic": "/charge_hz/charge_info",\r\n    "msg": {\r\n        "header": {\r\n            "stamp": {\r\n                "secs": 1696919345,\r\n                "nsecs": 36261310\r\n            },\r\n            "frame_id": "",\r\n            "seq": 93521\r\n        },\r\n        "fault_code": 0,\r\n        "work_status": 3,\r\n        "charge_current": 10.89,\r\n        "charge_voltage": 54.9\r\n    },\r\n    "op": "publish"\r\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d \xa0 \xa0 \xa0 \xa0  \xa0"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0\u7c7b\u578b \xa0 \xa0 \xa0 \xa0"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \xa0\u63cf\u8ff0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"op \xa0 \xa0 \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0string \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'\xa0 \u56de\u590d"subscribe " \xa0\u56fa\u5b9a\u503cpublish'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"topic \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0string \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 \u56de\u590d\u5bf9\u5e94\u7684topic \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"header \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object \xa0 \xa0"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0\u65f6\u95f4\u6233 \xa0\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/navis/ws/protocol/note",children:"\u65f6\u95f4\u6233"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"work_status \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0int\xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u5145\u7535\u6869\u5de5\u4f5c\u72b6\u6001 0:\u5f85\u673a 1:\u542f\u52a8\u4e2d 2:\u6052\u6d41\u8f93\u51fa\xa03:\u6052\u538b\u8f93\u51fa"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"fault_code \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0int\xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u5145\u7535\u6869\u505c\u6b62\u7801 \xa0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"charge_current \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0float \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 \u5145\u7535\u6869\u7535\u6d41\uff08A\uff09\xa0 \xa0 \xa0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"charge_voltage \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"float \xa0 \xa0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 \u5145\u7535\u6869\u7535\u538b\uff08V\uff09 \xa0 \xa0 \xa0"})]})]})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);