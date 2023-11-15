import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowForward';

export const Item = ({ item }) => {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={item.image} 
            alt={item.title}
            loading="lazy"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{item.title}</Typography>
        <Link
          href={`/${item.title}/${item.id}`} 
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {item.title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              El precio mas bajo
            </Chip>
          }
        >
          ${`${item.price}`}
        </Typography>
        <Typography level="body-sm">
          (Solo <b>{item.stock}</b> en stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          <Link  href={`/${item.title}/${item.id}`} >VER</Link>
        </Button>
      </CardOverflow>
    </Card>
  );
};
