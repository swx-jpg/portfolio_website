import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        
           <img className="img-responsive"  src="/images/logo_Amz.png" />
           
        </a>
      </Link>
    </Div1>
    {/* <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> 
         
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3> */}
    </Container>
);

export default Header;
