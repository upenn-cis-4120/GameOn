import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    async function login(formData: FormData) {
        "use server"
        // This is just a placeholder action that redirects to /home
        redirect("/home")
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <div className="w-full max-w-md space-y-8 px-4">
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src="/GAMEON.png"
                        alt="GAMEON Logo"
                        width={200}
                        height={50}
                        priority
                        className="h-12 w-auto"
                    />
                    <Image
                        src="/Star.png"
                        alt="Star Icon"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <form action={login} className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md">
                        <div>
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                            Sign in
                        </Button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

