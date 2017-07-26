/**
 * Created by gaochao on 7/26/17.
 */
/**
 * Created by gaochao on 7/26/17.
 */
module.exports = {
    path:"/businessCooperation",
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            cb(null,require("../components/businessCooperation").default)
        },'businessCooperation')
    }
}