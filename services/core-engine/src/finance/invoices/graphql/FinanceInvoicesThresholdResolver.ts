export const FinanceInvoicesThresholdGqlTypeDefs = `
  type FinanceInvoicesThreshold {
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
    getFinanceInvoicesThreshold(id: ID!): FinanceInvoicesThreshold
    listFinanceInvoicesThresholds(tenantId: String!, limit: Int): [FinanceInvoicesThreshold!]!
  }

  extend type Mutation {
    createFinanceInvoicesThreshold(tenantId: String!, code: String!, name: String!): FinanceInvoicesThreshold!
    deleteFinanceInvoicesThreshold(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesThresholdGqlResolvers = {
  Query: {
    getFinanceInvoicesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
