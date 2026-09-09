export const BiWidgetsEntryGqlTypeDefs = `
  type BiWidgetsEntry {
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
    getBiWidgetsEntry(id: ID!): BiWidgetsEntry
    listBiWidgetsEntrys(tenantId: String!, limit: Int): [BiWidgetsEntry!]!
  }

  extend type Mutation {
    createBiWidgetsEntry(tenantId: String!, code: String!, name: String!): BiWidgetsEntry!
    deleteBiWidgetsEntry(id: ID!): Boolean!
  }
`;

export const BiWidgetsEntryGqlResolvers = {
  Query: {
    getBiWidgetsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
