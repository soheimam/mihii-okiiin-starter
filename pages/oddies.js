import Counter from '../components/Counter'

export default function Oddies() {
    return (
    <div className="container">
    <section className='flex flex-col justify-center'>
        <h1 className='py-12 text-5xl text-orange-400'>
            This is the oddies page
        </h1>

        <Counter pageName='Oddies'/>
    </section>


    </div>
)
}
