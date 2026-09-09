export const CrmForecastingItemGqlTypeDefs = `
  type CrmForecastingItem {
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
    getCrmForecastingItem(id: ID!): CrmForecastingItem
    listCrmForecastingItems(tenantId: String!, limit: Int): [CrmForecastingItem!]!
  }

  extend type Mutation {
    createCrmForecastingItem(tenantId: String!, code: String!, name: String!): CrmForecastingItem!
    deleteCrmForecastingItem(id: ID!): Boolean!
  }
`;

export const CrmForecastingItemGqlResolvers = {
  Query: {
    getCrmForecastingItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
