export const FinanceBillsSummaryGqlTypeDefs = `
  type FinanceBillsSummary {
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
    getFinanceBillsSummary(id: ID!): FinanceBillsSummary
    listFinanceBillsSummarys(tenantId: String!, limit: Int): [FinanceBillsSummary!]!
  }

  extend type Mutation {
    createFinanceBillsSummary(tenantId: String!, code: String!, name: String!): FinanceBillsSummary!
    deleteFinanceBillsSummary(id: ID!): Boolean!
  }
`;

export const FinanceBillsSummaryGqlResolvers = {
  Query: {
    getFinanceBillsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
