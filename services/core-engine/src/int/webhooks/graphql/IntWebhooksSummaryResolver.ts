export const IntWebhooksSummaryGqlTypeDefs = `
  type IntWebhooksSummary {
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
    getIntWebhooksSummary(id: ID!): IntWebhooksSummary
    listIntWebhooksSummarys(tenantId: String!, limit: Int): [IntWebhooksSummary!]!
  }

  extend type Mutation {
    createIntWebhooksSummary(tenantId: String!, code: String!, name: String!): IntWebhooksSummary!
    deleteIntWebhooksSummary(id: ID!): Boolean!
  }
`;

export const IntWebhooksSummaryGqlResolvers = {
  Query: {
    getIntWebhooksSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
