import { useState } from "react"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit"
import devResume from "IMG/Bell_Kim-DevResume2.pdf"
import qaResume from "IMG/Bell_Kimberly-Resume.pdf"
import Whiskers from "IMG/W-white.png"

// eslint-disable-next-line react/function-component-definition
const AppBar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <header>
      <MDBNavbar expand="lg" fixed="top" className="px-3">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" className="pl-2">
            <img src={Whiskers} alt="Cat whiskers" />
            <span className="pl-3 fs-4">kimbell.me</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav right fullWidth={false} data-testid="nav-links">
              <MDBNavbarLink href="#about">About</MDBNavbarLink>
              <MDBNavbarLink href="#skills">Skills</MDBNavbarLink>
              <MDBNavbarLink href="#projects">Projects</MDBNavbarLink>

              {/* NOTE: MDB does not recognize "target" as prop of MDBDropdownItem */}
              <div data-testid="resume-dropdown">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Resumes
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href={devResume}>
                      Dev Resume
                    </MDBDropdownItem>
                    <MDBDropdownItem link href={qaResume}>
                      QA Resume
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  )
}

export default AppBar
