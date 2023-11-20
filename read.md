import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
    HiCheckCircle,
    HiOutlineEnvelope,
    HiOutlineMapPin,
} from "react-icons/hi2";

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                "service_sf8b2ti",
                "template_6wgy6nc",
                form.current,
                "4GbIsCzVifbY3ve0-"
            )
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                },
                (error) => {
                    setError(true);
                    setLoading(false);
                    console.error(error);
                }
            );
    };

    const contacts = [
        {
            name: "WhatsApp",
            description: "+55 31 9.8355-2544",
            link: "https://wa.me/5531983552544?text=Olá...",
            icon: <FaWhatsapp className="h-10 w-10" />,
        },
        {
            name: "Email",
            description: "kelvinclenderson95@gmail.com",
            link: "mailto:kelvinclenderson95@gmail.com?subject=Olá...",
            icon: <HiOutlineEnvelope className="h-10 w-10" />,
        },
        {
            name: "Belo Horizonte",
            description: "R. Maria da Matta Castro, 994 - Conj. Confisco",
            link: "https://www.google.com/maps/place/R.+Maria+da+Matta+Castro,+994+-+Conj.+Confisco,+Contagem+-+MG,+32113-585/@-19.866046,-44.021547,17z/data=!3m1!4b1!4m6!3m5!1s0xa693dfd8f8c9f9:0x7dff4d65516bf7ab!8m2!3d-19.866046!4d-44.021547!16s%2Fg%2F11f3nk1dgm?entry=ttu",
            icon: <HiOutlineMapPin className="h-10 w-10" />,
        },
    ];

    return (
        <section id="contact" className="bg-blue-700 text-white">
            <div className="container mx-auto max-w-4xl p-4 py-8">
                <div className="mb-6">
                    <h2 className="z-50 mb-2">
                        <span className="mr-2 font-headline text-3xl font-semibold">
                            Fale
                        </span>
                        <span className="font-handwriting text-4xl">
                            Comigo
                        </span>
                    </h2>
                    <p className="text-sm">
                        Entre em contato por formulário ou WhatsApp, com certeza
                        irei poder te ajudar.
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="basis-2/3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block ps-4 font-headline font-semibold"
                                >
                                    Mensagem:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-6 flex flex-col gap-4 md:flex-row">
                                <div className="flex-grow">
                                    <label
                                        htmlFor="fullName"
                                        className="mb-2 block ps-4 font-headline font-semibold"
                                    >
                                        Seu nome:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        required
                                    />
                                </div>
                                <div className="flex-grow">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block ps-4 font-headline font-semibold"
                                    >
                                        Seu email:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="button flex items-center gap-2 text-blue-700"
                                    disabled={loading}
                                >
                                    {loading && (
                                        <FaSpinner className="h-4 w-4 animate-spin" />
                                    )}
                                    {success && (
                                        <HiCheckCircle className="h-4 w-4" />
                                    )}
                                    Enviar mensagem
                                </button>

                                {error && (
                                    <p className="mt-2">
                                        Ocorreu um erro ao enviar a mensagem,
                                        tente novamente mais tarde.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="basis-1/3">
                        {contacts.map((contact, index) => (
                            <div
                                key={`contact-${index}`}
                                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                            >
                                {contact.icon}
                                <div>
                                    <p className="font-headline font-semibold">
                                        {contact.name}
                                    </p>
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        className="text-gray-300 underline underline-offset-2"
                                    >
                                        {contact.description}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
