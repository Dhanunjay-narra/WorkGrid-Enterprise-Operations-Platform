export const FinanceBankingThresholdGqlTypeDefs = `
  type FinanceBankingThreshold {
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
    getFinanceBankingThreshold(id: ID!): FinanceBankingThreshold
    listFinanceBankingThresholds(tenantId: String!, limit: Int): [FinanceBankingThreshold!]!
  }

  extend type Mutation {
    createFinanceBankingThreshold(tenantId: String!, code: String!, name: String!): FinanceBankingThreshold!
    deleteFinanceBankingThreshold(id: ID!): Boolean!
  }
`;

export const FinanceBankingThresholdGqlResolvers = {
  Query: {
    getFinanceBankingThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
