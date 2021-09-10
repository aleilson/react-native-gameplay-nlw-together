import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckbox?: boolean
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckbox = false,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckBox={hasCheckbox}
          />
        ))
      }
    </ScrollView>
  );
}
