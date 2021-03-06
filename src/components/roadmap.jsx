export const Roadmap = (props) => {
  return (
    <div id='roadmap' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>ROADMAP</h2>
          <p>
            지구에 사는 달토끼들을 다시 달로 보내기 위한 프로젝트
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>{d.text2}</p>
                    <p>{d.text3}</p>
                    <p>{d.text4}</p>
                    <p>{d.text5}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
