export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            KLAY MOON RABIT
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#test' className='page-scroll'>
                Story
              </a>
            </li>
            <li>
              <a href='#story' className='page-scroll'>
                Rabbit NFT
              </a>
            </li>
            <li>
              <a href='#roadmap' className='page-scroll'>
                Roadmap
              </a>
            </li>            
            {/* <li>
              <a href='#faqs' className='page-scroll'>
                FAQ
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#minting' className='page-scroll'>
                Minting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
