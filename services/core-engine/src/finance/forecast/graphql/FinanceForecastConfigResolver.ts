export const FinanceForecastConfigGqlTypeDefs = `
  type FinanceForecastConfig {
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
    getFinanceForecastConfig(id: ID!): FinanceForecastConfig
    listFinanceForecastConfigs(tenantId: String!, limit: Int): [FinanceForecastConfig!]!
  }

  extend type Mutation {
    createFinanceForecastConfig(tenantId: String!, code: String!, name: String!): FinanceForecastConfig!
    deleteFinanceForecastConfig(id: ID!): Boolean!
  }
`;

export const FinanceForecastConfigGqlResolvers = {
  Query: {
    getFinanceForecastConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
