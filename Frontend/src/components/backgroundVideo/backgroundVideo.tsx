import video from '../../assets/videos/Skyscrapers.mp4';
import styles from './backgroundVideo.module.scss';

export const BackgroundVideo = () => {
    return (
        <>
            <video className={styles.wrapper} loop autoPlay muted>
                <source src={video} type='video/mp4; codecs="avc1.42E030, mp4a.40.2"'/>
            </video>
        </>
    )
}
