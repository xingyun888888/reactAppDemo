/**
 * Created by gaochao on 7/26/17.
 */
module.exports = {
    path:"/serviceConsult",
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            cb(null,require("../components/serviceConsult").default)
        },'serviceConsult')
    }
}