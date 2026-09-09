export const FinanceInvoicesSessionGqlTypeDefs = `
  type FinanceInvoicesSession {
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
    getFinanceInvoicesSession(id: ID!): FinanceInvoicesSession
    listFinanceInvoicesSessions(tenantId: String!, limit: Int): [FinanceInvoicesSession!]!
  }

  extend type Mutation {
    createFinanceInvoicesSession(tenantId: String!, code: String!, name: String!): FinanceInvoicesSession!
    deleteFinanceInvoicesSession(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesSessionGqlResolvers = {
  Query: {
    getFinanceInvoicesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
