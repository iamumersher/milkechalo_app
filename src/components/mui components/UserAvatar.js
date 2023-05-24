import { Avatar } from "@mui/material";
import userdp from '../../assets/pic.jpeg'

export default function UserAvatar(props){
   //const {userpic}=props;

    return(
        <Avatar {...props} >
              <img src={userdp} alt="logo" width={"200px"} height={"200px"} Style={{margib:'center'}}/>
          </Avatar>
    );
}