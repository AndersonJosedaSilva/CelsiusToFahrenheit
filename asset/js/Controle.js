var Controle = {
    init:function(){
        Controle.setForm();
      
    },
    setForm: function(){
        var form = document.querySelector('form');
        form.addEventListener("submit",function(event){
         Controle.CalcularTemp(form);
         
         event.preventDefault();
        });
    },

    
    CalcularTemp: function(form){
        
        var 
            celsius = parseFloat(form.celsius.value);
            result = 0;
            
        var callback = function(result){
            Controle.apresentarResult(result);
        }    
        Service.converte(celsius,callback);
    },
    apresentarResult: function(result){
        var apresResult = document.querySelector(".result");
        apresResult.innerHTML = result.toFixed(2);
    },

    
};
Controle.init();