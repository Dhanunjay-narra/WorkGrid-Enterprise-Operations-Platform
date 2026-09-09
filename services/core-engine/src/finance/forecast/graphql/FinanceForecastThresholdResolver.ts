export const FinanceForecastThresholdGqlTypeDefs = `
  type FinanceForecastThreshold {
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
    getFinanceForecastThreshold(id: ID!): FinanceForecastThreshold
    listFinanceForecastThresholds(tenantId: String!, limit: Int): [FinanceForecastThreshold!]!
  }

  extend type Mutation {
    createFinanceForecastThreshold(tenantId: String!, code: String!, name: String!): FinanceForecastThreshold!
    deleteFinanceForecastThreshold(id: ID!): Boolean!
  }
`;

export const FinanceForecastThresholdGqlResolvers = {
  Query: {
    getFinanceForecastThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
