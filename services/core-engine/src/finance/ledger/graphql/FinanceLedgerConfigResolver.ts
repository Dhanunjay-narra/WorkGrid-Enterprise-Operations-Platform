export const FinanceLedgerConfigGqlTypeDefs = `
  type FinanceLedgerConfig {
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
    getFinanceLedgerConfig(id: ID!): FinanceLedgerConfig
    listFinanceLedgerConfigs(tenantId: String!, limit: Int): [FinanceLedgerConfig!]!
  }

  extend type Mutation {
    createFinanceLedgerConfig(tenantId: String!, code: String!, name: String!): FinanceLedgerConfig!
    deleteFinanceLedgerConfig(id: ID!): Boolean!
  }
`;

export const FinanceLedgerConfigGqlResolvers = {
  Query: {
    getFinanceLedgerConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
