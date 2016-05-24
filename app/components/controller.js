app.controller('MainController', function () {
    var mc=this;
    
    mc.list=[];
    
    mc.addList = function (newTask) {
        mc.list.push(newTask)
        mc.newTask = {}
    }
    
    mc.removeTask = function (index) {
        mc.list.splice(index, 1);
    }
})