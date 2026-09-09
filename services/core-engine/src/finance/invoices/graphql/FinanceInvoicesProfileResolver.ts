export const FinanceInvoicesProfileGqlTypeDefs = `
  type FinanceInvoicesProfile {
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
    getFinanceInvoicesProfile(id: ID!): FinanceInvoicesProfile
    listFinanceInvoicesProfiles(tenantId: String!, limit: Int): [FinanceInvoicesProfile!]!
  }

  extend type Mutation {
    createFinanceInvoicesProfile(tenantId: String!, code: String!, name: String!): FinanceInvoicesProfile!
    deleteFinanceInvoicesProfile(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesProfileGqlResolvers = {
  Query: {
    getFinanceInvoicesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
