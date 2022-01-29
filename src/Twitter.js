import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Twitter = ({theme}) => {

    return ( 
        <div className="twitter-container">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="gespi_"
                options={{height: 1200, width: 400}}
                theme={theme.mode}
                key={theme.mode}
                data-border-color="#333"
            />
        </div>
     );
}
 
export default Twitter;