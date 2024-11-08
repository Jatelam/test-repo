"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2972],{4117:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=n(4848),s=n(8453);const r={slug:"/ws/robot/scan",sidebar_position:11},i=void 0,d={id:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e",title:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e",description:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e",source:"@site/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e.md",sourceDirName:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f",slug:"/ws/robot/scan",permalink:"/docs/ws/robot/scan",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/Jatelam.github.io/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{slug:"/ws/robot/scan",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56683D\u70b9\u4e91\u6570\u636e",permalink:"/docs/ws/robot/points_raw"},next:{title:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u5668\u5bfc\u822a\u65f6\u4f4d\u7f6e",permalink:"/docs/ws/robot/localizer_pose"}},c={},x=[{value:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e",id:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682d\u70b9\u4e91\u6570\u636e",level:4}];function h(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h4,{id:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682d\u70b9\u4e91\u6570\u636e",children:"\u6fc0\u5149\u96f7\u8fbe\u4f20\u611f\u56682D\u70b9\u4e91\u6570\u636e"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6ce8\u610f\u4e8b\u9879:"}),"\r\n\u524d\u63d0\u6761\u4ef6\uff1a\u9700\u8981\u914d\u5907\u5bfc\u822a\u5957\u4ef6\u4e2d\u7684\u96f7\u8fbe\u4f20\u611f\u5668\u4e00\u8d77\u4f7f\u7528"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),"\r\n\u83b7\u53d6\u673a\u5668\u4eba\u4e0a\u642d\u8f7d\u7684\u6fc0\u5149\u96f7\u8fbe\u76843D\u70b9\u4e91\u6570\u636e \u5904\u7406\u540e\u76842D\u70b9\u4e91\u6570\u636e\uff0c",(0,l.jsx)(e.strong,{children:"\u53ea\u6709\u5f00\u542f\u5bfc\u822a\u540e\u6709\u6548"})," ,\u67e5\u770b\u662f\u5426\u5f00\u542f\u5bfc\u822a\u8bf7\u53c2\u8003\u63a5\u53e3 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/docs/ws/robot/slam_status",children:"\u8bbe\u5907\u5f53\u524d\u72b6\u6001"})})," ,\u5e94\u7b54\u9891\u738710hz\uff08\u6bcf\u79d210\u6b21\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\r\n    \r\n    "op":"subscribe",\r\n    "topic": "/scan",\r\n    "compression": "cbor",\r\n    "type": "sensor_msgs/LaserScan"\r\n}\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d \xa0 \xa0 \xa0"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b \xa0 \xa0"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u9009"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:'\u64cd\u4f5c\u7c7b\u578b"subscribe":\u8ba2\u9605'}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u662f \xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"topic"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u540d\u79f0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"type"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u5bf9\u5e94\u7684\u7c7b\u578b"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5426   (\u4ec5\u5728\u4f7f\u7528ROS js\u6807\u51c6\u5e93-roslib.js\u505a\u4e8c\u6b21\u5f00\u53d1\u65f6\u4f7f\u7528\u5fc5\u586b)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"compression"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u975e\u5fc5\u586b,\u5982\u679c\u5e26\u6709\u8fd9\u6761\u5b57\u6bb5,\u53d1\u9001\u7aef\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u8f6c\u6210bytes\u4f20\u8f93\uff0c\u5982\u679c\u6ca1\u6709\u586b\u5199\uff0c\u5219\u662f\u9ed8\u8ba4\u7684float\u6570\u7ec4\u6570\u636e"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5426"})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"}),"\r\n\u6839\u636e\u8bf7\u6c42\u6570\u636e\u662f\u5426\u643a\u5e26",(0,l.jsx)(e.code,{children:'"compression": "cbor"'}),",\u4f5c\u4e3a\u533a\u5206\u65b9\u5f0f\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5e26\u6709\u4e0a\u8ff0\u5b57\u6bb5\u7684\u5e94\u7b54\u5f62\u5f0f\u4e3a16\u8fdb\u5236\u7684bytes,\u8981\u60f3\u5f97\u5230\u771f\u6b63\u7684\u6570\u636e\uff0c\u5fc5\u987b\u7ecf\u8fc7\u8f6c\u7801\uff0c\u5c06bytes \u8f6c\u6362\u6210 uint8 array"}),"\n",(0,l.jsxs)(e.li,{children:["\u5177\u4f53\u8f6c\u7801\u6848\u4f8b\u8bf7\u53c2\u8003  ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/docs/document/api/example",children:"\u4f7f\u7528\u6848\u4f8b"})})," \u4e2d\u7684",(0,l.jsx)(e.strong,{children:"\u8ba2\u96052D\u70b9\u4e91\u6570\u636e"}),"\u90e8\u5206\u4ee3\u7801"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\r\n        \r\n    "topic": "/scan",\r\n    "msg": {\r\n        "angle_min": -3.1415927410125732,\r\n        "angle_max": 3.1415927410125732,\r\n        "range_min": 0.20000000298023224,\r\n        "range_max": 100.0,\r\n        "scan_time": 0.10000000149011612,\r\n        "angle_increment": 0.009999999776482582,\r\n   \r\n        "ranges": [\r\n            \r\n        ],\r\n        "header": {\r\n            "stamp": {\r\n                "secs": 1680850381,\r\n                "nsecs": 861026764\r\n            },\r\n            "frame_id": "laser_link",\r\n            "seq": 54\r\n        },\r\n        "intensities": [\r\n            \r\n        ],\r\n        "time_increment": 0.0\r\n    },\r\n    "op": "publish"\r\n\r\n}\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0 \xa0\u5b57\u6bb5\u540d \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \u7c7b\u578b \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0 \xa0 \u63cf\u8ff0 \xa0 \xa0 \xa0 \xa0  \xa0 \xa0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0op \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0string \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:'\u56de\u590d"subscribe " \u56fa\u5b9a\u503cpublish'})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0topic \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0string \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0\u56de \xa0 \xa0 \xa0 \xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0header \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0object \xa0 \xa0 \xa0"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["\xa0\u65f6\u95f4\u6233 \xa0 \u8be6\u60c5\u53ef\u53c2\u8003 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/docs/ws/protocol/note",children:"\u65f6\u95f4\u6233"})})," \xa0 \xa0 \xa0  \xa0 \xa0"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0angle_min \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0array/string \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5f00\u59cb\u626b\u63cf\u7684\u89d2\u5ea6 \xa0 \xa0 \xa0  \xa0 \xa0 \xa0 \xa0 \xa0  \xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0angle_max \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0int \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7ed3\u675f\u626b\u63cf\u7684\u89d2\u5ea6 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"range_min \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0int \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u6d4b\u8ddd\u7684\u6700\u5c0f\u503c \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0range_max \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0bool \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u6d4b\u8ddd\u7684\u6700\u5927\u503c \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0 \xa0scan_time \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0int \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u626b\u63cf\u7684\u65f6\u95f4\u95f4\u9694 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0angle_increment \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0int \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u6bcf\u6b21\u626b\u63cf\u589e\u52a0\u7684\u89d2\u5ea6 \xa0 \xa0 \xa0  \xa0 \xa0 \xa0  \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0ranges \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0array \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5b58\u653e\u70b9\u4e91\u6570\u636e\u7684\u6570\u7ec4\u6216\u8005\u8f6c\u6210base64\u6570\u636e\u7684\u5b57\u7b26\u4e32\u8ff0 \xa0 \xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0intensities \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0array \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u4e0e\u8bbe\u5907\u6709\u5173\uff0c\u5f3a\u5ea6\u6570\u7ec4\u957f\u5ea6360\xa0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0time_increment \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0float \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\xa0\u6d4b\u91cf\u7684\u65f6\u95f4\u95f4\u9694"})]})]})]}),"\n"]}),"\n"]})]})}function o(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(h,{...t})}):h(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>d});var l=n(6540);const s={},r=l.createContext(s);function i(t){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),l.createElement(r.Provider,{value:e},t.children)}}}]);