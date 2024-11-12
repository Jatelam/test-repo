"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5040],{264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(4848),t=s(8453);const i={slug:"/ws/protocol/note",sidebar_position:6},o=void 0,c={id:"WEBSOCKET-API/websocket\u534f\u8bae\u57fa\u7840/\u6ce8\u610f\u4e8b\u9879",title:"\u6ce8\u610f\u4e8b\u9879",description:"websocket\u8bf7\u6c42",source:"@site/docs/navis/WEBSOCKET-API/websocket\u534f\u8bae\u57fa\u7840/\u6ce8\u610f\u4e8b\u9879.md",sourceDirName:"WEBSOCKET-API/websocket\u534f\u8bae\u57fa\u7840",slug:"/ws/protocol/note",permalink:"/navis/ws/protocol/note",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/tree/dev/docs/navis/WEBSOCKET-API/websocket\u534f\u8bae\u57fa\u7840/\u6ce8\u610f\u4e8b\u9879.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/ws/protocol/note",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528\u6848\u4f8b",permalink:"/navis/ws/protocol/example"},next:{title:"\u673a\u5668\u4eba\u72b6\u6001",permalink:"/navis/ws/robot"}},l={},d=[{value:"websocket\u8bf7\u6c42",id:"websocket\u8bf7\u6c42",level:3}];function a(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"websocket\u8bf7\u6c42",children:"websocket\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u7528\u4e8e\u83b7\u53d6\u7ecf\u5e38\u66f4\u65b0\u7684\u6570\u636e\uff0c\u5982\u5e95\u76d8\u6570\u636e\uff0c\u6fc0\u5149\u96f7\u8fbe\u6570\u636e\u7b49\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"'ping', 'subscribe','unsubscribe', 'call_service'\u56db\u79cd\u8bf7\u6c42\u65b9\u5f0f\uff0c\u6bcf\u4e2a\u63a5\u53e3\u90fd\u4f1a\u8fdb\u884c\u6807\u6ce8\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ping"}),"\u8bf7\u6c42\u662f\u5fc3\u8df3\u68c0\u6d4b\u63a5\u53e3\uff0c\u4fdd\u6301\u8fde\u63a5\u65f6\u9700\u8981\u4e00\u76f4\u53d1\u9001\u6570\u636e\uff0c\u8d85\u8fc7",(0,r.jsx)(n.em,{children:"3"}),"\u79d2\u6ca1\u6709\u53d1\u9001\u8be5\u6570\u636e\uff0c\u5219\u89c6\u4e3a\u8fde\u63a5\u65ad\u5f00"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['\u5982\u679c\u662f\u524d\u7aef\u5f00\u53d1\uff0c\u4f7f\u7528\u5230 ROS js\u6807\u51c6\u5e93roslib.js,\u9700\u8981\u643a\u5e26\u63a5\u53e3\u5bf9\u5e94\u7684\u6570\u636e\u7c7b\u578b,\u5982\u4e0b\u4f8b\u5b50\u4e2d\u7684"type"\u5b57\u6bb5\uff0c\u5982\u679c\u672a\u4f7f\u7528\u5230roslib.js\uff0c\u53ef\u4ee5',(0,r.jsx)(n.strong,{children:"\u4e0d\u7528"}),'\u643a\u5e26"type"\u5b57\u6bb5']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u540d\u8bcd\u89e3\u91ca"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56db\u5143\u6570:\u8868\u793a(x,y,z)\u67d0\u4e00\u8f74\u7684\u89d2\u5ea6\u503c,\u672c\u6587\u6863\u4e3b\u8981\u63cf\u8ff0\u7684\u662fz\u8f74\u7684\u89d2\u5ea6\u503c\u8f6c\u6210\u4ee5\u4e0b\u7684\u6570\u636e\u5f62\u5f0f:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n    "orientation": {\r\n        "x": 0,\r\n        "y": 0,\r\n        "z": 0,\r\n        "w": 1\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65f6\u95f4\u6233:\u7528\u4e8e\u8868\u793a\u6570\u636e\u7684\u53d1\u9001\u65f6\u95f4\u3002\u6570\u636e\u5305\u542b\u65f6\u95f4\u4ee5\u53ca\u53d1\u9001\u76ee\u6807\u7684",(0,r.jsx)(n.code,{children:"frame_id"}),"\uff0c\u5176\u4e2d",(0,r.jsx)(n.code,{children:"stamp"}),"\u662f\u65f6\u95f4\u6570\u636e,\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u65f6\uff0c\u53ef\u586b0,",(0,r.jsx)(n.code,{children:"frame_id"}),"\u662f\u5750\u6807\u7cfb\uff0c\u6570\u636e\u5f62\u5f0f\u5982\u4e0b\uff0c"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:' {\r\n     "header": {\r\n         "seq": 0,\r\n         "stamp": {\r\n             "secs": "",\r\n             "nsecs": ""\r\n         },\r\n         "frame_id": "map"\r\n     }\r\n }\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);