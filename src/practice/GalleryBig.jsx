const GalleryBig = ({ selImg }) => {
    const { webp, jpeg } = selImg

    return (
        <div className="bigImg">
            <picture>
                <source srcSet={webp} type="image/webp" />
                <source srcSet={jpeg} type="image/jpeg" />
                <img src={jpeg} alt={jpeg} />
            </picture>
        </div>
    );
};

export default GalleryBig;