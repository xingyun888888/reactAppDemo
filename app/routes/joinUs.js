/**
 * Created by gaochao on 7/26/17.
 */
module.exports = {
    path:"/joinUs",
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            cb(null,require("../components/joinUs").default)
        },'joinUs')
    }
}