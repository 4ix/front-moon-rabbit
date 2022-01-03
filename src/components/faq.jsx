export const Faqs = (props) => {
  return (
    <div id='faqs'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>FAQ</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='faq'>
                    <div className='faq-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='faq-content'>
                      <p>"{d.text}"</p>
                      <div className='faq-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
