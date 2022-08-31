'use strict';

module.exports = class PhoneRegister{
    constructor(data){
        if (!data) throw new Error('phone data missing');
        this.phoneData=data;
    }

    getTypes(){
        const foundTypes=[];
        for(let person of this.phoneData){
            if(person.phones){
                for(let phone of person.phones){
                    if(phone.type && phone.type !=='') {
                        if(!foundTypes.includes(phone.type)){
                            foundTypes.push(phone.type)
                        }
                    }
                  

            }
            
                
            }
        }
        return foundTypes;
    }

}