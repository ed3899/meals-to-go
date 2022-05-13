export type LocationMock = {
   [location: string]: LocationResults;
};

export type LocationResults = {
   results: LocationGeometry[];
   status?: string;
};

export type LocationGeometry = {
   geometry: {
      location: {
         lng: number;
         lat: number;
      };
      viewport: {
         northeast: {
            lat: number;
            lng: number;
         };
         southwest: {
            lat: number;
            lng: number;
         };
      };
   };
};
