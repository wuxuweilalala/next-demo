import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default function x() {
  return (
    <>
      <Head>
        <title>我的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      First Post
      <br />
      <Link href="/"><a>回到首页</a></Link>
    </>

  )
}