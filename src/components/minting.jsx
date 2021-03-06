export const Minting = (props) => {
  return (
    <div>
      <div id='minting'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>MINTING</h2>
                <p>
                  COMMING SOON!
                </p>
              </div>              
            </div>
          </div>          
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.medium : '/'}>
                      <i className='fa fa-medium'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Copyright Moon Rabbit Team
          </p>
        </div>
      </div>
    </div>
  )
}
