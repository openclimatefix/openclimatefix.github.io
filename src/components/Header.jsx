import { Link } from 'gatsby';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuClosed: true,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuClosed: !prevState.menuClosed,
    }));
  };

  render() {
    const { menuClosed } = this.state;

    return (
      <header className="bg-black">
        <nav
          className="mx-auto md:max-w-4xl lg:max-w-4xl xl:max-w-4xl flex items-center justify-between flex-wrap p-6"
        >
          <Link to="/">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                className="fill-current h-8 w-14 mr-4"
                width="60"
                height="21"
                viewBox="0 0 60 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10,20.58a1.08,1.08,0,0,1-.78-.33L.32,11.39a1.12,1.12,0,0,1,0-1.57L9.4.75A1.1,1.1,0,0,1,11,.75a1.09,1.09,0,0,1,0,1.56l-8.29,8.3,8.08,8.08A1.11,1.11,0,0,1,10,20.58Z" />
                <path d="M39.27,20.58a1.1,1.1,0,0,1-.78-.33l-8.86-8.86a1.12,1.12,0,0,1,0-1.57L38.7.75a1.12,1.12,0,0,1,1.57,0,1.1,1.1,0,0,1,0,1.56L32,10.61l8.09,8.08a1.11,1.11,0,0,1-.79,1.89Z" />
                <path d="M53.67,12.46a1.11,1.11,0,0,1-.79-1.89l5.23-5.23a1.11,1.11,0,0,1,1.57,1.57l-5.23,5.22A1.1,1.1,0,0,1,53.67,12.46Z" />
                <path d="M46.79,10.61l8.29-8.3A1.1,1.1,0,0,0,53.52.75L44.44,9.82a1.12,1.12,0,0,0,0,1.57l8.87,8.86a1.08,1.08,0,0,0,.78.33,1.11,1.11,0,0,0,.78-1.89Z" />
                <path d="M15.79,20.58A1.11,1.11,0,0,1,15,18.69l8.09-8.08-8.3-8.3a1.1,1.1,0,0,1,0-1.56,1.12,1.12,0,0,1,1.57,0l9.07,9.07a1.1,1.1,0,0,1,0,1.57l-8.86,8.86A1.1,1.1,0,0,1,15.79,20.58Z" />
              </svg>
              <span className="font-semibold text-xl tracking-tight">
                Open Climate Fix
              </span>
            </div>
          </Link>
          <div className="block lg:hidden">
            <button
              type="button"
              onClick={() => this.toggleMenu()}
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuClosed
              && 'hidden'}`}
          >
            <div className="text-sm lg:flex-grow">
              <Link
                to="/#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                to="/#get-involved"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
