export const FinanceTreasuryThresholdGqlTypeDefs = `
  type FinanceTreasuryThreshold {
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
    getFinanceTreasuryThreshold(id: ID!): FinanceTreasuryThreshold
    listFinanceTreasuryThresholds(tenantId: String!, limit: Int): [FinanceTreasuryThreshold!]!
  }

  extend type Mutation {
    createFinanceTreasuryThreshold(tenantId: String!, code: String!, name: String!): FinanceTreasuryThreshold!
    deleteFinanceTreasuryThreshold(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryThresholdGqlResolvers = {
  Query: {
    getFinanceTreasuryThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
