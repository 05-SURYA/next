import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
const Navbar = () => {
    const { data, status } = useSession();
    return (
        <>
            <nav className='nav-header'>
                <h1 className='nav-logo'>NEXT-AUTH</h1>
                <ul className='nav-main'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    {status === 'unauthenticated' ?
                        <li>
                            <Link href="/api/auth/signin" legacyBehavior>
                                <a onClick={ (e)=> {
                                    e.preventDefault()
                                    signIn('github')
                                }}>SignIn</a>
                            </Link>
                        </li> :
                        <li>
                            <Link href="api/auth/signout" legacyBehavior>
                            <a onClick={ (e)=> {
                                    e.preventDefault()
                                    signOut()
                                }}>SignOut</a>
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;