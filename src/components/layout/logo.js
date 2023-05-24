import { Avatar } from "@mui/material";
import logo from '../../assets/mkc_logo.png';
import logo_rect from '../../assets/MKC_rect.png';
import logo_light from '../../assets/MKC_light.png';
export default function Logo(props){
    const {logo_type} =props;
    
    return(
       logo_type=='circle' &&  <Avatar {...props} >
              <img src={logo} alt="logo" width={"100px"} height={"100px"} />
          </Avatar> 
            ||
            logo_type =='react' &&  
            <img src={logo_rect} alt="logo" width={"400px"} height={"120px"} />
            ||logo_type =='light' &&  
            <img src={logo_light} alt="logo" width={"400px"} height={"120px"} />
        
          
    );
}