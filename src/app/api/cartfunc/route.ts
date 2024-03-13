import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export async function GET (req: NextRequest){
    let url = req.nextUrl.searchParams;
    try {
        if(url.has('userid')){
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, (url.get('userid'))as string))
            return NextResponse.json
        }else{
            throw new Error('user id not found')
        }
    } catch (error) {
        let rr = (error as {message:string}).message
        return NextResponse.json({error: rr})
        
    }
    
    return NextResponse.json({message: 'HI'})
}