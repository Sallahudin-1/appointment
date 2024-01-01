import { AppBar, Toolbar, styled } from '@mui/material';
// import {NavLink} from 'react-router-dom';

const Header = styled (AppBar)`
 background: #607D8B;
 position:  relative;
`;

const Tabs = styled ()`
font-size: 20px;
margin-right: 30px;
color: inherit;
text-decoration: none
`;
function NavBar() {
    return (


        <Header>
            <Toolbar>
                <Tabs to ='/view'>View Data</Tabs>
                <Tabs to='/add'>Create Data</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;
