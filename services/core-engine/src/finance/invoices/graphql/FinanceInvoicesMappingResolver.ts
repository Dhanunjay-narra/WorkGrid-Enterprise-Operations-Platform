export const FinanceInvoicesMappingGqlTypeDefs = `
  type FinanceInvoicesMapping {
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
    getFinanceInvoicesMapping(id: ID!): FinanceInvoicesMapping
    listFinanceInvoicesMappings(tenantId: String!, limit: Int): [FinanceInvoicesMapping!]!
  }

  extend type Mutation {
    createFinanceInvoicesMapping(tenantId: String!, code: String!, name: String!): FinanceInvoicesMapping!
    deleteFinanceInvoicesMapping(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesMappingGqlResolvers = {
  Query: {
    getFinanceInvoicesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
