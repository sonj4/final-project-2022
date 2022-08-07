import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import BootstrapSpinner from './BootstrapSpinner';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ url }) {
  const [expanded, setExpanded] = React.useState(false);

  let { id } = useParams();
  const { response, loading, error } = useAxios({ method: 'get', url })

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (<>
    {loading? <BootstrapSpinner /> : <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          // action={
          //   // <IconButton aria-label="settings">
          //   //   <MoreVertIcon />
          //   // </IconButton>
          // }
          title={response.title}
          subheader={response.date_of_release}
        />
        <Link to={`/movie/${url.substr(url.length - 2).substr(0, 1)}`}>
        <CardMedia
          component="img"
          height="194"
          image={response.image_of_movie}
          alt="Movie image"
        />
        </Link>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {response.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <StarIcon />
          </IconButton>
          <IconButton aria-label="share">
            <AddIcon /> <span style={{ fontSize: "1rem" }}>Watchlist</span>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >

          </ExpandMore>
        </CardActions>

      </Card>
    </ThemeProvider>}
    </>
  );
}
