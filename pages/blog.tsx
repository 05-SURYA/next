import { getSession } from 'next-auth/react';
const Blog = ({data}:any) => {
    return <h1> {data} </h1>
}

export default Blog;

export const getServerSideProps = async (context:any) => {
    const session = await getSession(context);
    if(!session){
        return {
            redirect: {
                destination : '/api/auth/signin?callbackUrl=http:3000/blog'
            }
        }
    }
    return {
        props: {
            data : session ? 'personalise data' : 'common data',
            session
        }
    }
}