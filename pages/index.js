
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div className="container">

      <main className='flex flex-col justify-center'>
        <h1 className='py-12 text-5xl text-orange-400'>
          Welcome to my Site
        </h1>

        <Counter pageName='home' />
      </main>


    </div>
  )
}
