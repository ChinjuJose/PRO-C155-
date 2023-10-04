AFRAME.registerComponent("terrain-rotation",{
    schema:{
        rotSpeed:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="ArrowRight"){
                if(this.data.rotSpeed<0.1){
                    this.data.rotSpeed+=0.05
                }
            }
            if(e.key=="ArrowLeft"){
                if(this.data.rotSpeed>-0.1){
                    this.data.rotSpeed-=0.05
                }
            }
        })
    },
    tick:function(){
        var rot = this.el.getAttribute("rotation")
        rot.y += this.data.rotSpeed
        this.el.setAttribute("rotation",{x:rot.x, y:rot.y,z:rot.z}) 
    }
})

AFRAME.registerComponent("plane-rotation",{
    schema:{
        rotSpeed:{type:"number",default:0},
        ascendSpeed:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.rotSpeed = this.el.getAttribute("rotation")
            this.data.ascendSpeed = this.el.getAttribute("position")
            var planeRotation = this.data.rotSpeed
            var planePosition = this.data.ascendSpeed

            if(e.key=="ArrowRight"){
                if(planeRotation.x<10){
                    planeRotation.x+=0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }
            if(e.key=="ArrowLeft"){
                if(planeRotation.x>-10){
                    planeRotation.x-=0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
            }
            if(e.key=="ArrowUp"){
                if(planeRotation.z<10){
                    planeRotation.z+=0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
                if(planePosition.y<2){
                    planePosition.y+=0.5
                    this.el.setAttribute("position", planePosition)
                }
            }
            if(e.key=="ArrowDown"){
                if(planeRotation.z>-10){
                    planeRotation.z-=0.5
                    this.el.setAttribute("rotation", planeRotation)
                }
                if(planePosition.y>-2){
                    planePosition.y-=0.5
                    this.el.setAttribute("position", planePosition)
                }
            }
        })
    }
})