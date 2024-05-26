import { Margin } from "@mui/icons-material";
import { Box, Container, Grid, Typography,} from "@mui/material";

const HeadingTypography = (props) => (
    <Typography 
        variant={"h5"}
        sx={{
            color: "white", 
            fontWeight: "bold",
            my:2,
        }}
    >
        {props.children}
    </Typography>
)

const BodyTypography = (props) => (
    <Typography
        sx={{
            color: "#cccccc",
        }}    
    >
        {props.children}
    </Typography>
)

const lielement = {
    margin: "15px",
}

function Footer(){
    return(
        <Container>
            <Box sx={{ width: "100%", m: 2 }}>
                <Typography sx={{ color: "#ffbade", fontSize: 13, fontWeight: "bold" }}>
                    Share MovieMagix
                </Typography>
                <Typography sx={{ color: "#ccc", fontSize: 11 }}>
                    to your friends
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={10} sx={{ mt: 1, p: 1, }} textAlign={"justify"}>
                    <HeadingTypography>
                        MovieMagix - The best site to know about movies and tv series online for Free.
                    </HeadingTypography>
                    <BodyTypography>
                        Do you know that according to Google, the monthly search volume for movie related topics is up to over 1 Billion times? 
                        Movies are famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.
                        <br/><br/>
                        Just like free online blog sites, movie related details sites are not created equally, 
                        some are better than the rest, so I've decided to build moviemagix.netlify.app to be one of the best free movie, 
                        tv series related sites for all movie fans in the world.
                    </BodyTypography> 

                    <HeadingTypography>
                        1/ What is MovieMagix?
                    </HeadingTypography> 
                    <BodyTypography>
                        moviemagix.netlify.app is a free site to know any details related to movies, tvseries and 
                        you can even download image poster of the movie/tvseries in ultra HD quality 
                        without any registration or payment. By having only one ads in all kinds, 
                        we are trying to make it the safest site for free.
                    </BodyTypography>
                    
                    <HeadingTypography>
                        2/ Is  moviemagix.netlify.app safe?
                    </HeadingTypography> 
                    <BodyTypography>
                        Yes we are, we do have only one Ads to cover the server cost 
                        and we keep scanning the ads 24/7 to make sure all are clean, 
                        If you find any ads that is suspicious, please forward us the info and we will remove it.
                    </BodyTypography>

                    <HeadingTypography>
                        3/ So what make moviemagix the best site to get details of movies and tvseries free online?
                    </HeadingTypography>
                    <BodyTypography>
                        Before building MovieMagix, we've checked many other free movie related sites, and learnt from them. 
                        We only keep the good things and remove all the bad things from all the competitors, 
                        to put it in our MovieMagix website. 
                        Let's see how we're so confident about being the best site for anime streaming:
                    </BodyTypography>
                    <BodyTypography>
                            <ul>
                                <li style={lielement}>
                                    <b>Safety</b>: 
                                    We try our best to not having harmful ads on MovieMagix.
                                </li>
                                <li style={lielement}>
                                    <b>Content library</b>:
                                    <span>
                                        Our main focus is Movies. You can find here popular, classic, 
                                        as well as current titles from all genres such as 
                                        action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music,
                                        game and many more. 
                                        All these titles come with English subtitles or are dubbed in many languages.
                                    </span> 
                                </li>
                                <li style={lielement}>
                                    <b>Quality/Resolution</b>: 
                                    All titles are in excellent resolution, the best quality possible. 
                                    MovieMagix also has a quality setting function to make sure our users can enjoy 
                                    streaming no matter how fast your Internet speed is. 
                                    You can stream the trailers at 360p if your Internet is being ridiculous, 
                                    Or if it is good, you can go with 720p or even 1080p anime.
                                </li>
                                <li style={lielement}>
                                    <b>Streaming experience</b>: 
                                    Compared to other anime streaming sites, the loading speed at MovieMagix is faster. 
                                </li>
                                <li style={lielement}>
                                    <b>Updates</b>: 
                                    We updates new titles as well as fulfill the requests on a daily basis so be warned, 
                                    you will never run out of what to watch on MovieMagix.
                                </li>
                                <li style={lielement}>
                                    <b>User interface</b>: 
                                    Our UI and UX makes it easy for anyone, no matter how old you are, 
                                    how long have you been on the Internet. 
                                    Literally, you can figure out how to navigate our site after a quick look. 
                                    If you want to watch a specific title, search for it via the search box. 
                                    If you want to look for suggestions, you can use the site's categories 
                                    or simply scroll down for new releases.
                                </li>
                                <li style={lielement}>
                                    <b>Device compatibility</b>: 
                                    MovieMagix works alright on both your mobile and desktop. 
                                    However, we'd recommend you use your desktop for a smoother streaming experience.
                                </li>
                                <li style={lielement}>
                                    <b>Customer care</b>: 
                                    We are in active mode 24/7. 
                                    You can always contact us for any help, query, or business-related inquiry. 
                                    On our previous projects, we were known for our great customer service 
                                    as we were quick to fix broken links or upload requested content.
                                </li>
                            </ul>
                    </BodyTypography>
                    <BodyTypography>
                        So if you're looking for a trustworthy and safe site for your Movie related details and passion, 
                        let's give MovieMagix a try. And if you like us, 
                        please help us to spread the words and do not forget to bookmark our site.
                        <br/><br/>
                        Thank you!
                    </BodyTypography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;



                    
