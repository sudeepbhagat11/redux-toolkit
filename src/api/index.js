import Chance from "chance";

const chance = new Chance();

export const fakeUser = () =>{
    return chance.name( {middle:true });
}

