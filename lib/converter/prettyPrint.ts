export function prettyPrint(
	cups: number,
	tablespoons: number,
	teaspoons: number
) {
	const formattedMeasures: string[] = []

	// Formatting values one by one and adding them to formattedMeasures array
	if (cups !== 0) {
		formattedMeasures.push(prettyPrintOneMeasure(cups, 'cup'))
	}

	if (tablespoons !== 0) {
		formattedMeasures.push(prettyPrintOneMeasure(tablespoons, 'tablespoon'))
	}

	if (teaspoons !== 0) {
		formattedMeasures.push(prettyPrintOneMeasure(teaspoons, 'teaspoon'))
	}

	// Joining the formatted values: adding a comma and/or "and" if needed
	let joinedOutput = ''

	switch (formattedMeasures.length) {
		case 1:
			joinedOutput = formattedMeasures[0]
			break
		case 2:
			joinedOutput = formattedMeasures[0] + ' and ' + formattedMeasures[1]
			break
		case 3:
			joinedOutput =
				formattedMeasures[0] +
				', ' +
				formattedMeasures[1] +
				' and ' +
				formattedMeasures[2]
			break
		default:
			joinedOutput = 'Nothing is needed'
			break
	}

	return joinedOutput
}

/**
 * Formats a measure depending on the amount, making the string empty if there are none.
 *
 * @param amount The amount of the measure.
 * @param name   The name of the measure.
 * @return A formatted string representing the measure.
 */
function prettyPrintOneMeasure(amount: number, name: string) {
	if (amount === 0) {
		return ''
	}

	if (amount === 1) {
		return amount + ' ' + name
	}

	return amount + ' ' + name + 's'
}
