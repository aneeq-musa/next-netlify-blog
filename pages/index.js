import Head from 'next/head'
import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero/Hero'
import ArticleContainer from '@components/ArticlesContainer/ArticlesContainer'
import Article from '@components/Article/Article'
import ImageBanner from '@components/ImageBanner/ImageBanner'

export default function Home() {
  const articleHeading = [
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched"
  ];
  const articleHeading2 = [
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched",
    "Find out Why CAA's Roadside Assistance Program Is Unmatched"
  ]

  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero></Hero>
        <ArticleContainer heading={true}>
          {articleHeading.map( a => <Article /> )}
        </ArticleContainer>
        <ImageBanner/>
        <ArticleContainer>
          {articleHeading2.map(a => <Article />)}
        </ArticleContainer>
      </main>

      <Footer />
    </>
  )
}
