import{_ as d,o as r,c as o,a as e,t as m,b as l}from"./index-5b2b7f4d.js";const c=""+new URL("politecnico_milano-ec5ddfa2.jpg",import.meta.url).href,g=""+new URL("upsa-988ff600.jpg",import.meta.url).href,p=""+new URL("imm-019ce143.jpg",import.meta.url).href,u=""+new URL("msc_finance_eng-6898e284.jpg",import.meta.url).href,x=""+new URL("disney-ce0ef32e.jpg",import.meta.url).href,h=""+new URL("ml-6ff91ebb.png",import.meta.url).href,f=""+new URL("dl-8280ddc5.png",import.meta.url).href;const b={data(){return{currentIndex:0,ShowDiplomas:!0,diplomas:[{image:c,title:"Msc Supply Chain - Global Perspective Framework",description:`Supply Chain provided real-world context for data analysis, aiding in translating data insights into actionable strategies,          
 and bridging the analytical and operational aspects of projects. 
            This knowledge was significantly enriched with subsequent knowledge acquired in Data Science `},{image:g,title:"Bachelor Industrial Engineering - Solid thinking foundations",description:`The essence of engineering optimization, embodied in Industrial Engineering, 
 acts as the cornerstone for my professional growth and innovation.`},{image:p,title:"Msc Management - Business understanding",description:"A solid framework to thrive in the ever-evolving business landscape."},{image:u,title:"Msc Finance - Quantitative financial management",description:`Deepen my understanding of financial dynamics and strategies 
 in corporate finance, as well as in market finance.`}],certificates:[{image:h,title:"Machine Learning Specialization - Andrew Ng - Standford (RENEWED since first course in 2018)",description:`This course covers several machine learning techniques and applications, including 
 <b>  Supervised Learning </b>(like linear and logistic regression,           neural networks, and decision trees)   <b> Unsupervised Learning </b>(such as clustering and anomaly detection) and best practices for ML development. 
             It also delves into advanced topics like building <b> recommender systems </b> through collaborative filtering and content-based methods, as well as <b> constructing deep reinforcement learning models</b>.`},{image:f,title:"Deep Learning Specialization - Andrew Ng - Standford",description:`This course dives deep into the foundations and advanced techniques of deep learning, focusing on neural networks and their applications. 
 <b>Neural Network Foundations</b> (including backpropagation, optimization techniques, and hyperparameter tuning), <b>Convolutional Networks</b> (used for image processing tasks), and <b>Recurrent Neural Networks</b> (RNNs) for sequence data. 
           The specialization also explores advanced topics like <b>Generative Adversarial Networks</b> (GANs), <b>transformer architectures</b> for NLP, and tips for building production-ready deep learning systems.`},{image:x,title:"Internship - Disney Engineering",description:` This is a 6 month program at World Disney Orlando.
 Studying roller coasters engineering and premium customer service at Disney University.`}]}},created(){this.ToggleDiplomas?this.items=this.diplomas:this.items=this.certificates},methods:{nextItem(){this.currentIndex=(this.currentIndex+1)%this.items.length},prevItem(){this.currentIndex=(this.currentIndex-1+this.items.length)%this.items.length},ToggleDiplomas(){this.ShowDiplomas=!this.ShowDiplomas,this.items=this.ShowDiplomas?this.diplomas:this.certificates,this.currentIndex=0},formatNewlines(s){return s.replace(/\n/g,"<br>")}}},y={class:"flex flex-col bg-white gradient-bg z-0"},w=e("div",{class:""},null,-1),v={class:"flex flex-col h-4/5 items-center m-0 p-10"},_={class:"flex bg-transparent h-2/3 pb-10"},k=["src"],D={class:"flex flex-col w-5/6 h-4/6 p-7 overflow-auto hide-scrollbar bg-indigo-100 rounded-lg shadow-lg"},I={class:"text-gray-900 font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-tight"},S=["innerHTML"],N={class:"flex justify-center w-1/5 mx-auto mb-4"},L=e("div",{class:"flex-grow"},null,-1);function T(s,n,R,C,a,t){return r(),o("div",y,[w,e("div",v,[e("div",_,[e("img",{src:s.items[a.currentIndex].image,class:"object-cover w-full h-full rounded-lg shadow-lg"},null,8,k)]),e("div",D,[e("h1",I,m(s.items[a.currentIndex].title),1),e("p",{class:"flex-shrink-0 py-3 sm:p-6 text-xs sm:text-base md:text-base lg:text-base text-gray-700 leading-6",innerHTML:t.formatNewlines(s.items[a.currentIndex].description)},null,8,S)])]),e("div",N,[e("button",{onClick:n[0]||(n[0]=(...i)=>t.prevItem&&t.prevItem(...i)),class:"flex-grow px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg bg-slate-700 hover:bg-emerald-500 text-gray-100 font-bold rounded-full"}," Preview "),a.ShowDiplomas?l("",!0):(r(),o("button",{key:0,onClick:n[1]||(n[1]=(...i)=>t.ToggleDiplomas&&t.ToggleDiplomas(...i)),class:"flex-grow px-4 py-2 text-xs mx-4 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base md:mx-6 lg:px-10 lg:py-5 lg:text-lg lg:mx-8 bg-blue-700 hover:bg-amber-500 text-gray-100 font-bold rounded-md"}," Show Diplomas ")),a.ShowDiplomas?(r(),o("button",{key:1,onClick:n[2]||(n[2]=(...i)=>t.ToggleDiplomas&&t.ToggleDiplomas(...i)),class:"flex-grow px-4 py-2 text-xs mx-4 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base md:mx-6 lg:px-10 lg:py-5 lg:text-lg lg:mx-8 bg-blue-700 hover:bg-amber-500 text-gray-100 font-bold rounded-md"}," Show Certificates ")):l("",!0),L,e("button",{onClick:n[3]||(n[3]=(...i)=>t.nextItem&&t.nextItem(...i)),class:"flex-grow px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg bg-slate-700 hover:bg-emerald-500 text-gray-100 font-bold rounded-full"}," Next ")])])}const j=d(b,[["render",T]]);export{j as default};
