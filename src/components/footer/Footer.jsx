import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blue } from '@mui/material/colors';
import './footer.scss'
import { NavLink } from 'react-router-dom';
export default function Footer() {
               return (
                              <>
                                             <div className="footerContainer">
                                                           <NavLink> <div><LinkedInIcon sx={{ fontSize: 40, color: blue[900] }} /></div></NavLink>
                                                           <NavLink>   <div><FacebookIcon sx={{ fontSize: 40, color: blue[900] }} /></div></NavLink>
                                                           <NavLink>   <div><GitHubIcon sx={{ fontSize: 40, color: blue[900] }} /></div></NavLink>
                                             </div>
                              </>
               )
}
