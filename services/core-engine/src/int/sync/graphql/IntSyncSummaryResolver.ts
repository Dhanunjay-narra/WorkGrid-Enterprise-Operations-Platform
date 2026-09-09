export const IntSyncSummaryGqlTypeDefs = `
  type IntSyncSummary {
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
    getIntSyncSummary(id: ID!): IntSyncSummary
    listIntSyncSummarys(tenantId: String!, limit: Int): [IntSyncSummary!]!
  }

  extend type Mutation {
    createIntSyncSummary(tenantId: String!, code: String!, name: String!): IntSyncSummary!
    deleteIntSyncSummary(id: ID!): Boolean!
  }
`;

export const IntSyncSummaryGqlResolvers = {
  Query: {
    getIntSyncSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
