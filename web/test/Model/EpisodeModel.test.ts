import EpisodeModel from "../../src/Model/EpisodeModel"

describe(EpisodeModel.name, () => {

	describe(`${EpisodeModel.unfreeze.name}(data: string): ${EpisodeModel.name}`, () => {

		beforeAll(() => {
		})

		const nullCase = (value: string) => {
			describe(`data = ${typeof value === "object" ? value : `"${value}"`}`, () => {
				it(`should return ${null}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(value)
					expect(model).toBeNull()
				})
			})
		}

		nullCase(null)
		nullCase(undefined)
		nullCase(``)
		nullCase(`null`)
		nullCase(`{}`)
		nullCase(`{ "name": "a episode name" }`)
		nullCase(`{ "name": "a episode name", "watched": true }`)
		nullCase(`{ "name": "a episode name", "airDate": "12-12-12" }`)
		nullCase(`{ "airDate": "12-12-12" }`)
		nullCase(`{ "watched": true }`)
		nullCase(`{ "episode": 2 }`)
		nullCase(`{ "episode": 2, "watched": true }`)
		nullCase(`{ "episode": 2, "airDate": "12-12-12" }`)
		nullCase(JSON.parse(`{ "name": "a episode name", "airDate": "12-12-12" }`))

		const nameEpisodeCase = () => {
			const value: any = { name: "a_name", episode: 1 }
			const stringifiedValue = JSON.stringify(value)
			describe(`data = "${stringifiedValue}"`, () => {
				it(`should return a model with name = ${value.name}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.name).toBe(value.name)
				})
				it(`should return a model with episode = ${value.episode}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.episode).toBe(value.episode)
				})
				it(`should return a model with watched = ${false}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.watched).toBe(false)
				})
				it(`should return a model with airdate = ${null}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.airdate).toBeNull()
				})
			})
		}
		nameEpisodeCase()

		const nameEpisodeWatchedCase = () => {
			const value = { name: "a_name", episode: 1, watched: true }
			const stringifiedValue = JSON.stringify(value)
			describe(`data = "${stringifiedValue}"`, () => {
				it(`should return a model with watched = ${value.watched}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.watched).toBe(value.watched)
				})
				it(`should return a model with airdate = ${null}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.airdate).toBeNull()
				})
			})
		}
		nameEpisodeWatchedCase()

		const nameEpisodeAirDateCase = () => {
			const value = { name: "a_name", episode: 1, airDate: "2012-10-24" }
			const stringifiedValue = JSON.stringify(value)
			describe(`data = "${stringifiedValue}"`, () => {
				it(`should return a model with airdate = ${value.airDate}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.airdate).toEqual(new Date(Date.parse(value.airDate)))
				})
			})
		}
		nameEpisodeAirDateCase()

		const nameEpisodeUnusuableAirDateCase = () => {
			const value = { name: "a_name", episode: 1, airDate: "asdfwhat" }
			const stringifiedValue = JSON.stringify(value)
			describe(`data = "${stringifiedValue}"`, () => {
				it(`should return a model with airdate = ${null}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(stringifiedValue)
					expect(model.airdate).toBeNull()
				})
			})
		}
		nameEpisodeUnusuableAirDateCase()

		describe(`data = "{ { \\ }}}}"`, () => {
			let debugSpy: jasmine.Spy

			beforeEach(() => {
				debugSpy = spyOn(console, "debug")
			})

			it(`should return null after data parse error`, () => {
				const model: EpisodeModel = EpisodeModel.unfreeze("{ { \\ }}}}")
				expect(model).toBeNull()
			})

			it(`should call console.debug 1 time`, () => {
				const model: EpisodeModel = EpisodeModel.unfreeze("{ { \\ }}}}")
				expect(debugSpy).toHaveBeenCalledTimes(1)
			})
		})
	})
})