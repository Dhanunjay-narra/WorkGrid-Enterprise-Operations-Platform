export const FinanceExpensesConfigGqlTypeDefs = `
  type FinanceExpensesConfig {
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
    getFinanceExpensesConfig(id: ID!): FinanceExpensesConfig
    listFinanceExpensesConfigs(tenantId: String!, limit: Int): [FinanceExpensesConfig!]!
  }

  extend type Mutation {
    createFinanceExpensesConfig(tenantId: String!, code: String!, name: String!): FinanceExpensesConfig!
    deleteFinanceExpensesConfig(id: ID!): Boolean!
  }
`;

export const FinanceExpensesConfigGqlResolvers = {
  Query: {
    getFinanceExpensesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
