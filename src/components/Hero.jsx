import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="min-h-[88vh] w-full 
                        bg-gradient-to-br from-[#064C3B] via-[#0A7A5E] to-[#095B47]
                        flex items-center py-20">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="text-[#D8FFF4] space-y-5 drop-shadow-lg">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-snug">
                         Learn Faster. <br />
            Teach Better. <br />
                        <span className="text-[#1BD69C]">Exchange Skills.</span>
                    </h1>

                    <p className="max-w-lg text-lg text-[#D8FFF4]/90 leading-relaxed">
                         A community where teaching and learning coexist. Share knowledge, grow confidence — together.
                    </p>

                    <div className="flex gap-4 pt-4">

                        <Link
                            to="/signup"
                            className="px-6 py-3 bg-[#15A57E] text-white font-bold rounded-md
                         shadow-[0_0_20px_-2px_#15A57E] transition-all duration-300
                         hover:bg-[#1BD69C] hover:shadow-[0_0_35px_#1BD69C]
                         hover:scale-[1.06]"
                        >
                            Start Now →
                        </Link>

                        <Link
                            to="/explore"
                            className="px-6 py-3 border-2 border-[#1BD69C] text-[#D8FFF4] font-medium rounded-md
                        hover:bg-[#1BD69C]/15 hover:border-[#1BD69C] hover:scale-[1.05]
                        transition-all duration-300"
                        >
                            Browse Skills
                        </Link>

                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-[80%] md:w-[75%] p-6 rounded-2xl 
                          bg-[#0A7A5E]/40 backdrop-blur-xl shadow-[0_0_45px_-10px_#1BD69C]
                          hover:shadow-[0_0_65px_-5px_#1BD69C] hover:scale-[1.03]
                          transition-all duration-400">

                        <div className="h-56 md:h-64 rounded-xl 
                            bg-gradient-to-br from-[#15A57E] to-[#0E8B6C]
                            flex items-center justify-center text-white text-xl font-semibold">
                            IMAGE = Skill Growth Dashboard Preview
                        </div>

                        <div className="flex justify-between pt-3 text-[#D8FFF4]/85 text-sm">
                            <div>Users: <span className="text-[#1BD69C]">25.4k+</span></div>
                            <div>Rating: <span className="text-[#1BD69C]">4.9 STARS</span></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
