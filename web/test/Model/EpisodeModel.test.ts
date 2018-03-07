import EpisodeModel from "../../src/Model/EpisodeModel"

describe(EpisodeModel.name, () => {

	describe(`${EpisodeModel.unfreeze.name}(json: string): ${EpisodeModel.name}`, () => {

		beforeAll(() => {
		})

		const nullCase = (value: string) => {
			describe(`json = ${typeof value === "object" ? value : `"${value}"`}`, () => {
				it(`should return ${null}`, () => {
					const model: EpisodeModel = EpisodeModel.unfreeze(value)
					expect(model).toBeNull()
				})
			})
		}

		nullCase(null)
		nullCase("")
		nullCase("null")
		nullCase("{}")

	})

})