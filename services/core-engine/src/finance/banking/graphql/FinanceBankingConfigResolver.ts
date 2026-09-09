export const FinanceBankingConfigGqlTypeDefs = `
  type FinanceBankingConfig {
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
    getFinanceBankingConfig(id: ID!): FinanceBankingConfig
    listFinanceBankingConfigs(tenantId: String!, limit: Int): [FinanceBankingConfig!]!
  }

  extend type Mutation {
    createFinanceBankingConfig(tenantId: String!, code: String!, name: String!): FinanceBankingConfig!
    deleteFinanceBankingConfig(id: ID!): Boolean!
  }
`;

export const FinanceBankingConfigGqlResolvers = {
  Query: {
    getFinanceBankingConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
