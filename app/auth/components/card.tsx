"use client"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Card = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('register');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])
    const handleClick = () => {
        console.log("dasda");
        alert("asd")
    }
    return (
        <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 md:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                    {variant === 'login' ? 'Sign in' : 'Register'}
                </h2>
                <div className="flex flex-col gap-4">
                    {variant === 'register' && (
                        <Input
                            id="name"
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                        />
                    )}
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email address or phone number"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                </div>
                <Button onClick={handleClick} variant="destructive" className="py-3 rounded-md w-full mt-10 ">
                    {variant === 'login' ? 'Login' : 'Sign up'}
                </Button>
                <p className="text-neutral-500 mt-12">
                    {variant === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
                    <Button variant="link" onClick={toggleVariant} className="text-white hover:underline cursor-pointer">
                        {variant === 'login' ? 'Create an account' : 'Login'}
                    </Button>
                </p>
            </div>
        </div>
    )
}