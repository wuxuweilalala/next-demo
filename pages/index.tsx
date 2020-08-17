import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import jpg from '../assets/1.jpg';
import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../libs/getDatabaseConnection';
import {Post} from '../src/entity/Post';
import {User} from '../src/entity/User';
import {Comment} from '../src/entity/Comment';
import {useEffect, useState} from 'react';

type Props = {
    posts: Post[],
}

const Home: NextPage<Props> = (props) => {
    const {posts} = props;
    return (
        <div>
            <h1>文章列表</h1>
            {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <a >{post.title}</a>
                </Link>
            ))}
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const connection = await getDatabaseConnection();
    console.log('connect');
    const posts = await connection.manager.find(Post);
    const users = await connection.manager.find(User);
    const comments = await connection.manager.find(Comment);
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    };
};