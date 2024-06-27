import "./home.scss";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const Home = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchInitialImages = async () => {
            try {
                setIsLoading(true);
                const promises = [];
                for (let i = 1; i <= 5; i++) {
                    promises.push(fetch(`https://api.unsplash.com/photos?client_id=LD5C_pCS8Ndgua9SdOpyCT2iIRCYcShGG1v6AhlkE2M&page=${i}`));
                }
                const results = await Promise.all(promises);
                const data = await Promise.all(results.map(res => res.json()));
                const mergedData = data.flat();
                setImages(mergedData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching image data:', error);
                setIsLoading(false);
            }
        };

        fetchInitialImages();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
                loadMoreImages();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    const loadMoreImages = async () => {
        try {
            setIsLoading(true);
            const result = await fetch(`https://api.unsplash.com/photos?client_id=LD5C_pCS8Ndgua9SdOpyCT2iIRCYcShGG1v6AhlkE2M&page=${page}`);
            const data = await result.json();
            setImages((prevImages) => [...prevImages, ...data]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching image data:', error);
            setIsLoading(false);
        }
    };

    const breakpointColumnsObj = {
        default: 7,
        1500: 6,
        1300: 5,
        1100: 4,
        800: 3,
        600: 2
    };

    return (
        <article className="ps-5 pe-5">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="row"
                columnClassName="col-lg-3 col-md-4 col-sm-6 col-12"
            >
                {images.map((image) => (
                    <figure key={image.id}>
                        <img src={image.urls.small} className="borderRadiusClass img-fluid" alt={image.alt_description} />
                    </figure>
                ))}
            </Masonry>
        </article>
    );
};

export default Home;