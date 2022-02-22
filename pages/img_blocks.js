const neg_margin = -10

export function img_photo_descrip_block(title, descript, src, alt) {
    return (
      <div>
      <h3 style={{marginBottom: neg_margin}}>{title}</h3>
      <p>{descript}</p>
      <div className='photo-div'>
      {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
      <img
        src = {src}
        alt = {alt}
        layout='fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      <hr></hr>
      </div>
      
    )
  }
  