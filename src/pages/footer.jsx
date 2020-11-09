import React from 'react'
import Footer from '../components/footer'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import Copyright from './../components/Copyright';

function FooterPage() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <h1>About Us</h1>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <h1>Services</h1>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <h1>Contact Us</h1>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column> 
                <h1>Social</h1>
                    <Footer.Link href="#"><FacebookIcon style={{ color: "blue"}} /></Footer.Link>
                    <Footer.Link href="#"><YouTubeIcon  style={{ color: "crimson"}}/></Footer.Link>
                    <Footer.Link href="#"><TwitterIcon style={{ color: "deepskyblue"}} /></Footer.Link>
                    <Footer.Link href='#'><InstagramIcon style={{ color: "deeppink"}} /></Footer.Link>              
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <Box mt={4}>
				<Copyright />
			</Box>
                        
        </Footer>
    )
}
export default FooterPage;