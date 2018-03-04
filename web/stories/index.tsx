import * as React from "react"

import { storiesOf } from "@storybook/react"
import Input from "../src/Components/Input"

storiesOf("input", module)
	.add("default", () => <Input />)