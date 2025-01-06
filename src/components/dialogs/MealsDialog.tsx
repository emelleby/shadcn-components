import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "../ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"
import { Button } from "../ui/button"

export function MealsDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="rounded-lg border bg-card p-6 cursor-pointer hover:border-gray-400 transition-colors">
					<h3 className="text-sm font-medium">Måltider inkludert</h3>
					<p className="text-2xl font-bold">Se detaljer</p>
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Diettgodtgjørelse</DialogTitle>
					<DialogDescription className="text-left pt-2">
						Det skal gjøres trekk i diettgodtgjørelsen hvis ett eller flere måltider dekkes av overnattingsstedet eller
						dekkes på annen måte. Trekket foretas med en prosentvis andel av gjeldende diettsats og gjelder både for
						dagsreiser og reiser med overnatting.
					</DialogDescription>
					<ul className="pt-2 space-y-1 text-sm text-left list-disc pl-6">
						<li>Trekk for frokost – 20 prosent</li>
						<li>Trekk for lunsj – 30 prosent</li>
						<li>Trekk for middag – 50 prosent</li>
					</ul>
					<DialogDescription className="text-left pt-2">
						Måltidstrekk skal kun foretas når måltidet er fullverdig. Dette betyr at snacks ikke regnes som normale
						måltider. Flymat regnes for eksempel ikke som et fullverdig måltid.
					</DialogDescription>
				</DialogHeader>

				<div>
					<h4 className="font-semibold">Eksempel</h4>
					<DialogDescription className="text-left pt-2">
						En ansatt er borte i 26 timer, overnatter på hotell, og får dekket en frokost og en lunsj på reisen. Dette
						kan utbetales trekkfritt:
					</DialogDescription>

					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Diettsats for hotellovernatting</TableCell>
								<TableCell className="text-right">678</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Trekk for frokost (20%)</TableCell>
								<TableCell className="text-right">-136</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Trekk for lunsj (30%)</TableCell>
								<TableCell className="text-right">-203</TableCell>
							</TableRow>
							<TableRow className="font-medium">
								<TableCell>Diettgodtgjørelse til utbetaling</TableCell>
								<TableCell className="text-right">339</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<a
					className="w-full sm:w-auto text-sky-600 mb-4"
					href="https://info.altinn.no/starte-og-drive/arbeidsforhold/lonn/reise-og-diett/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mer informasjon finnes her
				</a>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="default" className="w-full sm:w-auto">
							OK
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
