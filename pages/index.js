import Head from 'next/head'
import Layout from '../components/layout'
import { Container, ContentContainer, BottomContainer } from '../components/container'
import Button from '../components/button'
import A from '../components/a'
import { H2, Card } from '../components/paragraphs'
import { LightText } from '../components/inline'

const mywork = [
  {
    id: 'front-end-job-interview',
    date: 'Sept 2017',
    title: 'Take-away project for a "front-end" job interview',
    link: 'articles?id=front-end-job-interview'
  },
  {
    id: 'ocr-neural-network',
    date: '2013',
    title: 'OCR with Artificial Neural Networks (in french)',
    url: 'https://drive.google.com/file/d/0B9XryYiAipZ_a0w0b25BYkE4cTg/view'
  },
  {
    id: 'electric-guitar',
    date: '2010',
    title: 'Understanding how an electric guitar work (in french)',
    url: 'http://sculsnay.free.fr/tpe/index.html'
  }
]

const links = [
  {
    id: 'submithub',
    title: 'Submithub on IndieHackers',
    url: 'https://www.indiehackers.com/businesses/submithub',
    about: 'I always wanted to build something related to music. I think this idea is brilliant.'
  },
  {
    id: 'visited-hack',
    title: 'I know what you :visited by Pierre Reimertz',
    url: 'https://www.youtube.com/watch?v=LHu8rwLK5sA',
    about: 'Cool hack.'
  },
  {
    id: 'spotify-brand',
    title: 'My work with Spotify by Rasmus Andersson',
    url: 'https://rsms.me/about/spotify/',
    about: 'Rasmus Andersson explains how he created the first version of the Spotify brand.'
  }
]

export default () => (
  <Layout>
    <Head>
      <title>Luc Leray</title>
    </Head>

    <ContentContainer>
      <H2>☻ Me</H2>

      <Card>
        Hello. My name is Luc Leray.
      </Card>

      <Card>
        I am currently working as a Freelance Full Stack Developer.
      </Card>

      <Card>
        Previously, I worked as a Full Stack Developer at <A newtab href='https://www.supahands.com/'>Supahands</A>.
      </Card>

      <Card>
        I started learning about
        websites <A newtab href='http://lu.leray.free.fr/acceuil.html'>13 years ago</A> with
        XHMTL, <A newtab href='https://notepad-plus-plus.org/'>Notepad++</A> and <A newtab href='http://www.easyphp.org/'>EasyPHP</A>.
      </Card>

      <Card>
        I now work on Front-end, Back-end and Data Analysis.<br />
        You can read more in my <A href='static/resume-luc-leray.pdf'>CV</A> ✍.
      </Card>

      <Card>
        I am on <A href='https://www.linkedin.com/in/lucleray/'>LinkedIn</A>, <A href='https://github.com/lucleray'>Github</A>, <A href='https://www.instagram.com/lucleray/'>Instagram</A>, <A href='https://twitter.com/lucleray'>Twitter</A>.
      </Card>
    </ContentContainer>

    <ContentContainer>
      <H2>My work</H2>
      {mywork.map(work => (
        <Card key={work.id}>
          {work.date} ∙ <A newtab={!!work.url} href={work.url} link={work.link}>{work.title}</A>
        </Card>
      ))}
      {/* <Container align='center'>
        <Button>Read more</Button>
      </Container> */}
    </ContentContainer>

    <ContentContainer>
      <H2>Links I like</H2>
      {links.map(link => (
        <Card key={link.id}>
          <A newtab href={link.url}>{link.title}</A> {link.about}
        </Card>
      ))}
      {/* <Container align='center'>
        <Button>Read more</Button>
      </Container> */}
    </ContentContainer>

    <BottomContainer align='center'>
      <LightText>
        Made with next.js ・ <A newtab color='lightFg2' href='https://github.com/lucleray/lucleray.me'>Code on Github</A>
      </LightText>
    </BottomContainer>
  </Layout>
)
