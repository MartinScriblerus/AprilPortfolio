import Layout from './components/MyLayout.js';

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
  return (
    <>
    <h1>Hello</h1>
    <Layout content={aboutPageContent} />;
  </>)}