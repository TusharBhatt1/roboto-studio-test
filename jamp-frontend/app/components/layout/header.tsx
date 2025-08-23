import { Mail, Menu, Search } from "lucide-react";

export default function Header() {
    return (
        <nav className="p-4 flex justify-between fixed w-full bg-white z-50">
            <h1 className="font-bold sm:text-xl text-lg text-foreground">Jamp.</h1>
            <div className="flex items-center gap-4 text-roboto-gray">
                <Search />
                <Mail />
                <Menu />
            </div>
        </nav>
    )
}
