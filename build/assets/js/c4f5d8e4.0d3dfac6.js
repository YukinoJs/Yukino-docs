"use strict";(self.webpackChunkmy_docs_site=self.webpackChunkmy_docs_site||[]).push([[634],{3621:(e,i,n)=>{n.r(i),n.d(i,{default:()=>w});var t=n(6540),s=n(4164),a=n(6289),o=n(797),c=n(1833);const r="features_xdhU",l="featuresTitle_tCJN",d="visible_ELv8",u="featureGrid_hzyI",h="featureItem_inZH",m="featureCard_POg3",p="featureIcon_FnSt";var x=n(4848),j=[{title:"Simple Yet Powerful",description:(0,x.jsx)(x.Fragment,{children:"Yukino provides an intuitive API while giving you full access to Lavalink's powerful features. Start playing music in just a few lines of code."}),icon:"\u26a1"},{title:"Advanced Audio Filters",description:(0,x.jsx)(x.Fragment,{children:"Apply and combine audio filters in real-time. From equalizers to karaoke effects, Yukino supports all of Lavalink's audio manipulation features."}),icon:"\ud83c\udf9a\ufe0f"},{title:"Robust Queue Management",description:(0,x.jsx)(x.Fragment,{children:"Built-in queue system with support for track looping, queue looping, shuffling, and more. Handle playlists and track collections with ease."}),icon:"\ud83d\udcca"},{title:"Voice State Handling",description:(0,x.jsx)(x.Fragment,{children:"Automatic voice connection management with built-in reconnection logic and voice state synchronization. Focus on your bot's features, not connection handling."}),icon:"\ud83d\udd04"},{title:"Type-Safe by Design",description:(0,x.jsx)(x.Fragment,{children:"Written in TypeScript with comprehensive type definitions. Get excellent IDE support and catch errors before they happen."}),icon:"\ud83d\udee1\ufe0f"},{title:"Discord.js Integration",description:(0,x.jsx)(x.Fragment,{children:"Seamlessly integrates with Discord.js v14. No need to handle voice updates or server configuration manually."}),icon:"\ud83c\udfaf"}],f=t.memo((function(e){var i=e.title,n=e.description,a=e.icon,o=e.index,c=(0,t.useState)(!1),r=c[0],l=c[1];return(0,t.useEffect)((function(){var e=setTimeout((function(){l(!0)}),100+100*o);return function(){return clearTimeout(e)}}),[o]),(0,x.jsx)("div",{className:(0,s.A)("col col--4",h,r&&d),children:(0,x.jsxs)("div",{className:(0,s.A)("card",m),children:[(0,x.jsxs)("div",{className:"card__header",children:[(0,x.jsx)("div",{className:p,children:a}),(0,x.jsx)("h3",{children:i})]}),(0,x.jsx)("div",{className:"card__body",children:(0,x.jsx)("p",{children:n})})]})})}));function g(){var e=(0,t.useState)(!1),i=e[0],n=e[1],a=t.useRef(null);return(0,t.useEffect)((function(){var e=new IntersectionObserver((function(i){i[0].isIntersecting&&(n(!0),e.disconnect())}),{rootMargin:"0px 0px -100px 0px",threshold:.1});return a.current&&e.observe(a.current),function(){e.disconnect()}}),[]),(0,x.jsx)("section",{className:r,ref:a,children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("h2",{className:(0,s.A)(l,i&&d),children:"Features"}),(0,x.jsx)("div",{className:"row",children:i&&j.map((function(e,i){return(0,x.jsx)(f,Object.assign({index:i},e),i)}))})]})})})}const v=t.memo(g),N={heroBanner:"heroBanner_qdFl",heroContent:"heroContent_mKPX",heroButtons:"heroButtons_r52D",delay1:"delay1_xDeu",delay2:"delay2_drD9",delay3:"delay3_kcc3",visible:"visible_pZsL",heroImageContainer:"heroImageContainer_VqmZ",heroImageWrapper:"heroImageWrapper_Vsqa",heroImage:"heroImage_xZN7",float:"float_x2Lw",heroGlow:"heroGlow_CLW8",pulse:"pulse_vKli",gradientText:"gradientText_nNG0",slideUp:"slideUp_tBcC",slideUpAnimation:"slideUpAnimation_UppE",fadeIn:"fadeIn_sitH",fadeInAnimation:"fadeInAnimation_fH58",main:"main_iUjq",section:"section_Q9Zo",sectionTitle:"sectionTitle_Ut5p",highlight:"highlight_NNsi",sectionDescription:"sectionDescription_cpL1",featureList:"featureList_i_0T",codeWrapper:"codeWrapper_C0R6",codeHeader:"codeHeader_tNVi",codeDots:"codeDots_qozO",codeTitle:"codeTitle_VjYR",codeBlockContainer:"codeBlockContainer_N92A",codeActions:"codeActions_cr5W",sectionContent:"sectionContent_EIHq",ctaSection:"ctaSection_bmsv",ctaTitle:"ctaTitle_arch",ctaDescription:"ctaDescription_HswS",ctaButtons:"ctaButtons_vsp7"};var y=n(1433),_=n(9030);function b(){var e=(0,o.A)().siteConfig,i=(0,t.useState)(!1),n=i[0],c=i[1];return(0,t.useEffect)((function(){var e=setTimeout((function(){c(!0)}),100);return function(){return clearTimeout(e)}}),[]),(0,x.jsx)("header",{className:(0,s.A)("hero",N.heroBanner),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:(0,s.A)("col col--7",N.heroContent),children:[(0,x.jsxs)("h1",{className:(0,s.A)("hero__title",n&&N.visible),children:[e.title,(0,x.jsx)("span",{className:N.gradientText,children:"."})]}),(0,x.jsx)("p",{className:(0,s.A)("hero__subtitle",n&&N.visible,N.delay1),children:e.tagline}),(0,x.jsxs)("div",{className:(0,s.A)(N.heroButtons,n&&N.visible,N.delay2),children:[(0,x.jsx)(a.A,{className:"button button--primary button--lg",to:"/docs/intro",children:"Get Started"}),(0,x.jsx)(a.A,{className:"button button--secondary button--lg",to:"/docs/installation",children:"Installation Guide"})]})]}),(0,x.jsx)("div",{className:(0,s.A)("col col--5",N.heroImageContainer,n&&N.visible,N.delay3),children:(0,x.jsxs)("div",{className:N.heroImageWrapper,children:[(0,x.jsx)("img",{src:(0,_.Ay)("/img/logo.svg"),alt:"Yukino Logo",className:N.heroImage,width:240,height:240,loading:"eager"}),(0,x.jsx)("div",{className:N.heroGlow})]})})]})})})}var k=t.memo((function(){return(0,x.jsx)("div",{className:(0,s.A)("container",N.section),children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col col--6",children:(0,x.jsxs)("div",{className:N.sectionContent,children:[(0,x.jsxs)("h2",{className:N.sectionTitle,children:["Modern ",(0,x.jsx)("span",{className:N.highlight,children:"Audio Engine"})," for Discord Bots"]}),(0,x.jsx)("p",{className:N.sectionDescription,children:"Yukino is a modern, feature-rich Lavalink client designed specifically for Discord.js. It provides a high-level API for audio playback and manipulation in Discord bots."}),(0,x.jsxs)("ul",{className:N.featureList,children:[(0,x.jsx)("li",{children:"\ud83c\udfb5 Full Lavalink v4 support"}),(0,x.jsx)("li",{children:"\ud83c\udf9a\ufe0f Comprehensive audio filter system"}),(0,x.jsx)("li",{children:"\ud83d\udcca Built-in queue management"}),(0,x.jsx)("li",{children:"\u26a1 Type-safe with full TypeScript support"})]})]})}),(0,x.jsx)("div",{className:"col col--6",children:(0,x.jsxs)("div",{className:N.codeWrapper,children:[(0,x.jsxs)("div",{className:N.codeHeader,children:[(0,x.jsxs)("div",{className:N.codeDots,children:[(0,x.jsx)("span",{}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{})]}),(0,x.jsx)("div",{className:N.codeTitle,children:"Quick Example"})]}),(0,x.jsx)("div",{className:N.codeBlockContainer,children:(0,x.jsx)(y.A,{className:"language-typescript",children:"import { Client } from 'discord.js';\nimport { YukinoClient } from 'yukino';\n\n// Create a new Yukino client\nconst yukino = new YukinoClient(client, {\n  auth: 'password',\n  debug: true\n});\n\n// Create a player and play music\nconst player = yukino.createPlayer({\n  guildId: 'guild-id',\n  voiceChannelId: 'channel-id'\n});\n\n// Search and play a track\nconst result = await yukino.loadTrack('song name');\nawait player.play({ track: result.data[0] });"})}),(0,x.jsx)("div",{className:N.codeActions,children:(0,x.jsx)(a.A,{className:"button button--primary button--sm",to:"/docs/quickstart",children:"More Examples \u2192"})})]})})]})})})),A=t.memo((function(){return(0,x.jsx)("div",{className:N.ctaSection,children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:N.ctaTitle,children:"Ready to power up your Discord bot?"}),(0,x.jsx)("p",{className:N.ctaDescription,children:"Start building amazing music experiences with Yukino today"}),(0,x.jsxs)("div",{className:N.ctaButtons,children:[(0,x.jsx)(a.A,{className:"button button--primary button--lg",to:"/docs/intro",children:"Get Started"}),(0,x.jsx)(a.A,{className:"button button--secondary button--lg",to:"https://github.com/yukino-org/yukino",children:"GitHub \u2192"})]})]})})}));function w(){var e=(0,o.A)().siteConfig,i=(0,t.useState)(!1),n=i[0],s=i[1];return(0,t.useEffect)((function(){s(!0)}),[]),(0,x.jsxs)(c.A,{title:e.title+" - "+e.tagline,description:"A powerful Lavalink client for Discord.js",children:[(0,x.jsx)(b,{}),(0,x.jsx)("main",{className:N.main,children:n&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k,{}),(0,x.jsx)(v,{}),(0,x.jsx)(A,{})]})})]})}}}]);