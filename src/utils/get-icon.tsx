import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiX,
} from '@icons-pack/react-simple-icons';
import { Linkedin, Mail } from 'lucide-react';

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'mail':
      return <Mail />;
    case 'github':
      return <SiGithub />;
    case 'linkedin':
      return <Linkedin />;
    case 'twitter':
      return <SiX />;
    case 'discord':
      return <SiDiscord />;
    case 'tiktok':
      return <SiTiktok />;
    case 'instagram':
      return <SiInstagram />;
    default:
      return <SiSpotify />;
  }
};
