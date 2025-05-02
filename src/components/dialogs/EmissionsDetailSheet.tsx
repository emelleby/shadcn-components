import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { TableDemo } from "@/components/Table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function EmissionsDetailSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="rounded-lg border bg-card p-6 cursor-pointer hover:border-gray-400 transition-colors">
          <h3 className="text-sm font-medium">Emissions Details</h3>
          <p className="text-2xl font-bold">Edit Scope Data</p>
        </div>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[800px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit Detail of 2014681.1</SheetTitle>
        </SheetHeader>

        <div className="grid gap-6 py-4">


          {/* Two-column layout for description and emissions table */}
          <div className="grid grid-cols-6  gap-6">
            {/* Left column - Description */}
            {/* Info box */}
            <div className="flex flex-col md:col-span-4 gap-y-4">
              <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 rounded-md p-4 text-blue-800">
                <p>
                  Her kan du redigere scope 1 - direkte utslipp. Forbrenning i produksjon og fra egne
                  transportmidler samt prosess- og flyktige utslipp. Prosessutslipp er avgasssing fra
                  produksjonsprosesser som må måles spesielt. Flyktige utslipp er som regel
                  lekkasjer fra kjølemedier
                </p>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="text-sm font-medium mb-2 block">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Enter description"
                  className="min-h-[100px]"
                  defaultValue="Inngående faktura, Korreksjon, Automatgenerert, Inngående faktura, Automatgenerert, Tilbakeført, Tilbakeført"
                />
              </div>
            </div>

            {/* Right column - Emissions table */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <TableDemo />
              </div>
            </div>
          </div>

          {/* Period selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Period
            </label>
            <div className="inline-block relative">
              <select className="h-9 w-[150px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pr-8">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <span className="ml-4 text-sm font-medium">2023</span>
          </div>

          {/* Scope tabs */}
          <div>
            <Tabs defaultValue="scope1">
              <TabsList className="w-full grid grid-cols-3 h-10">
                <TabsTrigger value="scope1" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">Scope 1</TabsTrigger>
                <TabsTrigger value="scope2">Scope 2</TabsTrigger>
                <TabsTrigger value="scope3">Scope 3</TabsTrigger>
              </TabsList>

              <TabsContent value="scope1" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Utslipp fra forbrenning</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Fuel Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Natural Gas</option>
                              <option>Diesel</option>
                              <option>Gasoline</option>
                              <option>Coal</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Amount</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">liters</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Notes</label>
                          <input
                            type="text"
                            className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            placeholder="Add notes here"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Utslipp fra kjøretøy</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Vehicle Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Passenger Car</option>
                              <option>Light Duty Truck</option>
                              <option>Heavy Duty Truck</option>
                              <option>Bus</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Distance</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">km</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Prosess og flyktige utslipp</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Process Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Refrigerant Leakage</option>
                              <option>Chemical Process</option>
                              <option>Manufacturing Process</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Emissions Factor</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">kg CO2e</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-md">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Andre scope 1 utslipp</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Description</label>
                          <Textarea
                            className="min-h-[80px]"
                            placeholder="Describe other Scope 1 emissions"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Emissions Amount</label>
                          <div className="flex items-center">
                            <input
                              type="number"
                              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              placeholder="0.00"
                            />
                            <span className="ml-2 text-sm text-gray-500">kg CO2e</span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="scope2" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Purchased Electricity</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Source</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Grid Electricity</option>
                              <option>Renewable Energy</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Amount</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">kWh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-md">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Purchased Heat</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>District Heating</option>
                              <option>Steam</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Amount</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">kWh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="scope3" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Business Travel</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Travel Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Air Travel</option>
                              <option>Rail Travel</option>
                              <option>Taxi</option>
                              <option>Hotel Stay</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Distance/Amount</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">km/nights</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-md mb-3">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Purchased Goods & Services</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Category</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Raw Materials</option>
                              <option>Office Supplies</option>
                              <option>IT Equipment</option>
                              <option>Professional Services</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Spend Amount</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">NOK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-md">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <span className="font-medium">Waste Generated</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Waste Type</label>
                            <select className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              <option>Landfill</option>
                              <option>Recycled</option>
                              <option>Composted</option>
                              <option>Incinerated</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Weight</label>
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="0.00"
                              />
                              <span className="ml-2 text-sm text-gray-500">kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <SheetFooter className="mt-8">
          <SheetClose asChild>
            <Button variant="outline" className="mr-2">Avbryt</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Lagre</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default EmissionsDetailSheet;
