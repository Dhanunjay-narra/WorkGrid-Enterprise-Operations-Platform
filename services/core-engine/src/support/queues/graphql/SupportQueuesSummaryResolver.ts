export const SupportQueuesSummaryGqlTypeDefs = `
  type SupportQueuesSummary {
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
    getSupportQueuesSummary(id: ID!): SupportQueuesSummary
    listSupportQueuesSummarys(tenantId: String!, limit: Int): [SupportQueuesSummary!]!
  }

  extend type Mutation {
    createSupportQueuesSummary(tenantId: String!, code: String!, name: String!): SupportQueuesSummary!
    deleteSupportQueuesSummary(id: ID!): Boolean!
  }
`;

export const SupportQueuesSummaryGqlResolvers = {
  Query: {
    getSupportQueuesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
