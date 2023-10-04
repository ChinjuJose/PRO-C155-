AFRAME.registerComponent("game-play",{
schema:{
    elementId:{type:"string",default:"#ring1"}
},
update:function(){
    //console.log(this.data.elementId)
    this.isCollided(this.data.elementId)
},
isCollided:function(elementId){
    const element = document.querySelector(elementId)
    // console.log(elementId)
    element.addEventListener("collide",(e)=>{
        console.log("Collision")
        if(elementId.includes("#ring")){
            console.log("Collision with "+elementId)
        }
        else if(elementId.includes("#bird")){
            console.log("Collision with "+elementId)
        }
    })
}
})