import { RpgMap, MapData } from '@rpgjs/server'
import { createHuertoEvent } from '../events/HuertoEvent';
import { CONSTANTS } from './../../../../education/constants';

const h1 = createHuertoEvent(CONSTANTS.HUERTO_LUGAR_H1, CONSTANTS.HUERTO_CULTIVO_TIERRA);
const h2 = createHuertoEvent(CONSTANTS.HUERTO_LUGAR_H2, CONSTANTS.HUERTO_CULTIVO_TIERRA);
const h3 = createHuertoEvent(CONSTANTS.HUERTO_LUGAR_H3, CONSTANTS.HUERTO_CULTIVO_TIERRA);
const h4 = createHuertoEvent(CONSTANTS.HUERTO_LUGAR_H4, CONSTANTS.HUERTO_CULTIVO_TIERRA);

@MapData({
    id: 'medieval',
    file: require('./tmx/samplemap.tmx'),
    name: 'Town',
    events: [h1, h2, h3, h4]
})
export class SampleMap extends RpgMap {}


