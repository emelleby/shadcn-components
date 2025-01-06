import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog"
import { MealsDialog } from "@/components/dialogs/MealsDialog"
import { RatesDialog } from "@/components/dialogs/RatesDialog"

export function Dialogs() {
	return (
		<div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8 space-y-8">
			<h1 className="text-3xl font-bold">Dialog Examples</h1>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Basic Dialog</CardTitle>
					</CardHeader>
					<CardContent>
						<Dialog>
							<DialogTrigger asChild>
								<Button variant="outline">Open Dialog</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Welcome to this Dialog</DialogTitle>
									<DialogDescription>
										This is a basic dialog example showing how to create simple modal interactions. You can use dialogs
										to show important information or get user input.
									</DialogDescription>
								</DialogHeader>
								<DialogFooter>
									<DialogClose asChild>
										<Button>Close</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</CardContent>
				</Card>
				<MealsDialog />
				<RatesDialog />
			</div>
		</div>
	)
}
