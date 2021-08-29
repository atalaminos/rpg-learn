import { RpgModule, RpgServer } from '@rpgjs/server'
import { SampleMap } from './maps/samplemap'
import databaseList  from './database'
import { player } from './player'

@RpgModule<RpgServer>({
    maps: [
        SampleMap,
    ],
    database: databaseList,
    player
})
export default class RpgServerEngine {}