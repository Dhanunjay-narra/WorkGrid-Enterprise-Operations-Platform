export const ObsSpansProfileGqlTypeDefs = `
  type ObsSpansProfile {
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
    getObsSpansProfile(id: ID!): ObsSpansProfile
    listObsSpansProfiles(tenantId: String!, limit: Int): [ObsSpansProfile!]!
  }

  extend type Mutation {
    createObsSpansProfile(tenantId: String!, code: String!, name: String!): ObsSpansProfile!
    deleteObsSpansProfile(id: ID!): Boolean!
  }
`;

export const ObsSpansProfileGqlResolvers = {
  Query: {
    getObsSpansProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
