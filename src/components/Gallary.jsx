import React, { useEffect, useRef, useState } from 'react'
import styles from './Gallary.module.css'
import VanillaTilt from 'vanilla-tilt';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


import fetchJsonp from "fetch-jsonp";

export default function Gallary(props) {



    const access_token = "4845257d4845257d4845257dc34b5656f7448454845257d2c6bc05fa80cbc5c0a61ed93";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);

    const popup = useRef(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupImage, setPopupImage] = useState(null);


    const getPhotos = async () => {

        // const data = await fetch(`https://api.vk.com/method/photos.get?owner_id=${props.groupId}&album_id=${props.album}&access_token=${access_token}&v=5.131`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setIsLoaded(true);
        //         setPhotos(res.response.items);
        //     })
        //     .catch(error => {
        //         setIsLoaded(true);
        //         setError(error.error);
        //     });

        const data = await fetchJsonp(`https://api.vk.com/method/photos.get?owner_id=${props.groupId}&album_id=${props.album}&access_token=${access_token}&v=5.131`)
        .then(res => res.json())
        .then(res => {
            setIsLoaded(true);
            setPhotos(res.response.items);
        })
        .catch(error => {
            setIsLoaded(true);
            setError(error.error);
        });
    }
    // getPhotos()
    useEffect(() => {getPhotos()}, [])


    function togglePopup() {
        setPopupOpen(current => !current);
        document.querySelector('body').classList.toggle('block-scroll');
    }


    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        function toggleImage(e) {
            togglePopup()
            setPopupImage(e.target.src)
        }

        return <div ref={tilt} onClick={(e) => { toggleImage(e) }} {...rest} />;
    }


    if (error) {
        return <div>Error: {error.error_msg}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.gallary}>
                <div className='page-center py-120'>
                    <div className={styles.gallary__container}>
                        {photos.map(item => (
                            <Tilt className={styles.gallary__photoContainer} key={item.id}>
                                <LazyLoadImage
                                    src={item.sizes.find(photo => photo.type === "z").url}
                                    alt="photo"
                                    className={styles.gallary__photo}
                                    effect="blur"
                                    width="100%"
                                    height="100%"
                                />
                                {/* <img className={styles.gallary__photo} src={item.sizes.find(photo => photo.type === "z").url} alt="photo" /> */}
                            </Tilt>
                        ))}
                    </div>
                </div>
                <div className={`${styles.gallary__popup} ${popupOpen && styles.open}`} ref={popup}>

                    <div className={styles.gallary__popupClose} onClick={togglePopup}>
                        <span></span>
                        <span></span>
                    </div>
                    <img className={styles.gallary__popupImage} src={popupImage} loading={"lazy"} />
                </div>
            </div>
        );
    }
}
