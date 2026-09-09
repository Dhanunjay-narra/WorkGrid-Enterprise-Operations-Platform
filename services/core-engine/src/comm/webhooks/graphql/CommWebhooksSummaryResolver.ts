export const CommWebhooksSummaryGqlTypeDefs = `
  type CommWebhooksSummary {
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
    getCommWebhooksSummary(id: ID!): CommWebhooksSummary
    listCommWebhooksSummarys(tenantId: String!, limit: Int): [CommWebhooksSummary!]!
  }

  extend type Mutation {
    createCommWebhooksSummary(tenantId: String!, code: String!, name: String!): CommWebhooksSummary!
    deleteCommWebhooksSummary(id: ID!): Boolean!
  }
`;

export const CommWebhooksSummaryGqlResolvers = {
  Query: {
    getCommWebhooksSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
