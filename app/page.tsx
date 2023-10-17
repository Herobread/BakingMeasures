'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import convert from '@/lib/converter/mlToBakingMeasure'
import { useState } from 'react'

export default function Home() {
	const [measurement, setMeasurement] = useState('')
	const result = measurement
		? convert(parseInt(measurement))
		: 'Enter number of ml, you want to convert'

	return (
		<main className="w-screen h-screen justify-center align-middle py-3 flex flex-col gap-5">
			<Card className="max-w-md mx-auto">
				<CardHeader>
					<h1 className="text-xl font-bold">
						Convert millilitres to baking measure
					</h1>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<Input
						type="number"
						value={measurement}
						onChange={(e) => {
							setMeasurement(e.target.value)
						}}
					/>
					{parseInt(measurement) > 2 && <p>{measurement} ml is</p>}
					<p className="font-bold">{result}</p>
				</CardContent>
			</Card>
		</main>
	)
}
