module.exports ={

    MultipleMogooseDbToObj: function ( data){
      return data.map(eachObj=>eachObj.toObject())
    },

    SingleMogooseDbToObj:function ( data){
        return data? data.toObject() : data;
    }
}
