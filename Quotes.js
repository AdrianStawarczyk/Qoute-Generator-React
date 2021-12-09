import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Quotes =() =>{

  const [quotes, setQuotes] = useState("");
  const navigate = useNavigate();

  const getQuote = () =>{
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(()=>{
    getQuote();
  }, []);

  return(
    <div id="quote-box">

      <div id="text">
        <p>{quotes.quote}  </p>

      </div>
      <div id="author">
        <p>{quotes.author}</p>
      </div>
      <div id="buttons">


        <button onClick={navigate('/home')} id="prev-quote">Prev Quote</button>
        <button onClick={getQuote} id="new-quote">New Quote</button>
      </div>
    </div>
  );
};
export default Quotes;
