export const BiCohortsEntryGqlTypeDefs = `
  type BiCohortsEntry {
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
    getBiCohortsEntry(id: ID!): BiCohortsEntry
    listBiCohortsEntrys(tenantId: String!, limit: Int): [BiCohortsEntry!]!
  }

  extend type Mutation {
    createBiCohortsEntry(tenantId: String!, code: String!, name: String!): BiCohortsEntry!
    deleteBiCohortsEntry(id: ID!): Boolean!
  }
`;

export const BiCohortsEntryGqlResolvers = {
  Query: {
    getBiCohortsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
