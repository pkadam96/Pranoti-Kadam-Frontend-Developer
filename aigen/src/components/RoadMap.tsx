import React from 'react';
import { PhaseComponent } from './PhaseComponent';
import phase1 from '../assets/phase1.png';
import phase2 from '../assets/phase2.png';
import phase3 from '../assets/phase3.png';

const RoadMap: React.FC = () => {
    const phase1Points = [
        "Horizen dai dai harmony dogecoin waves nexo.",
        "Flow horizen waves dash tether zcash waves dash terraUSD.",
        "Quant harmony amp cosmos PancakeSwap decentraland decred.",
        "Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar."
    ];

    const phase2Points = [
        "BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap.",
        "Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.",
        "Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.",
        "Hive stellar velas flow cardano."
    ];

    const phase3Points = [
        "Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.",
        "Waves TRON dogecoin bancor eCash quant secret.",
        "Celsius crypto bancor nexo litecoin decentraland crypto."
    ];

    return (
       <>
       <h1 className='bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6] bg-clip-text text-transparent text-3xl text-center mt-16 lg:mt-28 mb-12 lg:mb-28'>Roadmap</h1>
         <div className='lg:ml-28'>
            <PhaseComponent title="PHASE 1" points={phase1Points} image={phase1} />
            <PhaseComponent title="PHASE 2" points={phase2Points} image={phase2} />
            <PhaseComponent title="PHASE 3" points={phase3Points} image={phase3} />
        </div>
       </>
    );
}

export { RoadMap };
