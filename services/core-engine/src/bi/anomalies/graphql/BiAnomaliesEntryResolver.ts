export const BiAnomaliesEntryGqlTypeDefs = `
  type BiAnomaliesEntry {
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
    getBiAnomaliesEntry(id: ID!): BiAnomaliesEntry
    listBiAnomaliesEntrys(tenantId: String!, limit: Int): [BiAnomaliesEntry!]!
  }

  extend type Mutation {
    createBiAnomaliesEntry(tenantId: String!, code: String!, name: String!): BiAnomaliesEntry!
    deleteBiAnomaliesEntry(id: ID!): Boolean!
  }
`;

export const BiAnomaliesEntryGqlResolvers = {
  Query: {
    getBiAnomaliesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
