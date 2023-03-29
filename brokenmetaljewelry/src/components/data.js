import aPortraitOfGranite from "./workimages/aPortraitOfGranite .png"
import moonScape from "./workimages/moonScape.png";
import tieFighters from "./workimages/tieFighters.png";
import blueSteel from "./workimages/blueSteel.png";
const data= {
    products: [
        {id: 'item1',
        name: 'Moonscape Necklace',
        price: 120,
        image: {moonScape}
    },   
        { id: 'item2',
        name: 'Tie Fighter Earings',
        price: 90,
        image: {tieFighters}
  
    },   
        {id: 'item3',
        name: 'Blue Steel',
        price: 130,
        image: {blueSteel}
    },
    {
        id: 'item4',
        name: 'A Portrait of Granite',
        price: 145,
        image: {aPortraitOfGranite}
    }
  ],  
}
export default data;