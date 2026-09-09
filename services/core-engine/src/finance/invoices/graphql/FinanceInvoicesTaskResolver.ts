export const FinanceInvoicesTaskGqlTypeDefs = `
  type FinanceInvoicesTask {
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
    getFinanceInvoicesTask(id: ID!): FinanceInvoicesTask
    listFinanceInvoicesTasks(tenantId: String!, limit: Int): [FinanceInvoicesTask!]!
  }

  extend type Mutation {
    createFinanceInvoicesTask(tenantId: String!, code: String!, name: String!): FinanceInvoicesTask!
    deleteFinanceInvoicesTask(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesTaskGqlResolvers = {
  Query: {
    getFinanceInvoicesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
