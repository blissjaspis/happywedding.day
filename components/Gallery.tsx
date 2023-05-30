import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"
import Image from "next/image"
import React from "react"

interface Images {
    url: string
    width: number
    height: number
}

const listImages: Images[] = [
    {
        url: "1-peace.jpeg",
        width: 970,
        height: 1296,
    },
    {
        url: "2-skating.jpeg",
        width: 958,
        height: 1280,
    },
    {
        url: "3-hall.jpeg",
        width: 958,
        height: 1280,
    },
    {
        url: "4-hospex.jpeg",
        width: 958,
        height: 1280,
    },
    {
        url: "5-ranca.jpeg",
        width: 648,
        height: 1440,
    },
]

const PhotoGallery = () => {
    return (
        <>
            <svg
                className="h-32 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#083344"
                    fillOpacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,218.7C1120,256,1280,256,1360,256L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
            </svg>
            <h2 className="font-bold text-3xl mb-10 text-center -mt-5 font-serif uppercase text-cyan-800">
                Photo Gallery
            </h2>

            <Gallery>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
                    {listImages.map((image, index) => (
                        <Item
                            original={`/images/gallery/${image.url}`}
                            thumbnail={`/images/gallery/${image.url}`}
                            width={image.width}
                            height={image.height}
                            key={index}
                        >
                            {({ ref, open }) => (
                                <Image
                                    width={image.width}
                                    height={image.height}
                                    ref={
                                        ref as React.MutableRefObject<HTMLImageElement>
                                    }
                                    onClick={open}
                                    src={`/images/gallery/${image.url}`}
                                    alt="photo gallery"
                                />
                            )}
                        </Item>
                    ))}
                </div>
            </Gallery>
        </>
    )
}

export default PhotoGallery
