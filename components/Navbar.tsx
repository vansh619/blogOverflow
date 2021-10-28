import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
   
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className='mx-2 cursor-pointer '
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()
   const [active, setActive] = useState('')

   useEffect(() => {
      if (pathname === '/') setActive('HOME')
      else if (pathname === '/Blogs') setActive('READ')
      else if (pathname === '/WriteBlog') setActive('WRITE')
   }, [])

   return (
      // active components
      <div className='sticky flex flex-row justify-between px-3 my-3 bg-transparent'>
         <span className='font-mono text-4xl font-bold text-white border-b-4 border-gray-900'>
            {active}
         </span>
      {/* inactive components */}

         <div className='flex font-mono text-3xl font-semibold text-gray-900'>
         <div className="hover:text-white">
            <NavItem
               active={active}
               setActive={setActive}
               name='HOME'
               route='/'
            />
            </div>
            <div className="hover:text-white">
            <NavItem
               active={active}
               setActive={setActive}
               name='READ'
               route='/Blogs'
            />
            </div>
            <div className="hover:text-white">
            <NavItem
               active={active}
               setActive={setActive}
               name='WRITE'
               route='/WriteBlog'
            />
            </div>
         </div>

      </div>
   )
}

export default Navbar;






