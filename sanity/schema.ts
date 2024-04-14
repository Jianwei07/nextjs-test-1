import { type SchemaTypeDefinition } from "sanity";

import { eventType } from "./schemaTypes/eventType";
import { artistType } from "./schemaTypes/artistType";
import { venueType } from "./schemaTypes/venueType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, artistType, venueType],
};
