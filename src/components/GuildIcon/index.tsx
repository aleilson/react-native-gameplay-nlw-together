import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
}

export function GuildIcon({ }: Props) {
  const uri = "http://pm1.narvii.com/6540/053a4214949b34fd6703a9723e2a175601b4014c_00.jpg";
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
    
  );
}
