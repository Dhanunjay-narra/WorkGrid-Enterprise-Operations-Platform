export const FinanceTaxesConfigGqlTypeDefs = `
  type FinanceTaxesConfig {
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
    getFinanceTaxesConfig(id: ID!): FinanceTaxesConfig
    listFinanceTaxesConfigs(tenantId: String!, limit: Int): [FinanceTaxesConfig!]!
  }

  extend type Mutation {
    createFinanceTaxesConfig(tenantId: String!, code: String!, name: String!): FinanceTaxesConfig!
    deleteFinanceTaxesConfig(id: ID!): Boolean!
  }
`;

export const FinanceTaxesConfigGqlResolvers = {
  Query: {
    getFinanceTaxesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
