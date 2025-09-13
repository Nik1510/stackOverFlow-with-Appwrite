const env={
    appwrite:{
        endpoint :String(process.env.NEXT_PUBLIC_APPPWRITE_HOST_URL),
        projectId:String(process.env.NEXT_PUBLIC_APPPWRITE_PEOJECT_ID),
        apikey:String(process.env.APPWRITE_API_KEY)
    }
}

export default env;