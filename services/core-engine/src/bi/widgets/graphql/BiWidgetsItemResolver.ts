export const BiWidgetsItemGqlTypeDefs = `
  type BiWidgetsItem {
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
    getBiWidgetsItem(id: ID!): BiWidgetsItem
    listBiWidgetsItems(tenantId: String!, limit: Int): [BiWidgetsItem!]!
  }

  extend type Mutation {
    createBiWidgetsItem(tenantId: String!, code: String!, name: String!): BiWidgetsItem!
    deleteBiWidgetsItem(id: ID!): Boolean!
  }
`;

export const BiWidgetsItemGqlResolvers = {
  Query: {
    getBiWidgetsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
