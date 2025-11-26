import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#064C3B] border-b border-[#0A7A5E] shadow-[0_0_40px_-10px_#0A7A5E]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link 
          to="/" 
          className="text-2xl font-extrabold text-[#1BD69C] tracking-tight 
                     hover:text-white transition-all duration-300"
        >
          SkillSwap
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          {["Explore","Sessions","Mentors","About"].map((t,i)=>(
            <Link
              key={i}
              to={"/"+t.toLowerCase()}
              className="text-[#D8FFF4]/85 hover:text-[#1BD69C] 
                         hover:-translate-y-[2px] transition-all duration-300"
            >
              {t}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link className="text-[#D8FFF4]/80 hover:text-[#1BD69C] transition-all duration-300" to="/login">
            Login
          </Link>

          <Link 
            to="/signup"
            className="px-5 py-2 bg-[#15A57E] text-white font-bold rounded-md
                       shadow-lg hover:bg-[#0A7A5E] transition-all duration-300
                       hover:shadow-[0_0_22px_#1BD69C] hover:-translate-y-[3px]"
          >
            Join Now →
          </Link>
        </div>

        <button className="text-white text-2xl md:hidden">☰</button>
      </nav>
    </header>
  );
}
