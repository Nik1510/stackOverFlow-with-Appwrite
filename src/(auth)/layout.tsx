"use client";
import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/router";
import React from "react";


const Layout =({childern}:(children:React.ReactNode))=>{

    const {session}= useAuthStore();
    const router = useRouter();

    React.useEffect(()=>{
        if(session){
            router.push('/')
        }
    
    },[session,router])

    if(session){
        return null
    }
    return (
        <div>
            <div>
                {childern}
            </div>
        </div>
    )
}

export default Layout