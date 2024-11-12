"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[411],{8659:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var s=n(4848),l=n(8453);const i={slug:"/ws/navigation/task_status",sidebar_position:2},r=void 0,d={id:"WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",title:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",description:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",source:"@site/docs/navis/WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001.md",sourceDirName:"WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001",slug:"/ws/navigation/task_status",permalink:"/navis/ws/navigation/task_status",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/ws/navigation/task_status",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u822a\u7cfb\u7edf\u72b6\u6001",permalink:"/navis/ws/navigation/global_status"},next:{title:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u8fdb\u5ea6",permalink:"/navis/ws/navigation/task_progress"}},c={},x=[{value:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",id:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",level:4}];function a(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h4,{id:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001",children:"\u5f53\u524d\u8fdb\u884c\u4e2d\u4efb\u52a1\u72b6\u6001"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u83b7\u53d6\u673a\u5668\u4eba\u5e95\u76d8\u5f53\u524d\u8fdb\u884c\u4e2d\u7684\u4efb\u52a1\u4f5c\u4e1a\u72b6\u6001"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff0c\u53ea\u6709\u5904\u4e8e\u5bfc\u822a\u72b6\u6001\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u5bfc\u822a\u8bf7\u53c2\u8003\u63a5\u53e3 ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/navis/ws/robot/slam_status",children:"\u8bbe\u5907\u5f53\u524d\u72b6\u6001"})}),",\u5e76\u4e14\u5df2\u7ecf\u53d1\u5e03\u8fc7\u5b9e\u65f6\u4efb\u52a1\u6216\u8005\u5217\u8868\u4efb\u52a1\u7684\u60c5\u51b5\u4e0b\u6709\u6548\uff0c\u5e94\u7b54\u9891\u7387\u4e0d\u56fa\u5b9a\uff0c\u4ec5\u5f53\u72b6\u6001\u66f4\u65b0\u65f6\u5e94\u7b54\u4e00\u6b21\u6570\u636e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{   \r\n    "op": "subscribe",\r\n    "topic": "/run_management/task_status",\r\n    "type":"support_ros/TaskStatus" \r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n    "topic": "/run_management/task_status",\r\n    "msg": {\r\n        "task_type": "",\r\n        "total_looptimes": 1,\r\n        "loop_index": 1,\r\n        "task_index": 1,\r\n        "countdown": 0,\r\n        "isGoalReach": false, \r\n        "task_name": "",\r\n        "total_tasks": 1\r\n    },\r\n    "op": "publish"\r\n}\n'})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:'\u56de\u590d\u64cd\u4f5c\u7c7b\u578b"subscribe",\u56fa\u5b9a\u662f"publish"'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"topic"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u540d\u79f0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"task_name"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5f53\u524d\u5bfc\u822a\u6240\u7528\u7684\u4efb\u52a1\u540d\u79f0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"task_type"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:["\u4efb\u52a1\u7c7b\u578b,",(0,s.jsx)("div",{children:"MUTIPATH-\u8def\u5f84\u5bfc\u822a\u4efb\u52a1"}),(0,s.jsx)("div",{children:"MUTIPOINT-\u591a\u70b9\u5bfc\u822a\u4efb\u52a1"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"total_looptimes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4efb\u52a1\u603b\u5faa\u73af\u6b21\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"loop_index"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5f53\u524d\u5faa\u73af\u5230\u7b2c\u51e0\u6b21\u4efb\u52a1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"task_index"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5f53\u524d\u4efb\u52a1\u6267\u884c\u5230\u7b2c\u51e0\u4e2a\u76ee\u6807"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"countdown"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5230\u8fbe\u76ee\u6807\u70b9\u4e4b\u540e\u7684\u5012\u8ba1\u65f6/\u4efb\u52a1\u5b8c\u6210\u4e4b\u540e\u7684\u5012\u8ba1\u65f6\u786e\u8ba4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"isGoalReach"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bool"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5230\u8fbe\u5f53\u524d\u76ee\u6807\u70b9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"total_tasks"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4efb\u52a1\u4e2d\u7684\u603b\u76ee\u6807\u6570"})]})]})]}),"\n"]}),"\n"]})]})}function o(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var s=n(6540);const l={},i=s.createContext(l);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);