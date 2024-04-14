//Event.ts

export type Event = {
  _id: string;
  name: string;
  eventType: string;
  slug: string;
  date: string; // ISO date string
  doorsOpen?: number; // This might be optional depending on your use case
  venue?: {
    _id: string;
    name: string;
    location?: string; // Optional as not all events might have a detailed location
    capacity?: number; // Optional
  };
  headlineArtist?: {
    _id: string;
    name: string;
    image?: {
      _id: string;
      url: string;
    };
  };
  image?: {
    _id: string;
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
      };
      palette: {
        dominant: {
          background: string;
          foreground: string;
        };
      };
    };
  };
  details?: Array<Block>; // Assuming 'Block' is defined somewhere in your types
  tickets?: string; // URL to buy tickets
};

// Assuming 'Block' type if you need it based on the content of the details field
export type Block = {
  style: string;
  list?: string;
  children: BlockContent[];
};

export type BlockContent = {
  text: string;
  marks?: string[]; // For styling purposes like bold, italic, etc.
};
