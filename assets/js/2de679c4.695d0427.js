"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4269],{6161:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=n(4848),s=n(8453);const i={slug:"/ws/slam/initialpose",sidebar_position:5},r=void 0,d={id:"WEBSOCKET-API/\u5efa\u56fe\u5bfc\u822a\u529f\u80fd\u76f8\u5173\u64cd\u4f5c/\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",title:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",description:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",source:"@site/docs/navis/WEBSOCKET-API/\u5efa\u56fe\u5bfc\u822a\u529f\u80fd\u76f8\u5173\u64cd\u4f5c/\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9.md",sourceDirName:"WEBSOCKET-API/\u5efa\u56fe\u5bfc\u822a\u529f\u80fd\u76f8\u5173\u64cd\u4f5c",slug:"/ws/slam/initialpose",permalink:"/navis/ws/slam/initialpose",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/\u5efa\u56fe\u5bfc\u822a\u529f\u80fd\u76f8\u5173\u64cd\u4f5c/\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/ws/slam/initialpose",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u542f\u52a8\u5bfc\u822a",permalink:"/navis/ws/slam/follow_line"},next:{title:"\u53d6\u6d88\u5f53\u524d\u5bfc\u822a\u4efb\u52a1",permalink:"/navis/ws/slam/cancel"}},x={},c=[{value:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",id:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",level:4}];function o(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h4,{id:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9",children:"\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),"\r\n\u5f00\u542f\u5bfc\u822a\u540e,\u673a\u5668\u4eba\u5b9a\u4f4d\u4e0d\u51c6\u786e\u65f6\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u521d\u59cb\u5316\u4f4d\u7f6e\u70b9\uff0c\u4f7f\u673a\u5668\u4eba\u8fdb\u884c\u81ea\u5b9a\u4f4d\u529f\u80fd\uff0c\u76f4\u5230\u5b9a\u4f4d\u51c6\u786e\u3002\r\n",(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u53ea\u6709\u5904\u4e8e\u5bfc\u822a\u72b6\u6001\u6709\u6548\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u5bfc\u822a\u8bf7\u53c2\u8003\u63a5\u53e3 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/navis/ws/robot/slam_status",children:"\u8bbe\u5907\u5f53\u524d\u72b6\u6001"})})]}),"\n",(0,l.jsxs)(e.li,{children:['\u586b\u5199"position"\u65f6\u9700\u8981\u586b\u5199\u5730\u56fe\u5750\u6807\uff0c\u5982\u4f55\u83b7\u53d6\u5730\u56fe\u5750\u6807\uff0c\u8bf7\u53c2\u8003 ',(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/navis/http/mission/png-to-map",children:"\u5750\u6807\u8f6c\u6362"})})]}),"\n",(0,l.jsx)(e.li,{children:'"orientation":\u4f4d\u7f6e\u70b9\u65b9\u5411\u56db\u5143\u6570,\u53ef\u5982\u793a\u4f8b\u6570\u636e\u586b\u5199\u3002'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\r\n    "op": "publish",\r\n    "topic": "/initialpose",\r\n    "type": "geometry_msgs/PoseWithCovarianceStamped",\r\n    "msg":{\r\n        "header": {\r\n            "stamp": {\r\n                "secs": 1681805920,\r\n                "nsecs": 64378373\r\n            },\r\n            "frame_id": "map",\r\n            "seq": 1098806\r\n        },\r\n        "pose":{\r\n            "pose": {\r\n                "position": {\r\n                    "x": 0,\r\n                    "y": 0,\r\n                    "z": 0\r\n                },\r\n                "orientation": {\r\n                    "w": 1,\r\n                    "z": 0,\r\n                    "y": 0,\r\n                    "x": 0\r\n                }\r\n            },\r\n            "covariance": [ 0,0,0,0,0,0,0,0,0,0,0,0,\r\n                    0,0,0,0,0,0,0,0,0,0,0,0,\r\n                    0,0,0,0,0,0,0,0,0,0,0,0]\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:'\u64cd\u4f5c\u7c7b\u578b,\u56fa\u5b9a\u662f"publish"'})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"topic"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u540d\u79f0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"header"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["\u65f6\u95f4\u6233     \u8be6\u60c5\u53ef\u53c2\u8003 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/navis/ws/protocol/note",children:"\u65f6\u95f4\u6233"})})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"pose"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u673a\u5668\u4eba\u4f4d\u59ff\u4fe1\u606f,\u8be6\u60c5\u53c2\u8003\u4e0b\u65b9pose\u8868"})]})]})]}),"\n",(0,l.jsx)(e.p,{children:"pose\u53c2\u6570\u8868"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u4f4d\u7f6e\u70b9\u5750\u6807\u4fe1\u606f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.x"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"x\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.y"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"y\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.z"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"z\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["\u4f4d\u7f6e\u70b9\u65b9\u5411\u56db\u5143\u6570\u4fe1\u606f,",(0,l.jsx)("div",{children:"\u4ee5\u56db\u5143\u6570\u5f62\u5f0f\u8868\u793a\u81ea\u7531\u7a7a\u95f4\u4e2d\u7684\u65b9\u5411\u3002"})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.x"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"x\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.y"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"y\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.z"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"z\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.w"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"w\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"covariance"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"array"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u534f\u65b9\u5dee"})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"}),"\r\n\u65e0\r\n",(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"})," \u4f46\u9700\u8981\u67e5\u770b\u5bfc\u822a\u5b9a\u4f4d\u72b6\u6001\u662f\u5426\u5b9a\u4f4d\u51c6\u786e\uff0c\u5b9a\u4f4d\u4e22\u5931\u9700\u8981\u91cd\u65b0\u521d\u59cb\u5316,",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/navis/ws/navigation/localization",children:"\u5b9a\u4f4d\u72b6\u6001\u63a5\u53e3"})})]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(o,{...t})}):o(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var l=n(6540);const s={},i=l.createContext(s);function r(t){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);