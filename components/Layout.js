export default function Layout({ children }) {
    return (
        <>
        <main className='container h-screen mx-auto bg-pink-500 lg:bg-fuchsia-100'>
            {children}
        </main>
        </>
    )
}