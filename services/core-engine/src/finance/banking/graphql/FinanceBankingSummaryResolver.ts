export const FinanceBankingSummaryGqlTypeDefs = `
  type FinanceBankingSummary {
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
    getFinanceBankingSummary(id: ID!): FinanceBankingSummary
    listFinanceBankingSummarys(tenantId: String!, limit: Int): [FinanceBankingSummary!]!
  }

  extend type Mutation {
    createFinanceBankingSummary(tenantId: String!, code: String!, name: String!): FinanceBankingSummary!
    deleteFinanceBankingSummary(id: ID!): Boolean!
  }
`;

export const FinanceBankingSummaryGqlResolvers = {
  Query: {
    getFinanceBankingSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
