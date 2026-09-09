export const CommThreadsProfileGqlTypeDefs = `
  type CommThreadsProfile {
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
    getCommThreadsProfile(id: ID!): CommThreadsProfile
    listCommThreadsProfiles(tenantId: String!, limit: Int): [CommThreadsProfile!]!
  }

  extend type Mutation {
    createCommThreadsProfile(tenantId: String!, code: String!, name: String!): CommThreadsProfile!
    deleteCommThreadsProfile(id: ID!): Boolean!
  }
`;

export const CommThreadsProfileGqlResolvers = {
  Query: {
    getCommThreadsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
