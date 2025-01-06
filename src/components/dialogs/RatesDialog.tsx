import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'

export function RatesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-lg border bg-card p-6 cursor-pointer hover:border-gray-400 transition-colors">
          <h3 className="text-sm font-medium">Satser</h3>
          <p className="text-2xl font-bold">View details</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Skattedirektoratets trekkfire satser – inn- og utland 2025</DialogTitle>
        </DialogHeader>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Døgndiett ved overnatting på hotell</TableCell>
              <TableCell className="text-right">678</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Døgndiett ved annen overnatting uten kokemuligheter (eks. pensjonat, hybel)</TableCell>
              <TableCell className="text-right">400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Døgndiett på yrkesreise/ tjenestereise ved annen overnatting med kokemuligheter (eks. hybel, brakke, privat overnatting)</TableCell>
              <TableCell className="text-right">105</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Døgndiett for langtransportsjåfører</TableCell>
              <TableCell className="text-right">400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dagdiett – f.o.m 6 til og med 12 timer</TableCell>
              <TableCell className="text-right">200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dagdiett – over 12 timer</TableCell>
              <TableCell className="text-right">400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nattillegg (gjelder kun reiser innland)</TableCell>
              <TableCell className="text-right">435</TableCell>
            </TableRow>
          </TableBody>
        </Table>

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