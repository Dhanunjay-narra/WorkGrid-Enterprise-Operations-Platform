export const FinanceBankingBatchGqlTypeDefs = `
  type FinanceBankingBatch {
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
    getFinanceBankingBatch(id: ID!): FinanceBankingBatch
    listFinanceBankingBatchs(tenantId: String!, limit: Int): [FinanceBankingBatch!]!
  }

  extend type Mutation {
    createFinanceBankingBatch(tenantId: String!, code: String!, name: String!): FinanceBankingBatch!
    deleteFinanceBankingBatch(id: ID!): Boolean!
  }
`;

export const FinanceBankingBatchGqlResolvers = {
  Query: {
    getFinanceBankingBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
