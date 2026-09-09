export const ObsProbesProfileGqlTypeDefs = `
  type ObsProbesProfile {
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
    getObsProbesProfile(id: ID!): ObsProbesProfile
    listObsProbesProfiles(tenantId: String!, limit: Int): [ObsProbesProfile!]!
  }

  extend type Mutation {
    createObsProbesProfile(tenantId: String!, code: String!, name: String!): ObsProbesProfile!
    deleteObsProbesProfile(id: ID!): Boolean!
  }
`;

export const ObsProbesProfileGqlResolvers = {
  Query: {
    getObsProbesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
