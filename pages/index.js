import Layout from './components/MyLayout';
import Link from 'next/link';
import useSWR from 'swr';
import MyAppStyles from './_app'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Header from './components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: 30,
    backgroundColor: "#6387A6"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: "#6387A6",
    fontSize: 8
  },
  image: {
    width: 128,
    height: 128,
  },


  img: {
    margin: 'auto',
    display: 'inline',
    maxWidth: '50%',
    maxHeight: '50%',
  },
 
}));

// function getPosts() {
//   return [
//     { id: 'Research', title: 'Research' },
//     { id: 'Development', title: 'Development' },
//     { id: 'Creative', title: 'Creative' }
//   ];
// }

function fetcher(url) {
    return fetch(url).then(r => r.json());
  }


export default function Blog() {
  const classes = useStyles();

  const { data, error } = useSWR('/api/randomQuote', fetcher);
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';


  return (
    <Container fixed>
   
  <div className={classes.root}>

    <h1 classNames={classes.root}>Matt Reilly</h1>
  
    <Layout>

      </Layout>
           </div>
    <div className="quote">{quote}</div>
    {author && <span className="author">- {author}</span>}

      </Container>
      );
}
