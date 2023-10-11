import React from 'react';
import RestoCard from '../components/RestoCard';

const resObj = {
    "type": "restaurant",
    "info": {
        "resId": 20189134,
        "name": "Sri Udupi Park",
        "image": {
            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/59916\/95177ed226010a6be13935df30d552e4_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
            "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/59916\/95177ed226010a6be13935df30d552e4_o2_featured_v2.jpg"
        },
        "rating": {
            "has_fake_reviews": 0,
            "aggregate_rating": "3.8",
            "rating_text": "3.8",
            "rating_subtitle": "Good",
            "rating_color": "9ACD32",
            "votes": "554",
            "subtext": "REVIEWS",
            "is_new": false
        },
        "ratingNew": {
            "newlyOpenedObj": null,
            "suspiciousReviewObj": null,
            "ratings": {
                "DINING": {
                    "rating_type": "DINING",
                    "rating": "3.8",
                    "reviewCount": "7",
                    "reviewTextSmall": "7 Reviews",
                    "subtext": "7 Dining Reviews",
                    "color": "#1C1C1C",
                    "ratingV2": "3.8",
                    "subtitle": "DINING",
                    "sideSubTitle": "Dining Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "600"
                    }
                },
                "DELIVERY": {
                    "rating_type": "DELIVERY",
                    "rating": "3.7",
                    "reviewCount": "547",
                    "reviewTextSmall": "547 Reviews",
                    "subtext": "547 Delivery Reviews",
                    "color": "#E23744",
                    "ratingV2": "3.7",
                    "subtitle": "DELIVERY",
                    "sideSubTitle": "Delivery Reviews",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "600"
                    },
                    "newOnDelivery": false
                }
            }
        }
    }
}

const RestoCardContainer: React.FC = () => {
        return (
            <div className="restoContainer">
                <RestoCard
                    imgSrc={require('../assets/resto-img.jpeg')}
                    restoName='Hotel Nisarg'
                    cuisine='North Indian'
                    ratings={4.5}
                />
            </div>
        )
    }

export default RestoCardContainer;