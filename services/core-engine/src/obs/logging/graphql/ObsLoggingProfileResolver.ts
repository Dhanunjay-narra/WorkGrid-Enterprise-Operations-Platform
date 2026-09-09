export const ObsLoggingProfileGqlTypeDefs = `
  type ObsLoggingProfile {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getObsLoggingProfile(id: ID!): ObsLoggingProfile
    listObsLoggingProfiles(tenantId: String!, limit: Int): [ObsLoggingProfile!]!
  }

  extend type Mutation {
    createObsLoggingProfile(tenantId: String!, code: String!, name: String!): ObsLoggingProfile!
    deleteObsLoggingProfile(id: ID!): Boolean!
  }
`;

export const ObsLoggingProfileGqlResolvers = {
  Query: {
    getObsLoggingProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
