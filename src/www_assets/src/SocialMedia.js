import * as React from "react";

const SocialMedia = ({theme}) => {
    return ( 
        <div className="socials">
            <ul>
                <li style={{ backgroundImage: "linear-gradient(45deg, #0077b5, #00a0dc)", border: theme.socialBorder }}>
                    <a rel="noopener" href="https://www.linkedin.com/in/gespi/">Linkedin</a>
                </li>
                <li style={{ backgroundImage: "linear-gradient(45deg, #333, #4d4d4d)", border: theme.socialBorder }}>
                    <a rel="noopener" href="https://github.com/gespi1">Github</a>
                </li>
                <li style={{ backgroundImage: "linear-gradient(45deg, #ffdc7d, #f46f30, #4c5fd7, #7232bd, #c32aa3 )", border: theme.socialBorder }}>
                    <a rel="noopener" href="https://www.instagram.com/gespi.xyz/">Instagram</a>
                </li>
                <li style={{ color: "white", border: theme.socialBorder  }}>
                <a rel="noopener" href="https://3wordnft.gespi.xyz">3 Word NFTs (rinkeby)</a>
                </li> {/* enable <a> once NFT site is ready */}
            </ul>
        </div>
    );
}
 
export default SocialMedia;