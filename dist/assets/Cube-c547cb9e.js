import{p as r}from"./p5.min-f3c7c398.js";import{_ as d,o as u,c as m}from"./index-f2e75346.js";const f={data(){return{p5Instance:null,balls:[],cubeColor:[150,150,0],nextColorChangeTime:0,draggedBall:null,isDragging:!1,lastMouseX:0,lastMouseY:0,rotationX:Math.PI/6,rotationZ:Math.PI/4,cubePos:{x:0,y:0,z:0},cubeSize:100,collisionsEnabled:!1,balls_count:30}},mounted(){this.p5Instance=new r(this.sketch,this.$refs.scene)},beforeDestroy(){this.p5Instance.remove()},methods:{sketch(s){class c{constructor(t,e=t.random(-1,1),i=t.random(-1,1),a=t.random(-1,1),l=t.random(21,51)){this.p=t,this.pos=t.createVector(e,i,a),this.vel=t.createVector(t.random(-1,1),t.random(-1,1),t.random(-1,1)),this.acc=t.createVector(0,0,0),this.color=t.color(t.random(255),t.random(255),t.random(255)),this.radius=l}applyForce(t){this.acc.add(t)}resolveCollision(t){const e=r.Vector.sub(t.pos,this.pos),i=this.radius+t.radius-e.mag();e.normalize(),e.mult(i/2),t.pos.add(e),this.pos.sub(e);const a=r.Vector.sub(this.vel,t.vel),l=e.copy().mult(a.dot(e));this.applyForce(l),t.applyForce(l.mult(-4))}resolveCollisionCube(t){const e=r.Vector.sub(this.pos,s.createVector(t.x,t.y,t.z));e.normalize(),e.mult(-.1),this.applyForce(e)}checkCollision(t,e,i,a){if(this.p.collisionsEnabled){for(let n=0;n<t.length;n++)if(n!==e){let h=t[n];this.pos.dist(h.pos)<this.radius+h.radius&&this.resolveCollision(h)}this.pos.dist(s.createVector(i.x,i.y,i.z))<this.radius+a/2&&this.resolveCollisionCube(i)}}moveToCube(t){const e=r.Vector.sub(s.createVector(t.x,t.y,t.z),this.pos);e.mult(.005),this.applyForce(e)}update(){this.vel.add(this.acc),this.vel.mult(1),this.vel>100&&(this.vel=1),this.pos.add(this.vel),this.acc.mult(0)}display(){this.p.push(),this.p.translate(this.pos.x,this.pos.y,this.pos.z),this.p.ambientMaterial(this.color),this.p.sphere(this.radius),this.p.pop()}}s.setup=()=>{s.createCanvas(window.innerWidth,window.innerHeight,s.WEBGL);for(let o=0;o<this.balls_count;o++)this.balls.push(new c(s));this.nextColorChangeTime=s.millis()+s.random(1e3,15e3)},s.draw=()=>{s.clear(),s.ambientLight(150),s.directionalLight(255,255,255,0,1,-1),s.millis()>this.nextColorChangeTime&&(this.cubeColor=[s.random(255),s.random(255),s.random(255)],this.nextColorChangeTime=s.millis()+s.random(1e3,15e3)),s.rotateX(this.rotationX),s.rotateZ(this.rotationZ),s.push(),s.stroke(0),s.fill(...this.cubeColor),s.box(100,100,100),s.pop(),this.balls.forEach((o,t)=>{o.checkCollision(this.balls,t,this.cubePos,this.cubeSize),o.update(),o.display()})},s.mousePressed=()=>{this.isDragging=!0,this.lastMouseX=s.mouseX,this.lastMouseY=s.mouseY,s.dist(s.mouseX-s.width/2,s.mouseY-s.height/2,this.cubePos.x,this.cubePos.y)<this.cubeSize/2&&(this.balls.forEach(t=>{t.moveToCube(this.cubePos)}),this.collisionsEnabled=!0)},s.mouseReleased=()=>{this.isDragging=!1},s.mouseDragged=()=>{if(this.isDragging){const o=s.mouseX-this.lastMouseX,t=s.mouseY-this.lastMouseY;this.rotationX+=t*.01,this.rotationZ+=o*.01,this.lastMouseX=s.mouseX,this.lastMouseY=s.mouseY}}}}},b={ref:"scene"};function g(s,c,o,t,e,i){return u(),m("div",b,null,512)}const y=d(f,[["render",g],["__scopeId","data-v-3b63feaf"]]);export{y as default};
