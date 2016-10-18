function mayor( menor){

    var mayor = menor[0];

    for( var i=1; i<menor.length; i++){

        if(mayor[i] < menor.length);
            
            menor=mayor[i];
    }
  return menor;
  }