import { NASA_API_KEY } from "@/lib/config";
import styles from "./page.module.css";

type Nasaprops = {
  title : string;
  date: string;
  explanation: string;
  url: string;
}

async function getData(count : number ) {
  const apiKey = NASA_API_KEY;
  const response = await fetch('https://api.nasa.gov/planetary/apod?count='+ count +"&api_key="+apiKey);
  const data = await response.json();
  return data;
};

function NasaItem(props : Nasaprops){
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
      <img src={props.url} alt="nasa item" />
    </div>
  );
}

export default async function NasaApp(){
  const nasaData = await getData(10);

  return (
    <div>
      <h1>Nasa Images</h1>
      {nasaData.map((n:Nasaprops, index: number) => 
      <NasaItem
        key={index}
        title={n.title}
        date={n.date}
        explanation={n.explanation}
        url={n.url}
      />)}
    </div>
  );
}