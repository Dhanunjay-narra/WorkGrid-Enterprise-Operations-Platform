export const CommWebhooksTaskGqlTypeDefs = `
  type CommWebhooksTask {
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
    getCommWebhooksTask(id: ID!): CommWebhooksTask
    listCommWebhooksTasks(tenantId: String!, limit: Int): [CommWebhooksTask!]!
  }

  extend type Mutation {
    createCommWebhooksTask(tenantId: String!, code: String!, name: String!): CommWebhooksTask!
    deleteCommWebhooksTask(id: ID!): Boolean!
  }
`;

export const CommWebhooksTaskGqlResolvers = {
  Query: {
    getCommWebhooksTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
