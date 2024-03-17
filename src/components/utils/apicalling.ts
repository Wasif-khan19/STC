export async function allProductFetcherFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function dessertsProductsFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Desserts%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function riceProductsFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Rice%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function spicesProductsFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Spices%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function saucesProductsFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Sauces%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function oilProductsFromSanity(){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Oil+and+Ghees%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`,{
        next:{
            revalidate:60
        }
    })
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function searchProductsFromSanity(search: string){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+productname+match+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`)
    if (!res.ok) {
        return "Error"
    }
    return res.json();
}

export async function detailOfSingleProductsFromSanity(search: string){
    const res = await fetch (`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-02-27/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++quantity%2C%0A++++price%2C%0A++++slug%2C%0A++++weight%2C%0A++++description%2C%0A++producttype%2c_id%0A%7D`)
    if (!res.ok) {
        return "Error"
    }
    await new Promise((res)=> setTimeout(res, 200))
    return res.json();
}

export async function getAllCartProductsByUserid(userId:string){
    const res =  await fetch (`https://sarastrading.vercel.app/api/cartfunc${userId}`)
    if(!res.ok){
        return "Error"
    }
    // await new Promise((res)=> setTimeout(res, 200))
    return res.json();
}