import { useState } from 'react'
import HomePageAppbar from '../HomePageAppbar/HomePageAppbar';
import { Container } from '@mui/material'
import FeaturedSection from '../FeaturedSection/FeaturedSection'
import { ArticleType } from '../../assets/Common/types'
import Signin from '../authentication/Signin/Signin'
import Signup from '../authentication/Signup/Signup'
// i want to import multiple image form the assets folder a one time
import a from '../../assets/images/a.jpg'
import b from '../../assets/images/b.jpg'
import c from '../../assets/images/c.jpg'
import d from '../../assets/images/d.jpg'
import e from '../../assets/images/e.jpg'
import f from '../../assets/images/f.jpg'
import axios from 'axios';

function StartingComponent() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<any>(null);
  
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

  const handleSignInClose = async (username: string, password: string) => {
    try {
        // Make an API call to the login endpoint
        const response = await axios.post(' http://localhost:3000/users/login', { username, password });
  
        // Handle successful login
        if (response.status === 200) {
          // Store the user's details and tokens
          setAuthenticatedUser({
            // username: response.data.username,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          });
  
          // You might want to store the token in local storage as well, depending on your use case
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
  
          // Close the sign-in dialog
          alert('Login successful!');
          setSignIn(false);
        }
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        // Optionally, you can set an error message in the state to display to the user
      }
    setSignIn(false);
  };

  const handleSignUpOpen = () => {
    setSignUp(true);
  };

  const handleSignUpClose = async (username: string, password: string) => {
    try {
        // Make an API call to the signup endpoint
        const response = await axios.post(' http://localhost:3000/users/signup', { username, password });
  
        // Handle successful signup
        if (response.status === 201) {
          // Store the user's details and tokens
        //   setAuthenticatedUser({
        //     // username: response.data.username,
        //     accessToken: response.data.accessToken,
        //     refreshToken: response.data.refreshToken,
        //   });
  
        //   // You might want to store the token in local storage as well, depending on your use case
        //   localStorage.setItem('accessToken', response.data.accessToken);
        //   localStorage.setItem('refreshToken', response.data.refreshToken);
  
          // Close the sign-up dialog
          alert('Sign up successful!');
          setSignUp(false);
        }
    }
    catch (error) {
        console.error('Sign up failed:', error);
        // Optionally, you can set an error message in the state to display to the user
    }
    setSignUp(false);
  };

  return (
    <>
      <HomePageAppbar handleSignInOpen={handleSignInOpen} handleSignUpOpen={handleSignUpOpen}/>

      <Container maxWidth="lg">
        <FeaturedSection articles={articles} />
      </Container>

      <Signin open={signIn} handleSingInClose={handleSignInClose} />
      <Signup open={signUp} handleSignUpClose={handleSignUpClose}/>
    </>
  )
}

export default StartingComponent