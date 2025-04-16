"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {z} from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MainContactSchema } from "@/types"



export const MainContact = () => {


    const form = useForm<z.infer<typeof MainContactSchema>>({
        resolver: zodResolver(MainContactSchema),
        defaultValues: {
            date: "",
            dateTime: "",
            email: "",
            name: "",
            phone: "",
        }
    })

    function onSubmit(values: z.infer<typeof MainContactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


  return (
    <div className="container mx-auto px-4 max-w-[1400px] mb-32">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 lg:gap-24 lg:pr-10">
            <div className="space-y-2 flex-1/2">
                <h3 className="text-3xl md:text-4xl text-in-blue-light font-medium text-center md:text-left">Da el primer paso hacia tu bienestar</h3>
                <p className="text-center text-in-base md:text-left">Agenda tu evaluación inicial con nuestros especialistas en Quito y recibe una atención personalizada desde el primer día.</p>
            </div>
            <Form {...form}>
                <form className="rounded-xl p-4 space-y-4 max-w-[600px] flex-1/2 shadow-[0_0_1000px_60px_rgba(214,245,241,1)]" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="border-in-blue text-in-base py-6" placeholder="Nombres y Apellidos" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-4 ">
                        <div className="md:flex-1/2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="border-in-blue text-in-base py-6" placeholder="Correo Electrónico" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:flex-1/2">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="border-in-blue text-in-base py-6" placeholder="Teléfono" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        
                    </div>

                    <FormField
                        control={form.control}
                        name="date" 
                        render={({field}) => (
                            <FormItem className="flex flex-col gap-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className={cn("w-full py-6 text-in-base border-in-blue justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                            {field.value ? format(field.value, "dd/MM/yyyy") : <span>Fecha de la cita</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-80 text-in-orange" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar  mode="single" selected={field.value ? new Date(field.value) : undefined} onSelect={(date) => field.onChange(date?.toISOString())} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateTime"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="border-in-blue text-in-base py-6 w-full" type="time" placeholder="Hora" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                    />
                    <div className="flex flex-col item-center">
                        <Button className="bg-in-orange hover:bg-in-orange/90 cursor-pointer w-full rounded-3xl font-semibold mb-2 md:py-6" type="submit">¡Reserva tu cita ahora!</Button>
                        <p className="px-2 text-in-base text-sm">Al llenar el formulario, Ud. acepta los Términos y Condiciones / Política de Privacidad</p>
                    </div>
                </form>
            </Form>
        </div>
        
    </div>
  )
}
