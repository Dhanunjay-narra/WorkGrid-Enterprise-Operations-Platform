export const FinanceLedgerBatchGqlTypeDefs = `
  type FinanceLedgerBatch {
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
    getFinanceLedgerBatch(id: ID!): FinanceLedgerBatch
    listFinanceLedgerBatchs(tenantId: String!, limit: Int): [FinanceLedgerBatch!]!
  }

  extend type Mutation {
    createFinanceLedgerBatch(tenantId: String!, code: String!, name: String!): FinanceLedgerBatch!
    deleteFinanceLedgerBatch(id: ID!): Boolean!
  }
`;

export const FinanceLedgerBatchGqlResolvers = {
  Query: {
    getFinanceLedgerBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
