import * as React from "react"
import { shallow, ShallowWrapper } from "enzyme"

import Input from "../../src/Components/Input"

describe("<Input />", () => {

	describe("default", () => {
		let html: ShallowWrapper

		beforeAll(() => {
			html = shallow(<Input />)
		})

		it("", () => {
			console.log(html.debug())
			fail()
		})

	})

})