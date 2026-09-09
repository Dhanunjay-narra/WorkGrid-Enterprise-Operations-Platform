export const FinanceLedgerThresholdGqlTypeDefs = `
  type FinanceLedgerThreshold {
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
    getFinanceLedgerThreshold(id: ID!): FinanceLedgerThreshold
    listFinanceLedgerThresholds(tenantId: String!, limit: Int): [FinanceLedgerThreshold!]!
  }

  extend type Mutation {
    createFinanceLedgerThreshold(tenantId: String!, code: String!, name: String!): FinanceLedgerThreshold!
    deleteFinanceLedgerThreshold(id: ID!): Boolean!
  }
`;

export const FinanceLedgerThresholdGqlResolvers = {
  Query: {
    getFinanceLedgerThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
