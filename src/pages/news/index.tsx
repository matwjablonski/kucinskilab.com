import { TwitterTimelineEmbed } from "react-twitter-embed";

const News = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="SiRCH_Kucina"
      />
    </div>
  )
}

export default News;