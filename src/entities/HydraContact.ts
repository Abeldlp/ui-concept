export interface HydraContact {
  '@id': string;
  givenName: string;
  familyName: string;
  email: string;
  organization?: {
    jobTitle?: string;
    name?: string;
  };
}
