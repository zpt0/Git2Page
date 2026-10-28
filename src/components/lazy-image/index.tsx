import { useState, Fragment, useEffect } from 'react';

const LazyImage = ({
  placeholder,
  src,
  alt,
  ...rest
}: {
  placeholder: React.ReactElement;
  src: string;
  alt: string;
  [key: string]: unknown;
}) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loading = loadedSrc !== src;

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoadedSrc(src);
    };

    return () => {
      imageToLoad.onload = null;
    };
  }, [src]);

  return (
    <Fragment>
      {loading ? (
        placeholder
      ) : (
        <img src={src} alt={alt} loading="lazy" {...rest} />
      )}
    </Fragment>
  );
};

export default LazyImage;
