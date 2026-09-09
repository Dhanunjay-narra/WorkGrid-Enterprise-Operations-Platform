export const FinanceTreasuryBatchGqlTypeDefs = `
  type FinanceTreasuryBatch {
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
    getFinanceTreasuryBatch(id: ID!): FinanceTreasuryBatch
    listFinanceTreasuryBatchs(tenantId: String!, limit: Int): [FinanceTreasuryBatch!]!
  }

  extend type Mutation {
    createFinanceTreasuryBatch(tenantId: String!, code: String!, name: String!): FinanceTreasuryBatch!
    deleteFinanceTreasuryBatch(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryBatchGqlResolvers = {
  Query: {
    getFinanceTreasuryBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
