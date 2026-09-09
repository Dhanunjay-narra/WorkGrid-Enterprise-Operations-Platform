export const IntWebhooksBatchGqlTypeDefs = `
  type IntWebhooksBatch {
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
    getIntWebhooksBatch(id: ID!): IntWebhooksBatch
    listIntWebhooksBatchs(tenantId: String!, limit: Int): [IntWebhooksBatch!]!
  }

  extend type Mutation {
    createIntWebhooksBatch(tenantId: String!, code: String!, name: String!): IntWebhooksBatch!
    deleteIntWebhooksBatch(id: ID!): Boolean!
  }
`;

export const IntWebhooksBatchGqlResolvers = {
  Query: {
    getIntWebhooksBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
