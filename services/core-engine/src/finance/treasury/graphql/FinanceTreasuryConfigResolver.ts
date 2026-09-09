export const FinanceTreasuryConfigGqlTypeDefs = `
  type FinanceTreasuryConfig {
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
    getFinanceTreasuryConfig(id: ID!): FinanceTreasuryConfig
    listFinanceTreasuryConfigs(tenantId: String!, limit: Int): [FinanceTreasuryConfig!]!
  }

  extend type Mutation {
    createFinanceTreasuryConfig(tenantId: String!, code: String!, name: String!): FinanceTreasuryConfig!
    deleteFinanceTreasuryConfig(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryConfigGqlResolvers = {
  Query: {
    getFinanceTreasuryConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
