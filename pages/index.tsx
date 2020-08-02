import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import jpg from '../assets/1.jpg';
import {GetServerSideProps, NextPage} from 'next';
import {UAParser} from 'ua-parser-js';

type Props = {
    browser: {
        name:string;
        version:string;
        major:string;
    }
}

const Home: NextPage<Props> = (props) => {

    return (
        <div className={styles.container}>
            <h1>你的瀏覽器是{props.browser.name}</h1>
            <Link href="/posts/first_post"><a>xxx</a></Link>
            <img style={{width: '200px'}} src={jpg} alt=""/>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ua = context.req.headers['user-agent'];
    const result = new UAParser(ua).getResult();
    return {
        props: {
            browser: result.browser
        }
    };
};