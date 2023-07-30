import { useState } from 'react'
import './App.css'
import HomePageAppbar from './components/HomePageAppbar/HomePageAppbar'
import { Container } from '@mui/material'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import { ArticleType } from './assets/Common/types'
import Signin from './components/authentication/Signin/Signin'
import Signup from './components/authentication/Signup/Signup'
// i want to import multiple image form the assets folder a one time
import a from './assets/images/a.jpg'
import b from './assets/images/b.jpg'
import c from './assets/images/c.jpg'
import d from './assets/images/d.jpg'
import e from './assets/images/e.jpg'
import f from './assets/images/f.jpg'




function App() {
  const [count, setCount] = useState(0);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const articles: ArticleType[] = [
    {
      image: a,
      smallImage: a,
      title: 'Article 1: Understanding React',
    },
    {
      image: b,
      smallImage: b,
      title: 'Article 2: Exploring TypeScript',
    },
    {
      image: c,
      smallImage: c,
      title: 'Article 3: Building with Material-UI',
    },
    {
      image: d,
      smallImage: d,
      title: 'Article 4: Best Practices in Web Design',
    },
    {
      image: e,
      smallImage: e,
      title: 'Article 5: Advanced JavaScript Techniques',
    },
    {
      image: f,
      smallImage: f,
      title: 'Article 6: Introduction to Redux',
    },
  ];

  const handleSignInOpen = () => {
     setSignIn(true);
  };

  const handleSignInClose = () => {
    setSignIn(false);
  };

  const handleSignUpOpen = () => {
    setSignUp(true);
  };

  const handleSignUpClose = () => {
    setSignUp(false);
  };

  return (
    <>
      <HomePageAppbar handleSignInOpen={handleSignInOpen}/>

      <Container maxWidth="lg">
        <FeaturedSection articles={articles} />
      </Container>

      <Signin open={signIn} handleSingInClose={handleSignInClose} />
      <Signup />
    </>
  )
}

export default App
