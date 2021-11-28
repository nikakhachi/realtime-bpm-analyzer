(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{6308:function(e,t,n){"use strict";n.d(t,{kq:function(){return o},WV:function(){return i},Do:function(){return s},w9:function(){return r},vb:function(){return a},pM:function(){return u}});var o=function(){return new(window.AudioContext||window.mozAudioContext||window.webkitAudioContext)},i="".concat("/realtime-bpm-analyzer","/media/new_order-blue_monday.mp3"),s="npm install realtime-bpm-analyzer",r='<audio src="'.concat("/realtime-bpm-analyzer",'/media/new_order-blue_monday.mp3" id="music"></audio>'),a="// Create new instance of AudioContext\nconst audioContext = new AudioContext();\n// Set the source with the HTML Audio Node\nconst source = audioContext.createMediaElementSource(document.getElementById('music'));\n// Set the scriptProcessorNode to get PCM data in real time\nconst scriptProcessorNode = audioContext.createScriptProcessor(4096, 1, 1);\n// Connect everythings together\nscriptProcessorNode.connect(audioContext.destination);\nsource.connect(scriptProcessorNode);\nsource.connect(audioContext.destination);\n",u="import {RealTimeBPMAnalyzer} from 'realtime-bpm-analyzer';\n\nconst realTimeBPMAnalyzer = new RealTimeBPMAnalyzer({\n  scriptNode: {\n    bufferSize: 4096\n  },\n  pushTime: 2000,\n  pushCallback: (err, bpm) => {\n    console.log('bpm', bpm);\n  }\n});\n\n// Attach realTime function to audioprocess event.inputBuffer (AudioBuffer)\nscriptProcessorNode.addEventListener('audioprocess', event => {\n  realTimeBPMAnalyzer.analyze(event);\n});\n"},75:function(e,t,n){var o=n(4155);(function(){var t,n,i,s,r,a;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof o&&null!==o&&o.hrtime?(e.exports=function(){return(t()-r)/1e6},n=o.hrtime,s=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*o.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},4087:function(e,t,n){for(var o=n(75),i="undefined"===typeof window?n.g:window,s=["moz","webkit"],r="AnimationFrame",a=i["request"+r],u=i["cancel"+r]||i["cancelRequest"+r],l=0;!a&&l<s.length;l++)a=i[s[l]+"Request"+r],u=i[s[l]+"Cancel"+r]||i[s[l]+"CancelRequest"+r];if(!a||!u){var c=0,d=0,h=[];a=function(e){if(0===h.length){var t=o(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=h.slice(0);h.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return h.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return a.call(i,e)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=a,e.cancelAnimationFrame=u}},6616:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var o=new class{loopOnThresolds(e,t,n){let o=.95;"function"!==typeof t&&"boolean"!==typeof t||(n=t||n,t=.3),"undefined"===typeof t&&(t=.3),"function"!==typeof n&&(n=this.noop);const i=t,s={};do{let t=!1;if(o-=.05,e(s,o,(e=>{t=e})),t)break}while(o>i);return n(s)}generateObjectModel(e,t){return this.loopOnThresolds(((t,n)=>{t[n.toString()]=JSON.parse(JSON.stringify(e))}),(e=>t?t(JSON.parse(JSON.stringify(e))):e))}noop(){}};const i=new class{getLowPassSource(e,t){const{numberOfChannels:n,length:o,sampleRate:i}=e,s=new t(n,o,i),r=s.createBufferSource();r.buffer=e;const a=s.createBiquadFilter();return a.type="lowpass",r.connect(a),a.connect(s.destination),r}findPeaksAtThresold(e,t,n){let o=[];const{length:i}=e;for(let s=n;s<i;s+=1)e[s]>t&&(o.push(s),s+=1e4);return 0===o.length&&(o=void 0),{peaks:o,thresold:t}}computeBPM(e,t,n){let i=!1;o.loopOnThresolds(((o,s,r)=>i?r(!0):e[s].length>15?(i=!0,n(null,[this.identifyIntervals,this.groupByTempo(t),this.getTopCandidates].reduce(((e,t)=>t(e)),e[s]),s)):void 0),(()=>(i||n(new Error("Could not find enough samples for a reliable detection.")),!1)))}getTopCandidates(e){return e.sort(((e,t)=>t.count-e.count)).splice(0,5)}identifyIntervals(e){const t=[];for(const[n,o]of e.entries())for(let i=0;i<10;i+=1){const s=e[n+i]-o;t.some((e=>e.interval===s&&(e.count+=1,e.count)))||t.push({interval:s,count:1})}return t}groupByTempo(e){return t=>{const n=[];for(const o of t)if(0!==o.interval){o.interval=Math.abs(o.interval);let t=60/(o.interval/e);for(;t<90;)t*=2;for(;t>180;)t/=2;t=Math.round(t);n.some((e=>e.tempo===t&&(e.count+=o.count,e.count)))||n.push({tempo:t,count:o.count})}return n}}};class s{constructor(e={}){this.options={debug:!1,scriptNode:{bufferSize:4096},continuousAnalysis:!1,stabilizedBpmCount:2e3,computeBPMDelay:1e4,stabilizationTime:2e4,pushTime:2e3,pushCallback:(e,t)=>{if(e)throw new Error(e)},onBpmStabilized:e=>{this.clearValidPeaks(e)},OfflineAudioContext:"object"===typeof window&&(window.OfflineAudioContext||window.webkitOfflineAudioContext)},this.logger=(...e)=>{this.options.debug&&console.log(...e)},Object.assign(this.options,e),this.minValidThresold=.3,this.cumulatedPushTime=0,this.timeoutPushTime=null,this.timeoutStabilization=null,this.validPeaks=o.generateObjectModel([]),this.nextIndexPeaks=o.generateObjectModel(0),this.chunkCoeff=1}reset(){this.minValidThresold=.3,this.cumulatedPushTime=0,this.timeoutPushTime=null,this.timeoutStabilization=null,this.validPeaks=o.generateObjectModel([]),this.nextIndexPeaks=o.generateObjectModel(0),this.chunkCoeff=1}clearValidPeaks(e){this.logger(`[clearValidPeaks] function: under ${e}`),this.minValidThresold=e.toFixed(2),o.loopOnThresolds(((t,n)=>{n<e&&(delete this.validPeaks[n],delete this.nextIndexPeaks[n])}))}analyze(e){const t=this.options.scriptNode.bufferSize*this.chunkCoeff,n=t-this.options.scriptNode.bufferSize,s=i.getLowPassSource(e.inputBuffer,this.options.OfflineAudioContext);s.start(0),o.loopOnThresolds(((e,o)=>{if(this.nextIndexPeaks[o]>=t)return;const r=this.nextIndexPeaks[o]%this.options.scriptNode.bufferSize,{peaks:a,thresold:u}=i.findPeaksAtThresold(s.buffer.getChannelData(0),o,r);if("undefined"!==typeof a)for(const t of Object.keys(a)){const e=a[t];"undefined"!==typeof e&&(this.nextIndexPeaks[u]=n+e+1e4,this.validPeaks[u].push(n+e))}}),this.minValidThresold,(()=>{this.chunkCoeff++,null===this.timeoutPushTime&&(this.timeoutPushTime=setTimeout((()=>{this.cumulatedPushTime+=this.options.pushTime,this.timeoutPushTime=null,i.computeBPM(this.validPeaks,e.inputBuffer.sampleRate,((e,t,n)=>{this.options.pushCallback(e,t,n),!e&&t&&t[0].count>=this.options.stabilizedBpmCount&&(this.logger("[freezePushBack]"),this.timeoutPushTime="never",this.minValidThresold=1),this.cumulatedPushTime>=this.options.computeBPMDelay&&this.minValidThresold<n&&(this.logger("[onBpmStabilized] function: Fired !"),this.options.onBpmStabilized(n),this.options.continuousAnalysis&&(clearTimeout(this.timeoutStabilization),this.timeoutStabilization=setTimeout((()=>{this.logger("[timeoutStabilization] setTimeout: Fired !"),this.options.computeBPMDelay=0,this.reset()}),this.options.stabilizationTime)))}))}),this.options.pushTime))}))}}"undefined"!==typeof window&&(window.RealTimeBPMAnalyzer=s)}}]);