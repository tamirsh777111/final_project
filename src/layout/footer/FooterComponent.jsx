import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from '../footer/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        mt: 2,
        mb: 2,
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Link to="tel:0525338532" className={styles.h2}>
          <BottomNavigationAction label="Phone" icon={<PhoneInTalkIcon sx={{ fontSize: 40 }} />} />
          Phone
        </Link>
        <Link to="mailto:tamirsh777111@gmail.com" className={styles.h2}>
          <BottomNavigationAction label="Email" icon={<EmailIcon sx={{ fontSize: 40 }} />} />
          Email
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=0525338532&text=שלום, איך אפשר לעזור" className={styles.h2}>
          <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon sx={{ fontSize: 40 }} />} />
          WhatsApp
        </Link>
      </BottomNavigation>
    </Paper>
  );
};

export default memo(FooterComponent);
