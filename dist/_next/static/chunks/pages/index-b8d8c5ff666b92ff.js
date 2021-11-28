(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3486)}])},6308:function(e,n,t){"use strict";t.d(n,{kq:function(){return i},WV:function(){return a},Do:function(){return s},w9:function(){return r},vb:function(){return o},pM:function(){return c}});var i=function(){return new(window.AudioContext||window.mozAudioContext||window.webkitAudioContext)},a="".concat("/realtime-bpm-analyzer","/media/new_order-blue_monday.mp3"),s="npm install realtime-bpm-analyzer",r='<audio src="'.concat("/realtime-bpm-analyzer",'/media/new_order-blue_monday.mp3" id="music"></audio>'),o="// Create new instance of AudioContext\nconst audioContext = new AudioContext();\n// Set the source with the HTML Audio Node\nconst source = audioContext.createMediaElementSource(document.getElementById('music'));\n// Set the scriptProcessorNode to get PCM data in real time\nconst scriptProcessorNode = audioContext.createScriptProcessor(4096, 1, 1);\n// Connect everythings together\nscriptProcessorNode.connect(audioContext.destination);\nsource.connect(scriptProcessorNode);\nsource.connect(audioContext.destination);\n",c="import {RealTimeBPMAnalyzer} from 'realtime-bpm-analyzer';\n\nconst realTimeBPMAnalyzer = new RealTimeBPMAnalyzer({\n  scriptNode: {\n    bufferSize: 4096\n  },\n  pushTime: 2000,\n  pushCallback: (err, bpm) => {\n    console.log('bpm', bpm);\n  }\n});\n\n// Attach realTime function to audioprocess event.inputBuffer (AudioBuffer)\nscriptProcessorNode.addEventListener('audioprocess', event => {\n  realTimeBPMAnalyzer.analyze(event);\n});\n"},3486:function(e,n,t){"use strict";t.r(n);var i=t(5893),a=t(9008),s=t(1664),r=(t(7294),t(3951)),o=t(682),c=t(6308);n.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Realtime Bpm Analyzer"}),(0,i.jsx)("meta",{name:"description",content:"Example using the Realtime BPM Analyzer on an audio node."})]}),(0,i.jsxs)(o.Z,{className:"pb-3",children:[(0,i.jsx)("p",{className:"text-center",children:(0,i.jsx)("img",{src:"".concat("/realtime-bpm-analyzer","/img/allegro-project.png"),className:"img-fluid"})}),(0,i.jsx)("h2",{children:"Installation"}),(0,i.jsx)(r.default,{language:"bash",className:"bash",children:c.Do}),(0,i.jsx)("h2",{children:"Usage"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"1. An AudioNode to analyze. So something like this :"}),(0,i.jsx)(r.default,{language:"xml",className:"ms-3 xml",children:c.w9}),(0,i.jsx)("p",{children:"2. Connect the AudioNode to the AudioContext and create an AudioContext.createScriptProcessor()."}),(0,i.jsx)(r.default,{language:"js",className:"ms-3 javascript",children:c.vb}),(0,i.jsx)("p",{children:"3. Now you have just to configure the tool and attach it to the audioprocess event like this :"}),(0,i.jsx)(r.default,{language:"js",className:"ms-3 javascript",children:c.pM})]}),(0,i.jsx)("h2",{className:"mt-3",children:"Examples"}),(0,i.jsxs)("div",{children:["Please check the examples in this website and the ",(0,i.jsx)(s.default,{href:"/how-it-works",children:(0,i.jsx)("a",{children:"How it works"})})," page.",(0,i.jsx)("br",{}),"You can as well check ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/tree/main/src/views/routes",children:"the code base"})," of the github pages to see how to use the library for those specific cases."]}),(0,i.jsx)("h2",{className:"mt-3",children:"Contribution, Community & Support"}),(0,i.jsxs)("p",{children:["Please ensure to aknowledge the ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/tree/main/contributing.md",children:"contribution guide lines"})," and ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/tree/main/code-of-conduct.md",children:"code of conduct"}),"."]}),(0,i.jsxs)("p",{children:["Once you've read the document mentioned above, don't hesitate to ",(0,i.jsx)("a",{href:"https://gitter.im/realtime-bpm-analyzer/Lobby",children:"chat with the community"})," or ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/issues",children:"submit an issue"}),"."]}),(0,i.jsx)("h2",{className:"mt-3",children:"Changelog"}),(0,i.jsxs)("p",{children:["See the ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/tree/main/changelog.md",children:"changelog"}),"."]}),(0,i.jsx)("h2",{className:"mt-3",children:"Licence"}),(0,i.jsxs)("p",{children:["This project is under ",(0,i.jsx)("a",{href:"https://github.com/dlepaux/realtime-bpm-analyzer/tree/main/licence.md",children:"MIT licence"}),"."]}),(0,i.jsx)("h2",{className:"mt-3",children:"Credits"}),(0,i.jsxs)("p",{children:["This library was been inspired from ",(0,i.jsx)("a",{href:"https://github.com/tornqvist/bpm-detective",children:"Tornqvist"})," project which also based on ",(0,i.jsx)("a",{href:"http://joesul.li/van/beat-detection-using-web-audio/",children:"Joe Sullivan's algorithm"}),". Thank you to both of them."]}),(0,i.jsx)("h2",{className:"mt-3",children:"Final"}),(0,i.jsxs)("p",{children:["If this helped you in any way, you can always leave me a tip here :)",(0,i.jsx)("br",{}),"BTC ",(0,i.jsx)("strong",{children:"36eHnxCRUDfWNFEx3YebRGw12WeutjkBBt"}),(0,i.jsx)("br",{}),"ETH ",(0,i.jsx)("strong",{children:"0x0F8b4F026624150e9F6267bFD93C372eb98e3010"})]})]})]})}}},function(e){e.O(0,[616,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);