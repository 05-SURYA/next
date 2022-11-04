import { useSession } from 'next-auth/react';
const About = () => {
    const { data, status } = useSession();
    return (
        <>
            { status === 'authenticated' ? <h1>{data.user?.name} Data</h1>:<h1> Common Data</h1>}
        </>
    )
}

export default About;