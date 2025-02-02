import React from 'react';
import {
    Card,
    CardContent,
    CardOverflow,
    Typography,
    AspectRatio,
    Box,
} from '@mui/joy';
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

const sampleProducts = [
    { id: 1, title: "Text", price: "$0", description: "Body text.", rating: 4.5 },
    { id: 2, title: "Text", price: "$0", description: "Body text.", rating: 3 },
    { id: 3, title: "Text", price: "$0", description: "Body text.", rating: 5 },
    { id: 4, title: "Text", price: "$0", description: "Body text.", rating: 2.5 },
    { id: 5, title: "Text", price: "$0", description: "Body text.", rating: 4 },
    { id: 6, title: "Text", price: "$0", description: "Body text.", rating: 3.5 },
    { id: 7, title: "Text", price: "$0", description: "Body text.", rating: 4.2 },
    { id: 8, title: "Text", price: "$0", description: "Body text.", rating: 2 },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <Box sx={{ display: 'flex' }}>
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700' }} />
            ))}
            {halfStar > 0 && <FaStarHalfAlt style={{ color: '#FFD700' }} />}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} style={{ color: '#FFD700' }} />
            ))}
        </Box>
    );
};

const Products: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gap: 2, // Espace entre les cartes
                p: 4,   // Padding global
                backgroundColor: '#f5f5f5',

                // Grid responsive : 4 colonnes sur grands écrans, 2 ou 1 sur plus petits
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
            }}
        >
            {sampleProducts.map((product) => (
                <Card
                    key={product.id}
                    variant="outlined"
                    sx={{
                        borderRadius: 'sm',
                        boxShadow: 'sm',
                        bgcolor: '#fff',
                    }}
                >
                    {/* Zone image */}
                    <CardOverflow>
                        <AspectRatio ratio="16/9">
                            <img
                                // Utilise un placeholder ou ta propre image
                                src="https://via.placeholder.com/300x200?text=Image"
                                alt={product.title}
                            />
                        </AspectRatio>
                    </CardOverflow>

                    {/* Zone texte */}
                    <CardContent>
                        <Typography sx={{ mb: 0.5 }}>
                            {product.title}
                        </Typography>
                        <Typography fontWeight="lg" sx={{ mb: 0.5 }}>
                            {product.price}
                        </Typography>
                        <Rating rating={product.rating} />
                        <Typography color="neutral">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default Products;
