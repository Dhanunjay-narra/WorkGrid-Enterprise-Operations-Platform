export const IntSalesforceSummaryGqlTypeDefs = `
  type IntSalesforceSummary {
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
    getIntSalesforceSummary(id: ID!): IntSalesforceSummary
    listIntSalesforceSummarys(tenantId: String!, limit: Int): [IntSalesforceSummary!]!
  }

  extend type Mutation {
    createIntSalesforceSummary(tenantId: String!, code: String!, name: String!): IntSalesforceSummary!
    deleteIntSalesforceSummary(id: ID!): Boolean!
  }
`;

export const IntSalesforceSummaryGqlResolvers = {
  Query: {
    getIntSalesforceSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
