import home from "../assets/home.png";
import recent from "../assets/recents.png";
import send from "../assets/send.png";
import card from "../assets/card.png";
import more from "../assets/more.png";

const footerArea = [
    {
        image: home, title: "Home",  titleColor: "#208220",
    },
    {
        image: recent, title: "Transactions", titleColor: "#B7B7B7", navigate: ""
    },
    {
        image: send, backgroundColor:  "#208220", navigate: "Transfer"
    },
    {
        image: card, title: "Cards", titleColor: "#B7B7B7", navigate: ""
    },
    {
        image: more, title: "More", titleColor: "#B7B7B7", navigate: ""
    },
]

export default footerArea;