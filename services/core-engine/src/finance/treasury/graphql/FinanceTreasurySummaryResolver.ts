export const FinanceTreasurySummaryGqlTypeDefs = `
  type FinanceTreasurySummary {
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
    getFinanceTreasurySummary(id: ID!): FinanceTreasurySummary
    listFinanceTreasurySummarys(tenantId: String!, limit: Int): [FinanceTreasurySummary!]!
  }

  extend type Mutation {
    createFinanceTreasurySummary(tenantId: String!, code: String!, name: String!): FinanceTreasurySummary!
    deleteFinanceTreasurySummary(id: ID!): Boolean!
  }
`;

export const FinanceTreasurySummaryGqlResolvers = {
  Query: {
    getFinanceTreasurySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasurySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
