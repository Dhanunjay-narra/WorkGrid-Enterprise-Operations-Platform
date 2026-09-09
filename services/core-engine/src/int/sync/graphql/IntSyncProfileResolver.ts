export const IntSyncProfileGqlTypeDefs = `
  type IntSyncProfile {
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
    getIntSyncProfile(id: ID!): IntSyncProfile
    listIntSyncProfiles(tenantId: String!, limit: Int): [IntSyncProfile!]!
  }

  extend type Mutation {
    createIntSyncProfile(tenantId: String!, code: String!, name: String!): IntSyncProfile!
    deleteIntSyncProfile(id: ID!): Boolean!
  }
`;

export const IntSyncProfileGqlResolvers = {
  Query: {
    getIntSyncProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
