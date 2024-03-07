"use client";

import { FormValidator, FormValues } from '@/lib/validators/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from '../ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/Form';
import { Input } from '../ui/Input';
import SendButton from '../ui/SendButton';
import { Textarea } from '../ui/Textarea';
import AnimationContainer from '../utils/AnimationContainer';
import { cn } from '@/lib/utils';
import axios, { AxiosError } from 'axios';
import { motion } from 'framer-motion';
import { toast } from "sonner";

const ContactMe = () => {

    const form = useForm<FormValues>({
        resolver: zodResolver(FormValidator),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    });

    const [isSent, setIsSent] = useState(false);

    const { mutate: handleSubmit, isPending: isLoading } = useMutation({
        mutationFn: async ({
            name,
            email,
            phone,
            message
        }: FormValues) => {
            const payload: FormValues = {
                name,
                email,
                phone,
                message
            };

            const { data } = await axios.post('/api/contact', payload);

            return data;
        },
        onError: (error) => {
            if (error instanceof AxiosError) {
                console.error(error.message);
                toast("Something went wrong!", {
                    description: "Unable to send message, please try again.",
                });
            }
        },
        onSuccess: () => {
            form.reset();
            setTimeout(() => {
                setIsSent(true);
            }, 1000);
            toast("Your message has been received!", {
                description: "I got your message, I will get back to you soon!",
            });
        },
    });


    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <div className="flex-col items-center mb-8 lg:items-start">
                <h2 className='text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                    Get in Touch
                </h2>
                <p className="mt-2 font-normal text-center lg:text-start text-neutral-300">
                    Something on your mind? Feel free to drop me a message.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full gap-5 mb-8 lg:flex-row">
                    <Link href="mailto:sihasaneshreyas@gmail.com" className="flex-[0.5] w-full lg:w-auto">
                        <Button type='button' variant="outline" className="flex-col items-start w-full h-auto p-5 hover:scale-100">
                            <h6 className="text-base font-medium text-white">
                                Email
                            </h6>
                            <p className="mt-2 text-base text-neutral-300">
                                sihasaneshreyas@gmail.com
                            </p>
                        </Button>
                    </Link>
                    <Link href="https://wa.link/c8re0h" className="flex-[0.5] w-full lg:w-auto">
                        <Button type='button' variant="outline" className="flex-col items-start w-full h-auto p-5 hover:scale-100">
                            <h6 className="text-base font-medium text-white">
                                Phone
                            </h6>
                            <p className="mt-2 text-base text-neutral-300">
                                +91 932 235 63 92
                            </p>
                        </Button>
                    </Link>
                </div>

                <Form {...form}>

                    <form onSubmit={form.handleSubmit((e) => handleSubmit(e))} className="flex flex-col items-center justify-center w-full space-y-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                            type="text"
                                            placeholder="Name"
                                            autoComplete="off"
                                            className="h-12 px-5 capitalize outline-none"
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        <motion.span
                                            initial={{ opacity: 0, y: 0 }}
                                            animate={{ opacity: 1, y: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {form.formState.errors.name && form.formState.errors.name.message}
                                        </motion.span>
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className={cn("w-full mb-0",
                                        form.formState.errors.phone && "mb-5"
                                    )}>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isLoading}
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                autoComplete="off"
                                                className="h-12 px-5 outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            <motion.span
                                                initial={{ opacity: 0, y: 0 }}
                                                animate={{ opacity: 1, y: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {form.formState.errors.email && form.formState.errors.email.message}
                                            </motion.span>
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className={cn("w-full mb-0",
                                        form.formState.errors.email && "mb-5"
                                    )}>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isLoading}
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                autoComplete="off"
                                                className="h-12 px-5 outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage>
                                            <motion.span
                                                initial={{ opacity: 0, y: 0 }}
                                                animate={{ opacity: 1, y: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {form.formState.errors.phone && form.formState.errors.phone.message}
                                            </motion.span>
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            disabled={isLoading}
                                            required
                                            rows={5}
                                            name="message"
                                            placeholder="Message..."
                                            autoComplete="off"
                                            className="w-full p-5 outline-none resize-none"
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        <motion.span
                                            initial={{ opacity: 0, y: 0 }}
                                            animate={{ opacity: 1, y: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {form.formState.errors.message && form.formState.errors.message.message}
                                        </motion.span>
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-center w-full mx-auto">

                            <SendButton
                                isSent={isSent}
                                isLoading={isLoading}
                                setIsSent={setIsSent}
                                disabled={form.formState.disabled}
                            />

                        </div>
                    </form>

                </Form>
            </div>

        </AnimationContainer>
    )
}

export default ContactMe
