/** 
 * Represents an EpisodeModel with a name, episode, watched flag and an airdate.
 */
export default class EpisodeModel {
    public name: string
    public episode: number
    public watched: boolean
    public airdate: Date | null

    constructor() {
        this.airdate = null
    }

    /**
     * Parses a JSON String or a Object to an EpisodeModel. If name or episode
     * is not defined, the return value will be null. If a json parse error happens
     * the return will be null.
     * 
     * @param data The Json string or the data object to parse.
     * 
     * @returns null or an EpisodeModel
     */
    public static unfreeze(data: string | object): EpisodeModel | null {
        if (typeof data === "string")
            return EpisodeModel.unfreezeJson(data)
        else if (typeof data === "object")
            return EpisodeModel.unfreezeObject(data)
        else
            return null
    }

    private static unfreezeJson(json: string): EpisodeModel | null {
        if (!json)
            return null

        let parsedObject
        try {
            parsedObject = JSON.parse(json)
        } catch (e) {
            console.debug(`Couldn't parse ${EpisodeModel.name}.`, e)
            return null
        }

        return EpisodeModel.unfreezeObject(parsedObject)
    }

    private static unfreezeObject(data: any): EpisodeModel | null {
        if (!data)
            return null

        const { name, episode, watched, airDate } = data

        if (!name || !episode)
            return null

        const model = new EpisodeModel()

        model.name = name
        model.episode = episode
        model.watched = watched || false
        if (airDate) {
            const parsedAirdate = Date.parse(airDate)
            if (parsedAirdate) {
                model.airdate = new Date(parsedAirdate)
            }
        }

        return model
    }
}