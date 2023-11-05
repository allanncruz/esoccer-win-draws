import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../styles/style";
import { ResultsBlocks, ResultsGoals } from "./style";



type Teams = {
  participant: {
    team :{
      name: string
    }
  }
};

interface Data {
  result: {
    stats: {
      away_score: number,
      home_score: number
    }
  },
  participants: Teams;
  channel: string;
  id: number
};

const initialResults = "https://hr.gtleagues.com/api/fixtures?kickoff=between%3A2023-11-04T03%3A00%3A00.000Z%2C2023-11-05T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true";



export default function GtLeague() {
  const [post, setPost] = useState<Data[]>([]);


  async function resultData() {

    try {
      axios.get(initialResults).then((response) => {
        setPost(response.data);
      });
      
      
      console.log("response.data", post)
      
    } catch (error) {}
  }

  useEffect(() => {
    resultData()

  }, []);

  return (
    <Container>
      {post.length <= 0 ? (
        <span>loading</span>
      ) : (
        <>
          {post?.map((item) => (
            <ResultsBlocks key={item.id}>
              <label htmlFor="homeScore">
              {item.participants?.map((teams: Teams) => (
                <>{teams.participant.team.name}</>
              ))}
              </label>
              <ResultsGoals id="homeScore" children={item.result.stats.home_score} />
              X
              <ResultsGoals id="awayScore" children={item.result.stats.away_score} />
              <label htmlFor="awayScore">Away score</label>
            </ResultsBlocks>
          )
        )}
        </>
      )}
      
    </Container>
  );
}

