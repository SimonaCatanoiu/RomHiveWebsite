import React, { useState } from 'react'
import galleryImages from "./galleryImages"
import "./Gallery.css"
import CloseIcon from '@mui/icons-material/Close';

function Gallery(){
    const data = galleryImages;
    const [model,setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
    const getImg = (item) =>{
        setTempImgSrc(item);
        setModel(true);
        console.warn(model);
    }
    return (
        <>
        <div className={model? "model_open":"model"}>
            <img src={tempimgSrc} alt=""/>
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item,index)=>{
                return (
                    <div className='pics' key={index} onClick={()=>getImg(item)}>
                        <img src={item} style={{width:'100%'}}>
                        </img>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Gallery;