export const FinanceInvoicesPayloadGqlTypeDefs = `
  type FinanceInvoicesPayload {
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
    getFinanceInvoicesPayload(id: ID!): FinanceInvoicesPayload
    listFinanceInvoicesPayloads(tenantId: String!, limit: Int): [FinanceInvoicesPayload!]!
  }

  extend type Mutation {
    createFinanceInvoicesPayload(tenantId: String!, code: String!, name: String!): FinanceInvoicesPayload!
    deleteFinanceInvoicesPayload(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesPayloadGqlResolvers = {
  Query: {
    getFinanceInvoicesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
