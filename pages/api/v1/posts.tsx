import {  NextApiHandler } from "next";
import {getPosts} from '../../../libs/post';


const PostsIndex: NextApiHandler = async (req, res) => {
  const posts = await getPosts('markdown');
  console.log(posts);
  res.statusCode = 200;
  res.json(JSON.stringify(posts))
}

export default PostsIndex;