export const IntWebhooksTaskGqlTypeDefs = `
  type IntWebhooksTask {
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
    getIntWebhooksTask(id: ID!): IntWebhooksTask
    listIntWebhooksTasks(tenantId: String!, limit: Int): [IntWebhooksTask!]!
  }

  extend type Mutation {
    createIntWebhooksTask(tenantId: String!, code: String!, name: String!): IntWebhooksTask!
    deleteIntWebhooksTask(id: ID!): Boolean!
  }
`;

export const IntWebhooksTaskGqlResolvers = {
  Query: {
    getIntWebhooksTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
