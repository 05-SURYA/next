import {useSession, signIn} from 'next-auth/react';

const Dashboard = () => {
    const { data , status } =  useSession();
    if(status === 'loading') return <h1>Loading</h1>
    if(status === 'unauthenticated') {
        signIn()
    } else {
        return <h1>{data?.user?.name}</h1>
    }    
}
export default Dashboard;