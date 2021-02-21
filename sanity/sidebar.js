import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MDStore as icon } from 'react-icons/md';

// Build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // Create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>{icon}</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a new document ID
            .documentId('downtown')
        ),
      // Add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
