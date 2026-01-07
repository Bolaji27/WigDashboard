import { Mail } from 'lucide-react';
import { LockKeyhole  } from 'lucide-react';


export default function Login () {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 ">
        <h1 className='text-4xl'> Intern</h1>
        <form className="flex flex-col gap-12 w-full max-w-sm">
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 border items-center pr-2 rounded-md h-10 px-2'>
                <input name="email" type="text" placeholder="Email" className='flex-1 outline-none' />
                <Mail size={16}/>
            </div> 
            <div className='flex gap-2 border items-center pr-2 rounded-md h-10 px-2'>
                <input name="password" type="password" placeholder="Password" className='flex-1 outline-none bg-transparent' />
                <LockKeyhole size={16}/>
            </div> 
            </div>
            <button type="submit"  className='border h-10 rounded-full text-2xl items-center'>Login</button>
        </form>
        </div>
    )
}