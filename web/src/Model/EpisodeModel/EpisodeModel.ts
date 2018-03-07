export default class EpisodeModel {
    public name: string
    public airdate: Date
    public season: number
    public episode: number
    public watched: boolean

    constructor() {
    }

    static unfreeze(json: string): EpisodeModel | null {
        if (!json)
            return null

        const model = new EpisodeModel()

        return model
    }
}