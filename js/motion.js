// build time:Wed Sep 11 2019 16:30:01 GMT+0800 (中国标准时间)
NexT.motion={};NexT.motion.integrator={queue:[],cursor:-1,init:function(){this.queue=[];this.cursor=-1;return this},add:function(t){this.queue.push(t);return this},next:function(){this.cursor++;var t=this.queue[this.cursor];typeof t==="function"&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(t){var o=[];var e=document.querySelector(".brand");var i=document.querySelector(".custom-logo-image");var n=document.querySelector(".site-title");var r=document.querySelector(".site-subtitle");var s=document.querySelector(".logo-line-before i");var u=document.querySelector(".logo-line-after i");e&&o.push({e:e,p:{opacity:1},o:{duration:200}});function a(t,o){return{e:t,p:{translateX:o},o:{duration:500,sequenceQueue:false}}}function l(){o.push({e:i,p:{opacity:1,top:0},o:{duration:200}})}NexT.utils.isMist()&&s&&u&&o.push(a(s,"100%"),a(u,"-100%"));NexT.utils.isMuse()&&i&&l();n&&o.push({e:n,p:{opacity:1,top:0},o:{duration:200}});r&&o.push({e:r,p:{opacity:1,top:0},o:{duration:200}});(NexT.utils.isPisces()||NexT.utils.isGemini())&&i&&l();if(o.length>0){o[o.length-1].o.complete=function(){t.next()};Velocity.RunSequence(o)}else{t.next()}if(CONFIG.motion.async){t.next()}},menu:function(t){Velocity(document.querySelectorAll(".menu-item"),"transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}});if(CONFIG.motion.async){t.next()}},postList:function(t){var o=document.querySelectorAll(".post-block, .pagination, .comments");var e=CONFIG.motion.transition.post_block;var i=document.querySelectorAll(".post-header");var n=CONFIG.motion.transition.post_header;var r=document.querySelectorAll(".post-body");var s=CONFIG.motion.transition.post_body;var u=document.querySelectorAll(".collection-header");var a=CONFIG.motion.transition.coll_header;var l=o.length>0;if(l){var c=window.postMotionOptions||{stagger:100,drag:true,complete:function(){t.next()}};if(CONFIG.motion.transition.post_block){Velocity(o,"transition."+e,c)}if(CONFIG.motion.transition.post_header){Velocity(i,"transition."+n,c)}if(CONFIG.motion.transition.post_body){Velocity(r,"transition."+s,c)}if(CONFIG.motion.transition.coll_header){Velocity(u,"transition."+a,c)}}if(NexT.utils.isPisces()||NexT.utils.isGemini()){t.next()}},sidebar:function(t){NexT.utils.updateSidebarPosition();var o=document.querySelector(".sidebar-inner");var e=CONFIG.motion.transition.sidebar;if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){Velocity(o,"transition."+e,{display:null,duration:200,complete:function(){o.style.transform="initial"}})}t.next()}};
//rebuild by neat 