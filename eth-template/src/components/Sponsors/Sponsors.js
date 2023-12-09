import React from 'react';
import { SponsorLogo, SponsorName, SponsorScrollContainer, SponsorsContainer, SponsorItem } from './SponsorsElements';
import chainlinkLogo from '../../images/Chainlink_logo.png';
import MetaMaskLogo from '../../images/MetaMask_logo.jpeg';
import LighthouseLogo from '../../images/Lighthouse.storage_logo.jpeg';
import PolygonLogo from '../../images/Polygon_logo.png';
import PushLogo from '../../images/Push_logo.jpeg';
import ScrollLogo from '../../images/Scroll_logo.png';



const sponsorsData = [
  { logo: chainlinkLogo, name: 'Chainlink' },
  { logo: LighthouseLogo, name: 'Lighthouse' },
  { logo: MetaMaskLogo , name: 'MetaMask' },
  { logo: PolygonLogo, name: 'Polygon' },
  { logo: PushLogo, name: 'Push' },
  { logo: ScrollLogo, name: 'Scroll' },

];

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <SponsorScrollContainer>
        {Array.from({ length: 2 }, () => sponsorsData).flat().map((sponsor, index) => (
          <SponsorItem key={index}>
            <SponsorLogo src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <SponsorName>{sponsor.name}</SponsorName>
          </SponsorItem>
        ))}
      </SponsorScrollContainer>
    </SponsorsContainer>
  );
};

export default Sponsors;