import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'

export function MealsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-lg border bg-card p-6 cursor-pointer hover:border-gray-400 transition-colors">
          <h3 className="text-sm font-medium">Meals included</h3>
          <p className="text-2xl font-bold">View details</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Meal Allowance</DialogTitle>
          <DialogDescription className="text-left pt-4">
            Deductions will be made from the diet allowance if one or more meals are covered by the accommodation or are paid for. The deduction is made as a percentage of the current diet allowance and applies to both day trips and trips with overnight stays.
          </DialogDescription>
          <ul className="pt-4 space-y-2 text-sm text-left list-disc pl-6">
            <li>Deduction for breakfast – 20 percent</li>
            <li>Deduction for lunch – 30 percent</li>
            <li>Deduction for dinner – 50 percent</li>
          </ul>
          <DialogDescription className="text-left pt-4">
            Meal allowance should only be deducted when the meal is complete. This means that snacks can be considered normal meals. Airplane food, for example, is not considered a full meal.
          </DialogDescription>
        </DialogHeader>

        <div className="pt-4">
          <h4 className="font-semibold mb-4">Example</h4>
          <p className="mb-4">An employee is away for 26 hours, stays at a hotel, and has breakfast and lunch covered on the trip. This can be calculated as follows:</p>
          
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Diet allowance for hotel stay</TableCell>
                <TableCell className="text-right">678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deduction for breakfast (20%)</TableCell>
                <TableCell className="text-right">-136</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deduction for lunch (30%)</TableCell>
                <TableCell className="text-right">-203</TableCell>
              </TableRow>
              <TableRow className="font-medium">
                <TableCell>Diet allowance for payment</TableCell>
                <TableCell className="text-right">339</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <a className="w-full sm:w-auto text-sky-600 mb-4" href="https://info.altinn.no/starte-og-drive/arbeidsforhold/lonn/reise-og-diett/">
            More information can be found here
        </a>

        <DialogFooter>
          
          <DialogClose asChild>
    <Button variant="default" className="w-full sm:w-auto">OK</Button>
  </DialogClose>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}