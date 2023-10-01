
export const home = (req,res)=>{
    try {
        let home = {
            title:'HomePage',
            descrp:'I am trying to get data of the EC2 instance from my desktop PC'
        }
        res.status(200).json({msg:'It was a success, welcome to HomePage',home});
    } catch (error) {
        res.status(300).json({msg:'There was an error'});
    }
}

export const getInfo = (req,res) =>{
    let user = {
        idUser:'1',
        username:'lTali',
        pass:'3423',
        cantPublis:'23',
        level:'86'
    }
    try {
        res.status(200).json({msg:'Success',user});
    } catch (error) {
        res.status(300).json({msg:'There was an error'});
    }
}
