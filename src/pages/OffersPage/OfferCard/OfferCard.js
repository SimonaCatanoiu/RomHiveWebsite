import React from 'react'
import Card from 'react-bootstrap/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import './OfferCard.css'

const OfferCard = ({offer}) => {

    const {id,title,city,photo,price,featured,reviews}=offer

    const totalRating = reviews?.reduce((acc,item)=>
    acc+item.rating,0)
    const avgRating = totalRating ===0 
    ?''
    :totalRating===1
    ?totalRating
    :(totalRating/reviews?.length).toFixed(1);

    return (
        <div className="offer__card">
            <Card>
                <div className='offer__img'>
                    <img src={photo} alt="tour-img"/>
                    {featured && <span>Featured</span>}
                </div>
                <Card.Body>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className='offer__location d-flex align-items-center gap-1'>
                            <LocationOnIcon className='icon_card'/>{city}
                        </span>
                        <span className='offer__rating d-flex align-items-center gap-1'>
                            <StarIcon className='icon_card'/>{avgRating===0 ? null : avgRating} {totalRating===0?('Not rated'): (<span>({reviews.length})</span>)} 
                        </span>
                    </div>

                    <h5 className="offer__title">
                        <Link to={`/offers/${id}`}> {title}</Link>
                    </h5>

                    <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                        <h5>
                            ${price} <span> /per person</span>
                        </h5>
                        <button className='btn booking__btn'>
                            <Link to={`/offers/${id}`}>
                                Book Now
                            </Link>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OfferCard