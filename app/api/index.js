const host = 'http://192.168.0.108:8080'

export const check = host+'/check'
export const randomdir = host+'/randomdir'
export const upload = host+'/upload'



export const photo = {
  size:{
    default: '6寸',
    val:'7',
    width:'1016',
    height:'1524',
    option: [[{
      label:'4寸',
      value:'4寸',
      options:{
        val:'5',
        width:'760',
        height:'1020',
      },
    },{
      label:'5寸',
      value:'5寸',
      options:{
        val:'6',
        width:'889',
        height:'1270',
      },
    },{
      label:'6寸',
      value:'6寸',
      options:{
        val:'7',
        width:'1016',
        height:'1524',
      },
    },{
      label:'7寸',
      value:'7寸',
      options:{
        val:'8',
        width:'1270',
        height:'1778',
      },
    },{
      label:'8寸',
      value:'8寸',
      options:{
        val:'9',
        width:'1524',
        height:'2032',
      },
    },{
      label:'10寸',
      value:'10寸',
      options:{
        val:'10',
        width:'2032',
        height:'2540',
      },
    },{
      label:'12寸',
      value:'12寸',
      options:{
        val:'11',
        width:'2100',
        height:'2970',
      },
    },{
      label:'A4',
      value:'A4',
      options:{
        val:'12',
        width:'2100',
        height:'2970',
      },
    },{
      label:'A3',
      value:'A3',
      options:{
        val:'13',
        width:'2970',
        height:'4200',
      },
    }]]
  },
  edge: {
    default:'无边距',
    val:'0',
    option:[[{
      val:'0',
      label:'无边距',
      value:'无边距'
    },{
      val:'1',
      label:'有边距',
      value:'有边距'
    },{
      val:'2',
      label:'自动缩放',
      value:'自动缩放'
    }]]
  }
}
export const file = {
  size:{
    default: 'A4',
    val:'20',
    option: [[{
      label:'A4',
      value:'A4',
      options:{
        val:'20'
      },
    },{
      label:'B5',
      value:'B5',
      options:{
        val:'19'
      },
    }]]
  }
}
