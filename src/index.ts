import { GuildQueueEvent, QueueRepeatMode, QueryType } from 'discord-player'
import { DefaultExtractors } from '@discord-player/extractor'
import { ForgeMusic } from '@structures/ForgeMusic'

/**
 * An array including the events that are not supported.
 */
const blacklistedEvents = [
    'audioTracksAdd',
    'audioTracksRemove',
    'willPlayTrack',
    'willAutoPlay',
    'voiceStateUpdate',
]
/**
 * The list of all events.
 */
const AllEvents = Object.keys(GuildQueueEvent).filter(
    (event) => !blacklistedEvents.includes(event)
)

export {
    AllEvents,
    DefaultExtractors,
    ForgeMusic,
    GuildQueueEvent,
    QueueRepeatMode,
    QueryType,
}
