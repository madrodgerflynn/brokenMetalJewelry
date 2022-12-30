import foredomPic from "./images/foredomPic.png"
import polishing from "./images/polishing.png"
import soldering from "./images/soldering.png"
const pictures =[
    {
        index:0,
        picLink: soldering,
        alt:  "Annealing some Copper Scrap",
        description: "This is me annealing some copper scrap with an Acetylene Tourch. Annealing is the process of softening the metal and removing impurities such as oil or dust."
    },
    {
index:1,
picLink: foredomPic,
alt: "Working with the Foredom, buffing out some scratches",
description: "This is me using the Foredom or Flexible Shaft Machine to debur and polish a piece. You can do a lot with the Foredom including engraving, which I do a lot of. "
    },
    {
        index: 2,
        picLink: polishing,
        alt:"Polishing labradorite at the lapidary station",
        description: "This is me using the 6 wheel lapidary rock grinder. The first 3 are for getting out scratches and shaping. The last 3 are for polishing the stone, making it shiny and beautiful."
    }
];

export default pictures;