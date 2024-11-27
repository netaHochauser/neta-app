import { NASA_API_KEY } from "@/lib/config";
import styles from "./page.module.css";

type Nasaprops = {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

async function getData(count: number) {
  const apiKey = process.env.NASA_API_KEY;
  const response = await fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${apiKey}`);
  const data = await response.json();
  
  // Check if the data is an array before returning it
  if (Array.isArray(data)) {
    return data;
  } else {
    console.error('Unexpected data format:', data);
    return [];  // Return an empty array if data is not an array
  }
}

function NasaItem(props: Nasaprops) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
      <img src={props.url} alt="nasa item" />
    </div>
  );
}

export default async function NasaApp() {
  const nasaData = await getData(10);

  // Make sure nasaData is an array before trying to map over it
  if (!Array.isArray(nasaData)) {
    return <div>Error: Could not load data.</div>;
  }

  return (
    <div className={styles.data}>
      <h1>Nasa Images</h1>
      {nasaData.map((n: Nasaprops, index: number) => (
        <NasaItem
          key={index}
          title={n.title}
          date={n.date}
          explanation={n.explanation}
          url={n.url}
        />
      ))}
    </div>
  );
}
