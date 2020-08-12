import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import jpg from '../assets/1.jpg';
import {GetServerSideProps, NextPage} from 'next';
import {UAParser} from 'ua-parser-js';
import {getDatabaseConnection} from '../libs/getDatabaseConnection';
import {Post} from '../src/entity/Post';
import {User} from '../src/entity/User';
import {Comment} from '../src/entity/Comment';
import {useEffect, useState} from 'react';

type Props = {
    posts:Post[],
}

const Home: NextPage<Props> = (props) => {
    const {posts} = props;
    return (
        <div className={styles.container}>
            {posts.map((post)=>(
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const connection = await getDatabaseConnection();
    console.log('connect');
    const posts =await connection.manager.find(Post)
    const users =await connection.manager.find(User)
    const comments =await connection.manager.find(Comment)
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    };
};