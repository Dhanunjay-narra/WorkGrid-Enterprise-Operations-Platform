export const ObsProfilingProfileGqlTypeDefs = `
  type ObsProfilingProfile {
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
    getObsProfilingProfile(id: ID!): ObsProfilingProfile
    listObsProfilingProfiles(tenantId: String!, limit: Int): [ObsProfilingProfile!]!
  }

  extend type Mutation {
    createObsProfilingProfile(tenantId: String!, code: String!, name: String!): ObsProfilingProfile!
    deleteObsProfilingProfile(id: ID!): Boolean!
  }
`;

export const ObsProfilingProfileGqlResolvers = {
  Query: {
    getObsProfilingProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
