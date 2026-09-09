export const FinanceForecastItemGqlTypeDefs = `
  type FinanceForecastItem {
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
    getFinanceForecastItem(id: ID!): FinanceForecastItem
    listFinanceForecastItems(tenantId: String!, limit: Int): [FinanceForecastItem!]!
  }

  extend type Mutation {
    createFinanceForecastItem(tenantId: String!, code: String!, name: String!): FinanceForecastItem!
    deleteFinanceForecastItem(id: ID!): Boolean!
  }
`;

export const FinanceForecastItemGqlResolvers = {
  Query: {
    getFinanceForecastItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
