var Service = {
    
    converte: function(celsius,callback){
    
    $.ajax({
       url:'php/acao.php',
       data : {'celsius': celsius},
       success: function(result){
           callback(parseFloat(result));
       },
       error:function(){
           callback(null);
       }
        
    });
    }
    
};
