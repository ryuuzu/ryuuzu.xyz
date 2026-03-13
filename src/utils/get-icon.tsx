import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiX,
} from '@icons-pack/react-simple-icons';
import { Linkedin, Mail, Brackets } from 'lucide-react';
import momoImage from "@/assets/images/momo.png"

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
    case 'spotify':
      return <SiSpotify />;
    case 'buymemomo':
      return <img src={momoImage} alt="momo image" className="size-6" /> 
    default:
      return <Brackets />;
  }
};
