
cc.Class({
    extends: cc.Component,

    properties: {
    //    enemyPrefab:cc.Prefab
    enemyPrefab: cc.Prefab,
    enemyPrefab2: cc.Prefab,
    enemyPrefab3: cc.Prefab,
     
    /**间隔 */
    schedule_time:0,
    make_flag:0,
    location_x:0,
    location_y:0,
},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

this.enemyPool = new cc.NodePool();
this.enemyPool2 = new cc.NodePool();
this.enemyPool3 = new cc.NodePool();

let initCount = 3;
for(let i = 0; i< initCount; ++i){
let enemy = cc.instantiate(this.enemyPrefab); //  // 创建节点
this.enemyPool.put(enemy); //// 通过 putInPool 接口放入对象池

let enemy2 =cc.instantiate(this.enemyPrefab2);
this.enemyPool2.put(enemy2);

let enemy3 = cc.instantiate(this.enemyPrefab3);
this.enemyPool3.put(enemy3);

}

this.schedule(function (){
    /**产生0-2的随机数 */
this.make_flag = (Math.floor(Math.random() *(3-0)) +0);
/**产生（-150，150）的初始位置随机数*/
this.location_x = (Math.floor(Math.random()*(150-(-150)))-150);
this.location_y = (Math.floor(Math.random()*(150-(-150)))-150);

this.dosomething();

},this.schedule_time);




},


dosomething:function(){
cc.log("定时器每次执行的方法----");
if(this.make_flag == 0){
this.createEnemy();
}else if(this.make_flag == 1){
this.createEnemy2();
}else if(this.make_flag == 2){
this.createEnemy3();
}

},

    

    createEnemy: function () {
        console.log("碰瓷的来了--1111--");
        let enemy = null;
        if (this.enemyPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
        enemy = this.enemyPool.get();
        } 
        else { // 如果没有空闲对象，就用 cc.instantiate 重新创建
        enemy = cc.instantiate(this.enemyPrefab);
        }
        enemy.parent = this.node; // 将生成的敌人加入节点树
        console.log("1111location_x@@@@"+this.location_x);
        enemy.x = this.location_x;
        enemy.y = this.location_y;
        //     // enemy.getComponent('Enemy').init(); //接下来就可以调用 enemy 身上的脚本进行初始化
   
    },

    createEnemy2: function(){
       console.log("碰瓷的来了---222---");
        let enemy = null;
        if(this.enemyPool2.size()>0){
enemy = this.enemyPool2.get();
        }else{
enemy =cc.instantiate(this.enemyPrefab2);
        }
enemy.parent = this.node;
console.log("22222location_x@@@@"+this.location_x);
enemy.x = this.location_x;
enemy.y = this.location_y;
    },

    createEnemy3: function(){
     console.log("碰瓷的来了----333----");
       let enemy = null;
       if(this.enemyPool3.size()>0){
           enemy = this.enemyPool3.get();
       }else{
           enemy = cc.instantiate(this.enemyPrefab3);  
       }
       enemy.parent = this.node;
       console.log("3333location_x@@@@"+this.location_x);
       enemy.x = this.location_x;
       enemy.y = this.location_y;
    },

        
        

    start () {

    },

    // update (dt) {},
});
