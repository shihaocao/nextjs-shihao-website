import styles from './layout.module.css'

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