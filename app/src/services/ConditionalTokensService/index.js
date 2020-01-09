const ConditionalTokensService = require("./ConditionalTokensService");
const conf = require("../../conf");
import getMarketMakersRepo from "../../repositories/MarketMakersRepo";
import getConditionalTokensRepo from "../../repositories/ConditionalTokensRepo";

let instance, instancePromise, lmsrAddressCache;

async function _getInstance({ lmsrAddress, web3 }) {
  const [marketMakersRepo, conditionalTokensRepo] = await Promise.all([
    getMarketMakersRepo({ lmsrAddress, web3 }),
    getConditionalTokensRepo({ lmsrAddress, web3 })
  ]);

  return new ConditionalTokensService({
    marketMakersRepo,
    conditionalTokensRepo,
    markets: conf.MARKETS
  });
}

// When changing the market maker we have to reset the singleton
function _resetService() {
  instance = undefined;
  instancePromise = undefined;
}

export default async props => {
  if (props && props.lmsrAddress && props.lmsrAddress !== lmsrAddressCache) {
    // If marketMakerAddress changes we have to reload contracts
    _resetService();
  }

  if (!instance) {
    lmsrAddressCache = props.lmsrAddress;
    if (!instancePromise) {
      instancePromise = _getInstance(props);
    }

    instance = await instancePromise;
  }

  return instance;
};
