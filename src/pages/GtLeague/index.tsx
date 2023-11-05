import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../styles/style";
import { ResultsBlocks, ResultsGoals, ResultsShield } from "./style";


const initialResults = "https://hr.gtleagues.com/api/fixtures?kickoff=between%3A2023-11-04T03%3A00%3A00.000Z%2C2023-11-05T02%3A59%3A59.999Z&limit=50&offset=0&sort=-kickoff%2C-matchNr&status=in%3A3%2C5%2C4%2C6&xtc=true";

type Participants = {
  participant: {
    team :{
      crest: any,
      name: string
    }
    player :{
      nickname: string
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
  participants: Participants[];
  channel: string;
  id: number
};

export default function GtLeague() {
  const [post, setPost] = useState<Data[]>([]);


  async function resultData() {

    try {
      axios.get(initialResults).then((response) => {
        setPost(response.data);
      });
      
      
      console.log("response.datas", post)
      
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
            <ResultsBlocks 
              key={item.id} 
              className={(item.result.stats.home_score === item.result.stats.home_score) && 'empate'}>
              <div>
                <ResultsShield
                  src={item.participants[0].participant.team.crest} 
                  alt={item.participants[0].participant.team.name} />
                <label htmlFor="homeScore">{item.participants[0].participant.team.name}</label>
                <b>{item.participants[0].participant.player.nickname}</b>
              </div>
              <ResultsGoals id="homeScore" children={item.result.stats.home_score} />
              X
              <ResultsGoals id="awayScore" children={item.result.stats.away_score} />
              <div>
                <ResultsShield
                  src={item.participants[1].participant.team.crest} 
                  alt={item.participants[1].participant.team.name} />
                <label htmlFor="awayScore">{item.participants[1].participant.team.name}</label>
                <b>{item.participants[1].participant.player.nickname}</b>
              </div>
            </ResultsBlocks>
          )
        )}
        </>
      )}
      
    </Container>
  );
}

