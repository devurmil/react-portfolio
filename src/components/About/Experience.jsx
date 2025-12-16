import {motion} from 'framer-motion'

function Experience() {
    return (
        <section className="pt-10 pb-24">
            <h2 className="text-gray-300 text-3xl font-bold mb-12 text-left">Experience</h2>
            <motion.div
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="transform-gpu bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto"
                >
                    <h3 className="text-gray-300 text-2xl font-semibold mb-2">React.js Intern</h3>
                    <p className="text-gray-400 mb-4">React.js Intern</p>

                    <ul className='list-disc list-inside space-y-2 text-gray-300'>
                        <li>Built reusable React components</li>
                        <li>Integrated REST APIs</li>
                        <li>Implemented routing and state management</li>
                        <li>Focused on performance & clean code</li>
                    </ul>
            </motion.div>
        </section>
    )
}

export default Experience;