'use client'
import { buttonVariants } from "@/components/ui/button"
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function SearchBar() {
  const [searchVal, setsearchVal] = useState('')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search size={23} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-[#3BB77E]">Search Products</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input placeholder="Enter Product Name" className="col-span-3" value={searchVal} onChange={(e)=>setsearchVal(e.target.value)} />
            <Link href={`/search?query=${searchVal}`} className={buttonVariants({
              variant:'outline',
            })}><Search size={21}/></Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
