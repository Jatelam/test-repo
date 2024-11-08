"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3253],{6413:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(4848),l=s(8453);const r={slug:"/ws/robot/sensor_status",sidebar_position:7},i=void 0,d={id:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",title:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",description:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",source:"@site/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001.md",sourceDirName:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f",slug:"/ws/robot/sensor_status",permalink:"/docs/ws/robot/sensor_status",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/Jatelam.github.io/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/ws/robot/sensor_status",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u673a\u5668\u4eba\u7d2f\u8ba1\u5de5\u4f5c\u65f6\u957f\u4fe1\u606f",permalink:"/docs/ws/robot/system_time_data"},next:{title:"imu\u4fe1\u606f",permalink:"/docs/ws/robot/imu_data"}},c={},o=[{value:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",id:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",level:4}];function a(t){const e={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h4,{id:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001",children:"\u8bbe\u5907\u4f20\u611f\u5668\u72b6\u6001"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),"\r\n\u673a\u5668\u4eba\u4e0a\u642d\u8f7d\u7684\u4f20\u611f\u5668\u542f\u52a8\u72b6\u6001\uff0c\u7528\u4e8e\u67e5\u770b\u5904\u4e8e\u5f00\u542f\u6216\u8005\u672a\u5f00\u542f\u72b6\u6001\u3002\u5e94\u7b54\u9891\u73873hz\uff08\u6bcf\u79d23\u6b21\uff09"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'{\r\n    \r\n    "op":"subscribe",\r\n    "topic": "/sensor_status",\r\n    "type": "tools_msgs/SensorStatus"\r\n}\n'})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'{\r\n    "topic": "/sensor_status",\r\n    "msg": {\r\n        "imu_status": "ON",\r\n        "lidar_status": "ON",\r\n        "RTK_status": "OFF",\r\n        "camera_status": "OFF"\r\n    },\r\n    "op": "publish"\r\n}\n'})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b \xa0 \xa0"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:'\u56de\u590d"subscribe "  \u56fa\u5b9a\u503cpublish'})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"topic"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"\u56de\u590d\u5bf9\u5e94\u7684topic"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"lidar_status"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"\u96f7\u8fbe\u4f20\u611f\u5668\u662f\u5426\u5f00\u542f: ON/OFF-\u5f00\u542f/\u5173\u95ed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"imu_status"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"imu\u4f20\u611f\u5668\u662f\u5426\u5f00\u542f: ON/OFF-\u5f00\u542f/\u5173\u95ed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"camera_status"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"realsense\u76f8\u673a\u662f\u5426\u5f00\u542f: ON/OFF-\u5f00\u542f/\u5173\u95ed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"RTK_status"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"RTK\u4f20\u611f\u5668\u662f\u5426\u5f00\u542f: ON/OFF-\u5f00\u542f/\u5173\u95ed"})]})]})]}),"\n"]}),"\n"]})]})}function x(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(a,{...t})}):a(t)}},8453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>d});var n=s(6540);const l={},r=n.createContext(l);function i(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);