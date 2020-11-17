import * as React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {JavaScript, Python, TypeScript} from "../components/profiles/Language";
import Project from '../components/projects/simple';

import './index.css';

const IndexPage = () => {
  const highlighted = useStaticQuery(graphql`
      query {
          allProjectsJson(filter: {isHighlighted: {eq: true}}, limit: 3) {
              nodes {
                  id
                  name
                  description
                  isHighlighted
                  startedAt
                  finishedAt
                  tags
                  links
              }
          }
      }
  `).allProjectsJson.nodes

  console.log(highlighted)

  return (
    <Layout>
      <SEO title="Home"/>
      <section className="title" style={{width: '100%', height: '100vh'}}>
        <div>
          <h1>Learn, Find, Figure Out</h1>
          <p className="title-name">STARTERGATE</p>
          <p>최호승</p>
          <p>백엔드 엔지니어</p>
          <p>게임 개발자</p>
          <p>3학년 고등학생 @ <a href="https://gsm.gen.hs.kr">광주소프트웨어마이스터고등학교</a></p>
        </div>
      </section>
      <section>
        <h2>Languages</h2>
        <h3>Expert</h3>
        <div className='list'>
          <JavaScript/>
          <TypeScript/>
          <Python/>
        </div>
      </section>
      <section>
        <h2>Project Highlights</h2>
        <div className='list'>
          {highlighted.map((value, index) => {
            return <Project data={value} />
          })}
        </div>
        <Link to="/projects/">See More...</Link>
      </section>
    </Layout>
  )
}

export default IndexPage;
