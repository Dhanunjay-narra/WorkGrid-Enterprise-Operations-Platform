export const IntStripeSummaryGqlTypeDefs = `
  type IntStripeSummary {
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
    getIntStripeSummary(id: ID!): IntStripeSummary
    listIntStripeSummarys(tenantId: String!, limit: Int): [IntStripeSummary!]!
  }

  extend type Mutation {
    createIntStripeSummary(tenantId: String!, code: String!, name: String!): IntStripeSummary!
    deleteIntStripeSummary(id: ID!): Boolean!
  }
`;

export const IntStripeSummaryGqlResolvers = {
  Query: {
    getIntStripeSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
