"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4792],{4980:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var n=s(4848),l=s(8453);const r={slug:"/ws/robot/depth_image",sidebar_position:14},i=void 0,d={id:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",title:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",description:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",source:"@site/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u76f8\u673adepth\u56fe\u50cf\u6570\u636e.md",sourceDirName:"WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f",slug:"/ws/robot/depth_image",permalink:"/docs/ws/robot/depth_image",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/Jatelam.github.io/docs/WEBSOCKET-API/\u673a\u5668\u4eba\u72b6\u6001\u4fe1\u606f/\u76f8\u673adepth\u56fe\u50cf\u6570\u636e.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{slug:"/ws/robot/depth_image",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"\u76f8\u673aRGB\u56fe\u50cf\u6570\u636e",permalink:"/docs/ws/robot/color_image"},next:{title:"\u76f8\u673a\u5176\u4ed6\u8bdd\u9898\u6570\u636e",permalink:"/docs/ws/robot/image_other"}},c={},h=[{value:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",id:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",level:4}];function x(e){const t={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e",children:"\u76f8\u673adepth\u56fe\u50cf\u6570\u636e"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u6ce8\u610f\u4e8b\u9879:"}),"\r\n\u524d\u63d0\u6761\u4ef6\uff1a\u9700\u8981\u914d\u5907\u5bfc\u822a\u5957\u4ef6\u4e2d\u7684realsense\u76f8\u673a\u4f20\u611f\u5668\u4e00\u8d77\u4f7f\u7528"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"}),'\r\n\u83b7\u53d6\u673a\u5668\u4eba\u4e0a\u642d\u8f7d\u7684realsense\u76f8\u673a\u7684depth\u56fe\u50cf\u70b9\u4e91\u6570\u636e,\u5982\u679ctopic\u5b57\u6bb5\u4e2d\u7684"/camera/" \u65e0\u6548\uff0c\u9700\u8981\u4fee\u6539\u6210/camera_01']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{   \r\n    "op": "subscribe",\r\n    "topic": "/camera/depth/image_rect_raw/compressed",\r\n    "type":"sensor_msgs/CompressedImage",\r\n    "compression": "cbor"\r\n}\n'})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u53c2\u6570\u540d \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u7c7b\u578b \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u63cf\u8ff0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u662f\u5426\u5fc5\u9009 \xa0 \xa0\xa0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"op \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'\xa0\u64cd\u4f5c\u7c7b\u578b"subscribe":\u8ba2\u9605 \xa0 \xa0\xa0 \xa0'}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 \u662f \xa0 \xa0 \xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"topic \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u8bdd\u9898\u540d\u79f0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 \u662f \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"type \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u8bdd\u9898\u5bf9\u5e94\u7684\u7c7b\u578b \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u5426 \xa0 (\u4ec5\u5728\u4f7f\u7528ROS js\u6807\u51c6\u5e93-roslib.js\u505a\u4e8c\u6b21\u5f00\u53d1\u65f6\u4f7f\u7528\u5fc5\u586b) \xa0 \xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"compression \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u975e\u5fc5\u586b,\u5982\u679c\u5e26\u6709\u8fd9\u6761\u5b57\u6bb5,\u53d1\u9001\u7aef\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u8f6c\u6210bytes\u4f20\u8f93\uff0c\u5982\u679c\u6ca1\u6709\u586b\u5199\uff0c\u5219\u662f\u9ed8\u8ba4\u7684float\u6570\u7ec4\u6570\u636e \xa0\xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426 \xa0 \xa0\xa0 \xa0"})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u5e94\u7b54\u6570\u636e:"}),"\r\n\u6839\u636e\u8bf7\u6c42\u6570\u636e\u662f\u5426\u643a\u5e26",(0,n.jsx)(t.code,{children:'"compression": "cbor"'}),",\u4f5c\u4e3a\u533a\u5206\u65b9\u5f0f\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u5e26\u6709\u4e0a\u8ff0\u5b57\u6bb5\u7684\u5e94\u7b54\u5f62\u5f0f\u4e3a16\u8fdb\u5236\u7684bytes,\u8981\u60f3\u5f97\u5230\u771f\u6b63\u7684\u6570\u636e\uff0c\u5fc5\u987b\u7ecf\u8fc7\u8f6c\u7801\uff0c\u5c06bytes \u8f6c\u6362\u6210 uint8 array"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u6ca1\u6709\u4e0a\u8ff0\u5b57\u6bb5\u7684\u5e94\u7b54\u5f62\u5f0f\u4e3ajson + base64\u7684\u5f62\u5f0f\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u8981\u60f3\u5f97\u5230\u771f\u6b63\u7684\u6570\u636e\uff0c\u5fc5\u987b\u7ecf\u8fc7base64\u89e3\u7801\u5f97\u5230bytes,\u518d\u5c06\u5176\u8f6c\u6362\u6210uint8 array"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u5177\u4f53\u8f6c\u7801\u6848\u4f8b\u8bf7\u53c2\u8003  ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/document/api/example",children:"\u4f7f\u7528\u6848\u4f8b"})})," \u4e2d\u7684",(0,n.jsx)(t.strong,{children:"\u8ba2\u9605\u76f8\u673a\u6570\u636e"}),"\u90e8\u5206\u4ee3\u7801"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n    "topic": "/camera/depth/image_rect_raw/compressed",\r\n    "msg": {\r\n        "header": {\r\n            "stamp": {\r\n                "secs": 1678270240,\r\n                "nsecs": 532729626\r\n            },\r\n            "frame_id": "camera_depth_optical_frame",\r\n            "seq": 71951\r\n        },\r\n        "data": "",\r\n        "format": "16UC1; jpeg compressed "\r\n    },\r\n    "op": "publish"\r\n}\n'})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d \xa0"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u7c7b\u578b \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\xa0 \u63cf\u8ff0 \xa0  \xa0 \xa0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"op \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'\xa0\u56de\u590d\u64cd\u4f5c\u7c7b\u578b"subscribe",\u56fa\u5b9a\u662f"publish"\xa0\xa0 \xa0 \xa0'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"topic \xa0 \xa0               \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0 string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0\u8bdd\u9898\u540d\u79f0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"header \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"object \xa0 \xa0 \xa0 \xa0"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u65f6\u95f4\u6233 \xa0 \xa0\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/ws/protocol/note",children:"\u65f6\u95f4\u6233"})})," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"format \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0string \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u56fe\u50cf\u7684\u7f16\u7801\u683c\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"data \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"array/string \xa0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'1.\u8bf7\u6c42\u65f6\u672a\u4f7f\u7528"compression"\u5b57\u6bb5 \uff0c\u90a3\u4e48\u5f97\u5230\u7684\u6570\u636e\u662f\u5b58\u50a8\u56fe\u50cf\u6570\u636e\u7684\u6570\u7ec42.\u8bf7\u6c42\u65f6\u4f7f\u7528\u5fc5\u586b"compression"\u5b57\u6bb5\u5f97\u5230base64\u6570\u636e,\u4f7f\u7528\u65f6\u9700\u8981\u5c06base64\u6570\u636e\u8fd8\u539f\u6210data[height*step]'})]})]})]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(6540);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);