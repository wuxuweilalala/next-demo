import {NextPage} from 'next';
import {usePosts} from '../../hooks/usePosts';
import {getPosts} from '../../libs/post';


type Props = {
    posts:POST[]
}

const PostsIndex: NextPage<Props> = (props) => {
    const {posts} = props
    return (
        <div>
            Posts Index
            <h1>文章列表</h1>
            {
                posts.map(

                    (item, index) => (
                    <div key={item.id}>{item.id}:{item.title}</div>
                    )
                )
            }

        </div>
    );
};

export default PostsIndex;

export const getStaticProps = async ()=>{
    const posts = await getPosts('markdown')
    return {
        props:{
            posts
        }
    }
}