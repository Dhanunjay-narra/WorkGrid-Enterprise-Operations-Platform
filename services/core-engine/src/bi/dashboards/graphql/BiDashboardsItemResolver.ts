export const BiDashboardsItemGqlTypeDefs = `
  type BiDashboardsItem {
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
    getBiDashboardsItem(id: ID!): BiDashboardsItem
    listBiDashboardsItems(tenantId: String!, limit: Int): [BiDashboardsItem!]!
  }

  extend type Mutation {
    createBiDashboardsItem(tenantId: String!, code: String!, name: String!): BiDashboardsItem!
    deleteBiDashboardsItem(id: ID!): Boolean!
  }
`;

export const BiDashboardsItemGqlResolvers = {
  Query: {
    getBiDashboardsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
