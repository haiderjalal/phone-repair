import {
  AlignFeature,
  BlockquoteFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    InlineCodeFeature(),
    ParagraphFeature(),
    AlignFeature(),
    IndentFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    ChecklistFeature(),
    LinkFeature({
      enabledCollections: ['pages', 'posts'],
    }),
    RelationshipFeature({
      enabledCollections: ['pages', 'posts'],
    }),
    BlockquoteFeature(),
    UploadFeature({
      collections: {
        uploads: {
          fields: [
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
      },
    }),
  ],
})