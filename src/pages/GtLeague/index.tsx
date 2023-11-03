import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../styles/style";
import { ResultsBlocks } from "./style";

type Data = {
  result: {
    stats: {
      away_score: number,
      home_score: number
    }
  }
  channel: string;
  id: number
};



const initialResults = "https://hr.gtleagues.com/api/fixtures?kickoff=between%3A2023-11-03T03%3A00%3A00.000Z%2C2023-11-04T02%3A59%3A59.999Z&limit=500&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true";



export default function GtLeague() {
  const [post, setPost] = useState<Data[]>([]);
  const [isloading, setIsLoading] = useState(false);

  async function resultData() {
    setIsLoading(true);
    try {
      axios.get(initialResults).then((response) => {
        setPost(response.data);
      });

 
      // const homeScore = post?.map(item => item.result.stats.home_score)
      // const awayScore = post?.map(item => item.result.stats.away_score)

      // console.log("homeScore", homeScore) 

      // console.log("awayScore", awayScore)

    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    resultData()

  }, []);

  return (
    <Container>
      {isloading ? (
        <span>loading</span>
      ) : (
        <>
          {post?.map((item) => (
            <ResultsBlocks key={item.id}>
              <label htmlFor="homeScore">Home score</label>
              <p id="homeScore">{item.result.stats.home_score}</p>

              <label htmlFor="awayScore">Away dcore</label>
              <p id="awayScore">{item.result.stats.away_score}</p>
            </ResultsBlocks>
          )
        )}
        </>
      )}
      
    </Container>
  );
}

