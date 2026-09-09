export const FinanceForecastBatchGqlTypeDefs = `
  type FinanceForecastBatch {
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
    getFinanceForecastBatch(id: ID!): FinanceForecastBatch
    listFinanceForecastBatchs(tenantId: String!, limit: Int): [FinanceForecastBatch!]!
  }

  extend type Mutation {
    createFinanceForecastBatch(tenantId: String!, code: String!, name: String!): FinanceForecastBatch!
    deleteFinanceForecastBatch(id: ID!): Boolean!
  }
`;

export const FinanceForecastBatchGqlResolvers = {
  Query: {
    getFinanceForecastBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
