import path from 'path';

import fs, {promises as fsPromise} from 'fs';
import matter from 'gray-matter';

export const getPosts = async (name: string) => {
    const markdownDir = path.join(process.cwd(), name);
    const fileNames = await fsPromise.readdir(markdownDir);
    const posts = fileNames.map(fileName => {
        const fullPath = path.join(markdownDir, fileName);
        const id = fileName.replace(/\.md$/g,'');
        const text = fs.readFileSync(fullPath, 'utf-8');
        const result = matter(text);
        const {data:{title,date},content} = matter(text);
        return {
            id,title,date,content
        }
    });
    return posts;
};