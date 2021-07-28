import "./contact.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 152
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/find-me.jpg" alt="" />
      </div>
      <center>
        <h4 id="h4">
          Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </h4>
      </center>
      <div className="footer">
        <hr id="hr" />
        <Button
          variant="contained"
          color="primary"
          href="mailto:nicovenz@gmail.com?subject=Contact From Portfolio"
          className={classes.button}
          startIcon={<AlternateEmailIcon />}
        >
          Contact Me
        </Button>
        <Button
          variant="contained"
          color="default"
          href="https://drive.google.com/drive/folders/1XaklUZIbJxnntcFErr0h9psnoklrwHl0?usp=sharing"
          target="_blank"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
        >
          CV
        </Button>

        <Button
          variant="contained"
          color="default"
          href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/"
          target="_blank"
          className={classes.button}
          startIcon={<LinkedInIcon />}
        >
          Linkedin
        </Button>

        <Button
          variant="contained"
          color="default"
          href="https://github.com/NicolasVenzmer"
          target="_blank"
          className={classes.button}
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}
