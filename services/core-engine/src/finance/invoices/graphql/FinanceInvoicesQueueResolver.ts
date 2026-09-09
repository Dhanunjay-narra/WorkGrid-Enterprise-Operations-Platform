export const FinanceInvoicesQueueGqlTypeDefs = `
  type FinanceInvoicesQueue {
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
    getFinanceInvoicesQueue(id: ID!): FinanceInvoicesQueue
    listFinanceInvoicesQueues(tenantId: String!, limit: Int): [FinanceInvoicesQueue!]!
  }

  extend type Mutation {
    createFinanceInvoicesQueue(tenantId: String!, code: String!, name: String!): FinanceInvoicesQueue!
    deleteFinanceInvoicesQueue(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesQueueGqlResolvers = {
  Query: {
    getFinanceInvoicesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
