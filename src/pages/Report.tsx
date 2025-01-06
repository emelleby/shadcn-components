import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpenseChart } from "@/components/ExpenseChart"
import { RecentExpenses } from "@/components/RecentExpenses"
import { sampleData } from "@/data/sampleData"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const DateRangeDisplay = () => {
	// Sort data by date
	const sortedData = [...sampleData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

	// Extract the first and last dates
	const firstDate = new Date(sortedData[0].date)
	const lastDate = new Date(sortedData[sortedData.length - 1].date)

	// Format the dates to 'DD.MM.YYYY'
	const formatDate = (date: Date): string => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

	// Construct the date range string
	const dateRange = `${formatDate(firstDate)} - ${formatDate(lastDate)}`

	return <div>{dateRange}</div>
}

export function Report() {
	return (
		<div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8 space-y-8">
			<h1 className="text-3xl font-bold">Report for Business Trip</h1>
			<div>{DateRangeDisplay()}</div>

			<Tabs defaultValue="expenses">
				<TabsList className="px-3 py-2 h-11 w-full">
					<TabsTrigger value="expenses" className="w-full text-base">
						Expenses
					</TabsTrigger>
					<TabsTrigger value="emissions" className="w-full text-base">
						Emissions
					</TabsTrigger>
				</TabsList>

				<div className="mt-8">
					<TabsContent value="expenses">
						<div className="grid gap-4 md:grid-cols-2">
							<ExpenseChart data={sampleData} type="amount" />
							<RecentExpenses expenses={sampleData} displayType="amount" />
						</div>
					</TabsContent>

					<TabsContent value="emissions">
						<div className="grid gap-4 md:grid-cols-2">
							<ExpenseChart data={sampleData} type="emissions" />
							<RecentExpenses expenses={sampleData} displayType="emissions" />
						</div>
					</TabsContent>
				</div>
			</Tabs>

			<div className="flex justify-center">
				<Link to="/trip-report/details">
					<Button>View Details Table</Button>
				</Link>
			</div>
		</div>
	)
}
