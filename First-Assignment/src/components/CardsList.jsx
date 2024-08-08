import Cards from "./Cards";
import './CardList.css'
import './Cards.css'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiRulerThin } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineGlobal } from "react-icons/ai";
import { TfiText } from "react-icons/tfi";
import { TiDivideOutline } from "react-icons/ti";
import { GrDomain } from "react-icons/gr";

function CardsList() {
  const [cards, setcards] = useState([
    {
      title: "The TLD",
      content: "Does the domain extension math the language of the domain name?",
      img: <GrDomain/>,
    },
    {
      title: "International recognition",
      content: "Can the domain name be used on an international scale?",
      img: <LiaCertificateSolid/>,
    },
    {
      title: "Sales opportunities",
      content: "Can the domain name be used on an international scale?",
      img: <TiDivideOutline/>,
    },
    {
      title: "Domain length",
      content: "Is the domain name short enought to remeber?",
      img: <PiRulerThin/>,
    },
    {
      title: "Search engine",
      content: "Does the domain name follow the search engine guidelines?",
      img: <FaSearch/>, 
    },
    {
      title: "Typo susceptibility",
      content: "How hight is the risk of mistyping the domain name?",
      img: <TfiText/>,
    },
    {
      title: "Language",
      content: "How complex is the actual domain name?",
      img: <AiOutlineGlobal/>,
    },
    {
      title: "Advertising potential",
      content: "Could the domain name be used for advertising campaings?",
      img: <FcAdvertising/>,
    },
    {
      title: "Bussines potential",
      content: "Can the domain name be used as your company address?",
      img: <HiOutlineLightBulb/>,
    }])
  return (
    <div className="map-holder">
      {cards.map((card) => { 
          return(
            <div className='card'>
                <div className='img'>
                  <i>{card.img}</i>
                </div>
                <div className='elements'>
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
            </div>
          );
       })}
    </div>
  );
}

export default CardsList;
