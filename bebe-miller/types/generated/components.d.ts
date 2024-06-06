import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageBody extends Schema.Component {
  collectionName: 'components_about_page_bodies';
  info: {
    displayName: 'Body';
  };
  attributes: {
    Biography: Attribute.RichText;
    Single_Image: Attribute.Media;
    Image_Gallery: Attribute.Media;
    Quote: Attribute.String;
  };
}

export interface AboutPageFullImage extends Schema.Component {
  collectionName: 'components_about_page_full_images';
  info: {
    displayName: 'Full_Image';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface AboutPageHeader extends Schema.Component {
  collectionName: 'components_about_page_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Header_Text: Attribute.RichText;
    Header_Image: Attribute.Media;
  };
}

export interface AboutPageQuote extends Schema.Component {
  collectionName: 'components_about_page_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    Quote: Attribute.RichText;
    Quote_Image: Attribute.Media;
  };
}

export interface ForumChoreography extends Schema.Component {
  collectionName: 'components_forum_choreographies';
  info: {
    displayName: 'Choreography';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Choreography_Body: Attribute.RichText;
  };
}

export interface ForumForumText extends Schema.Component {
  collectionName: 'components_forum_forum_texts';
  info: {
    displayName: 'Forum_Text';
    icon: 'code';
    description: '';
  };
  attributes: {
    Text_Body: Attribute.RichText;
    Text_Body_Rich_Text: Attribute.Blocks;
  };
}

export interface ForumMultipleImageField extends Schema.Component {
  collectionName: 'components_forum_multiple_image_fields';
  info: {
    displayName: 'Multiple_Image_Field';
    description: '';
  };
  attributes: {
    Image_Gallery: Attribute.Media;
  };
}

export interface ForumPress extends Schema.Component {
  collectionName: 'components_forum_presses';
  info: {
    displayName: 'Press';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Press_Body: Attribute.RichText;
  };
}

export interface ForumTeachings extends Schema.Component {
  collectionName: 'components_forum_teachings';
  info: {
    displayName: 'Teachings';
    icon: 'bulletList';
  };
  attributes: {
    Teaching_Body: Attribute.RichText;
  };
}

export interface ForumVideo extends Schema.Component {
  collectionName: 'components_forum_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    video_URL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page.body': AboutPageBody;
      'about-page.full-image': AboutPageFullImage;
      'about-page.header': AboutPageHeader;
      'about-page.quote': AboutPageQuote;
      'forum.choreography': ForumChoreography;
      'forum.forum-text': ForumForumText;
      'forum.multiple-image-field': ForumMultipleImageField;
      'forum.press': ForumPress;
      'forum.teachings': ForumTeachings;
      'forum.video': ForumVideo;
    }
  }
}
