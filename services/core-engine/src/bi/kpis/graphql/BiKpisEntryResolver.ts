export const BiKpisEntryGqlTypeDefs = `
  type BiKpisEntry {
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
    getBiKpisEntry(id: ID!): BiKpisEntry
    listBiKpisEntrys(tenantId: String!, limit: Int): [BiKpisEntry!]!
  }

  extend type Mutation {
    createBiKpisEntry(tenantId: String!, code: String!, name: String!): BiKpisEntry!
    deleteBiKpisEntry(id: ID!): Boolean!
  }
`;

export const BiKpisEntryGqlResolvers = {
  Query: {
    getBiKpisEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
