import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { AuthenticatedContext } from '../../redux'
import './styles.css'

class Appnav extends React.Component {
  static contextType = AuthenticatedContext
  render() {
    let authenticated = this.context
    return (
      <div>
        <Navbar className='navbar-fixed' inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to='/home'>
                <NavItem eventKey={0}>
                  <span className='navbar-logo'>AcesTrader</span>
                </NavItem>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={5} title='Prospects' id='5-basic-nav-dropdown'>
                <LinkContainer to='/prospectbuys'>
                  <MenuItem eventKey={5.1}>Buys</MenuItem>
                </LinkContainer>
                <LinkContainer to='/prospectsells'>
                  <MenuItem eventKey={5.2}>Short Sales</MenuItem>
                </LinkContainer>
                <LinkContainer to='/prospecttrendbuys'>
                  <MenuItem eventKey={5.2}>Trend Buys</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={4} title='Positions' id='5-basic-nav-dropdown'>
                <LinkContainer to='/positionlongs'>
                  <MenuItem eventKey={4.1}>Longs</MenuItem>
                </LinkContainer>
                <LinkContainer to='/positionshorts'>
                  <MenuItem eventKey={4.2}>Shorts</MenuItem>
                </LinkContainer>
                <LinkContainer to='/positiontrendlongs'>
                  <MenuItem eventKey={4.6}>Trend Longs</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to='/results'>
                <NavItem eventKey={9}>Trades</NavItem>
              </LinkContainer>

              <NavDropdown eventKey={6} title='Edits' id='5-basic-nav-dropdown'>
                <LinkContainer to='/managebuyprospects'>
                  <MenuItem eventKey={6.2}>Buy Prospects</MenuItem>
                </LinkContainer>
                <LinkContainer to='/managesellprospects'>
                  <MenuItem eventKey={6.4}>Short Sale Prospects</MenuItem>
                </LinkContainer>
                <LinkContainer to='/managetrendbuyprospects'>
                  <MenuItem eventKey={6.7}>Trend Buy Prospects</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={7} title='More' id='5-basic-nav-dropdown'>
                <LinkContainer to='/peek'>
                  <NavItem eventKey={7.2}>Peek</NavItem>
                </LinkContainer>
                <LinkContainer to='/welcomerealtrader'>
                  <NavItem eventKey={7.4}>Change Account</NavItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to='/home'>
                  <MenuItem eventKey={7.6}>AcesTrader Home</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to='/welcomeguest'>
                  <NavItem eventKey={7.8}>Guest Mode Info</NavItem>
                </LinkContainer>
                {/* {getResetStateMenu()} */}
              </NavDropdown>
              <LinkContainer to='/signout'>
                <NavItem eventKey={9}>{authenticated ? 'SignOut' : 'SignIn'}</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Appnav
