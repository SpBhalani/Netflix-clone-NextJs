import { Card } from "./components/card";

export default function Auth() {

    return (
        <div className="relative h-screen w-full bg-[url('/Images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full md:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/Images/logo.png" className="h-12" alt="Logo" />
                </nav>
               <Card />
            </div>
        </div>
    )
}
