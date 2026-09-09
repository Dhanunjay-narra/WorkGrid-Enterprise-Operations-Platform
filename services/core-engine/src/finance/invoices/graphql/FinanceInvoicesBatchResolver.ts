export const FinanceInvoicesBatchGqlTypeDefs = `
  type FinanceInvoicesBatch {
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
    getFinanceInvoicesBatch(id: ID!): FinanceInvoicesBatch
    listFinanceInvoicesBatchs(tenantId: String!, limit: Int): [FinanceInvoicesBatch!]!
  }

  extend type Mutation {
    createFinanceInvoicesBatch(tenantId: String!, code: String!, name: String!): FinanceInvoicesBatch!
    deleteFinanceInvoicesBatch(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesBatchGqlResolvers = {
  Query: {
    getFinanceInvoicesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
