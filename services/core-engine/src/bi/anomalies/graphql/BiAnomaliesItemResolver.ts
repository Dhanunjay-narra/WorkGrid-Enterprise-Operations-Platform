export const BiAnomaliesItemGqlTypeDefs = `
  type BiAnomaliesItem {
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
    getBiAnomaliesItem(id: ID!): BiAnomaliesItem
    listBiAnomaliesItems(tenantId: String!, limit: Int): [BiAnomaliesItem!]!
  }

  extend type Mutation {
    createBiAnomaliesItem(tenantId: String!, code: String!, name: String!): BiAnomaliesItem!
    deleteBiAnomaliesItem(id: ID!): Boolean!
  }
`;

export const BiAnomaliesItemGqlResolvers = {
  Query: {
    getBiAnomaliesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
