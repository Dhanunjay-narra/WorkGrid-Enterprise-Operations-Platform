export const FinanceTaxesSummaryGqlTypeDefs = `
  type FinanceTaxesSummary {
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
    getFinanceTaxesSummary(id: ID!): FinanceTaxesSummary
    listFinanceTaxesSummarys(tenantId: String!, limit: Int): [FinanceTaxesSummary!]!
  }

  extend type Mutation {
    createFinanceTaxesSummary(tenantId: String!, code: String!, name: String!): FinanceTaxesSummary!
    deleteFinanceTaxesSummary(id: ID!): Boolean!
  }
`;

export const FinanceTaxesSummaryGqlResolvers = {
  Query: {
    getFinanceTaxesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
