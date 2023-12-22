import cookieParser from "cookie-parser";
export const calculation = (req,res)=>{
        const{operand1,operation,operand2} = req.body
        const num1 = parseInt(operand1)
        const num2 = parseInt(operand2) 
        
        if(operation==='+')
        {
            
            const result=num1+num2
            res.status(201).cookie("result",result,{
                httpOnly:true,
                maxAge:15*60*1000
            })
            return  res.status(201).json({
                result:result,
                success:true
            })
        }
       
      
        if(operation==='-')
        {
           const result=num1-num2
       
            res.status(201).cookie("result",result,{
                httpOnly:true,
                maxAge:15*60*1000
            })
            return  res.status(201).json({
                result:result,
                success:true
            })
        }
        if(operation==='*')
        {
            const result=num1*num2
           
            res.status(201).cookie("result",result,{
                httpOnly:true,
                maxAge:15*60*1000
            })
            return res.status(201).json({
                result:result,
                success:true
            })
        }
        if(operation==='/')
        {
            const result=num1/num2
           
            res.status(201).cookie("result",result,{
                
                httpOnly:true,
                maxAge:15*60*1000
            })
            return  res.status(201).json({
                result:result,
                success:true
            })
        }

} 