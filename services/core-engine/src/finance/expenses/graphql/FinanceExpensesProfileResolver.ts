export const FinanceExpensesProfileGqlTypeDefs = `
  type FinanceExpensesProfile {
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
    getFinanceExpensesProfile(id: ID!): FinanceExpensesProfile
    listFinanceExpensesProfiles(tenantId: String!, limit: Int): [FinanceExpensesProfile!]!
  }

  extend type Mutation {
    createFinanceExpensesProfile(tenantId: String!, code: String!, name: String!): FinanceExpensesProfile!
    deleteFinanceExpensesProfile(id: ID!): Boolean!
  }
`;

export const FinanceExpensesProfileGqlResolvers = {
  Query: {
    getFinanceExpensesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
