const data=require('./schema')
module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.send("hello")
    })

    app.get('/all',(req,res)=>{
        data.find()
            .then(result=>{
                res.send(result)
            })
    })

    app.get('/filter/:char/:val/:sign',(req,res)=>{
        const {char,val,sign}=req.params;
        data.find({char})
            .then(filt=>{
                var x=filt.length;
                console.log(x);

                var result=[];
                console.log(sign)
                if(sign==='>')
                {
                    for(var i=0;i<x;i++)
                    {
                        if(parseInt(filt[i].value)>parseInt(val))
                            result.push(filt[i]);
                    }
                }
                else
                {
                    for(var i=0;i<x;i++)
                    {
                        if(parseInt(filt[i].value)<parseInt(val))
                            result.push(filt[i]);
                    }
                }
                res.send(result)
            })
            .catch(err=>{
                console.log(err)
            })
    })
    app.post('/putValues',(req,res)=>{
        const x=new data({
            char:req.body.char,
            value:req.body.value
        })

        x.save()
            .then((success)=>{
                res.send("success");
            })
            .catch((err)=>{
                console.log(err)
            })
        
    })
}