import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react'

export default function ContactSocials() {
    const socials = [
        {
            name: "Github",
            href: "https://github.com/devurmil",
            icon: <Github size={36} />
        },
        {
            name: "Linkedin",
            href: "https://linkedin.com/in/urmil-ramani-3a2236326",
            icon: <Linkedin size={36} />
        },
        {
            name: "Instagram",
            href: "https://instagram.com/mr_ramani_108/",
            icon: <Instagram size={36} />
        },
        {
            name: "Mail",
            href: "mailto:urmilramani124@gmail.com",
            icon: <Mail size={36} />
        },
        {
            name: "Whatsapp",
            href: "https://wa.me/919106589320",
            icon: <MessageCircle size={36} />
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-18 flex flex-col items-center gap-6"
        >
            <p className="text-gray-300 opacity-80 text-lg">
                Or connect with me here
            </p>

            <div className="flex max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl gap-8">
                {socials.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition transform hover:-translate-y-1"
                        aria-label={item.name}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </motion.div>
    )

}