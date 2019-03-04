import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2995780AA58B8b8Cd14c3F7434534FB3C107fA14'
);

export default instance;
