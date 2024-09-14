import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageQuote extends Schema.Component {
  collectionName: 'components_about_page_quotes';
  info: {
    displayName: 'Quote';
    description: '';
  };
  attributes: {
    Quote: Attribute.RichText;
    Quote_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Quote_New: Attribute.Blocks;
  };
}

export interface AboutPageHeader extends Schema.Component {
  collectionName: 'components_about_page_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    Header_Text: Attribute.RichText;
    Header_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Header_Text_New: Attribute.Blocks;
  };
}

export interface AboutPageFullImage extends Schema.Component {
  collectionName: 'components_about_page_full_images';
  info: {
    displayName: 'Full_Image';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutPageCollaborators extends Schema.Component {
  collectionName: 'components_about_page_collaborators';
  info: {
    displayName: 'Collaborators';
  };
  attributes: {
    List_Title: Attribute.String;
    List: Attribute.Blocks;
  };
}

export interface AboutPageBody extends Schema.Component {
  collectionName: 'components_about_page_bodies';
  info: {
    displayName: 'Body';
    description: '';
  };
  attributes: {
    Biography_New: Attribute.Blocks;
    Single_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ForumTeachings extends Schema.Component {
  collectionName: 'components_forum_teachings';
  info: {
    displayName: 'Teachings';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Teaching_Body: Attribute.RichText;
    Teaching_Body_New: Attribute.Blocks;
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
    Press_Body_New: Attribute.Blocks;
  };
}

export interface ForumMultipleImageField extends Schema.Component {
  collectionName: 'components_forum_multiple_image_fields';
  info: {
    displayName: 'Multiple_Image_Field';
    description: '';
  };
  attributes: {
    Image_Gallery: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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
    Text_Body_Rich_Text: Attribute.Blocks;
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
    Choreography_Body_New: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page.quote': AboutPageQuote;
      'about-page.header': AboutPageHeader;
      'about-page.full-image': AboutPageFullImage;
      'about-page.collaborators': AboutPageCollaborators;
      'about-page.body': AboutPageBody;
      'forum.video': ForumVideo;
      'forum.teachings': ForumTeachings;
      'forum.press': ForumPress;
      'forum.multiple-image-field': ForumMultipleImageField;
      'forum.forum-text': ForumForumText;
      'forum.choreography': ForumChoreography;
    }
  }
}
