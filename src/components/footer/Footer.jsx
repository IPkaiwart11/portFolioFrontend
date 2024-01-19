import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue } from '@mui/material/colors';
import './footer.scss'
import { NavLink } from 'react-router-dom';
export default function Footer() {
               return (
                              <>
                                             <div className="footerContainer">
                                                           <NavLink> <a href="www.linkedin.com/in/ipkaiwart" target='_blank'><div><LinkedInIcon sx={{ fontSize: 40, color: blue[900] }} /></div></a></NavLink>
                                                           {/* <NavLink>   <div><FacebookIcon sx={{ fontSize: 40, color: blue[900] }} /></div></NavLink> */}
                                                           <NavLink> <a href="https://www.instagram.com/ip_kaiwart/" target='_blank'>  <div><InstagramIcon sx={{ fontSize: 40, color: blue[900] }} /></div></a></NavLink>
                                             </div>
                              </>
               )
}
