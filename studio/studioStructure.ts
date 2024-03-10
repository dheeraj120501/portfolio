import type { StructureResolver } from "sanity/structure"

export const studioStructure: StructureResolver | undefined = (S) =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('Profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
        ),
        ...S.documentTypeListItems().filter(listItem => !['profile'].includes(listItem.getId()!))
    ])

