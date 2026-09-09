export const SupportKnowledgeSummaryGqlTypeDefs = `
  type SupportKnowledgeSummary {
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
    getSupportKnowledgeSummary(id: ID!): SupportKnowledgeSummary
    listSupportKnowledgeSummarys(tenantId: String!, limit: Int): [SupportKnowledgeSummary!]!
  }

  extend type Mutation {
    createSupportKnowledgeSummary(tenantId: String!, code: String!, name: String!): SupportKnowledgeSummary!
    deleteSupportKnowledgeSummary(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeSummaryGqlResolvers = {
  Query: {
    getSupportKnowledgeSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
