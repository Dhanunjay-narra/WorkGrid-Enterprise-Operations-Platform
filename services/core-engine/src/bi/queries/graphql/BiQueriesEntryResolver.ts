export const BiQueriesEntryGqlTypeDefs = `
  type BiQueriesEntry {
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
    getBiQueriesEntry(id: ID!): BiQueriesEntry
    listBiQueriesEntrys(tenantId: String!, limit: Int): [BiQueriesEntry!]!
  }

  extend type Mutation {
    createBiQueriesEntry(tenantId: String!, code: String!, name: String!): BiQueriesEntry!
    deleteBiQueriesEntry(id: ID!): Boolean!
  }
`;

export const BiQueriesEntryGqlResolvers = {
  Query: {
    getBiQueriesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
