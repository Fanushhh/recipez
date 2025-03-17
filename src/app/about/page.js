
import { redirect } from 'next/navigation';
import { auth } from '../auth';
const Page = async () => {
    const session = await auth();
    if(!session){
        redirect('/api/auth/signin?callbackUrl=/about');
    }
    return (
        <div>
            This is the about page
        </div>
    );
};

export default Page;