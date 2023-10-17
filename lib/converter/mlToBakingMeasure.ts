import { prettyPrint } from './prettyPrint'

export default function convert(millilitres: number) {
	if (millilitres <= 2) {
		return 'Enter 2 or more millillitres'
	}

	const TEASPOON_CAPACITY_ML = 4.9289
	const TEASPOONS_IN_TABLESPOONS = 3
	const TABLESPOONS_IN_CUPS = 16

	let teaspoons = Math.round(millilitres / TEASPOON_CAPACITY_ML)

	let tablespoons = Math.floor(teaspoons / TEASPOONS_IN_TABLESPOONS)
	teaspoons %= TEASPOONS_IN_TABLESPOONS

	const cups = Math.floor(tablespoons / TABLESPOONS_IN_CUPS)
	tablespoons %= TABLESPOONS_IN_CUPS

	return prettyPrint(cups, tablespoons, teaspoons)
}
