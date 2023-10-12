import Image from 'next/image'
import Trending from './(home)/Trending'
import Tech from './(home)/Tech'
import Travel from './(home)/Travel'

export default function Home() {
  return (
    <main className="px-10 leading-7">
    <Trending  />
    <div className="md:flex gap-10 mb-5">
      <div className="basis-3/4">
      <Tech />
      <Travel/>
        <div className="hidden md:block">
      
        T</div>
      </div>
      <div className="basis-1/4">
        
      </div>
    </div>
  </main>  
  )
}
