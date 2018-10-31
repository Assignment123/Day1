function capitalize(val){

        val=val.split(" ");
        for(i=0;i<val.length;i++){
            val[i]= val[i][0].toUpperCase() + val[i].substr(1);
    }
        return val.join(" ");
     }
     var caps=capitalize("hello world");
     console.log(caps);
