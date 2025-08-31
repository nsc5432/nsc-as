import { CacheProvider } from 'nsc-practice';

import CacheSampleWrapper from './CacheSampleWrapper';

const CacheSample = () => {
    return (
        <CacheProvider>
            <CacheSampleWrapper />
        </CacheProvider>
    );
};

export default CacheSample;
