import { Suspense } from 'react';
import Comments from './Comments';
const getComments = async () => {
    const res = (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
    return res;
};
function Page() {
    const commentsPromise = getComments();
    return (
        <div>
            <Suspense fallback={<p>Loading Comments...</p>}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export default Page;
