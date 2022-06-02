const neg_margin = -5

import styles from './layout.module.css'
// import styles from '../node_modules/bootstrap/dist/css/bootstrap-grid.css';

export default function img_photo_descrip_block(title, descript, src, alt) {
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
  
export function img_photo_descrip_block_h2(title, descript, src, alt) {
    return (
      <div>
      <h2 style={{marginBottom: neg_margin}}>{title}</h2>
      <p>{descript}</p>
      <div className='photo-div'>
      <div style={{margin: 0, textAlign: 'center', display: 'block'}}>
      <img
        src = {src}
        alt = {alt}
        layout = 'fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      </div>

      <hr></hr>
      </div>
      
    )
}
  
export function dual_centered_img_block(photo_path_left, photo_path_right) {
  return (
    <div class="container">
    <div class="row">
      <div class="col my-auto">
      <img
        src = {'/images/' + photo_path_left}
        alt = ''
        loading="lazy"
        />
      </div>
      <div class="col my-auto">
      <img
        src = {'/images/' + photo_path_right}
        alt = ''
        loading="lazy"
        />
      </div>
    </div>
  </div>
  )
}

export function centered_img_block(photo_path) {
  return (
    <div class={styles.containerSm}>
    <div class="row">
      <div class="col-sm">
      <img
        src = {'/images/' + photo_path}
        alt = ''
        loading="lazy"
        />
      </div>
    </div>
  </div>
  )
}