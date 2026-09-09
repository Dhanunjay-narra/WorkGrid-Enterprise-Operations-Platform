export const CommWebhooksBatchGqlTypeDefs = `
  type CommWebhooksBatch {
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
    getCommWebhooksBatch(id: ID!): CommWebhooksBatch
    listCommWebhooksBatchs(tenantId: String!, limit: Int): [CommWebhooksBatch!]!
  }

  extend type Mutation {
    createCommWebhooksBatch(tenantId: String!, code: String!, name: String!): CommWebhooksBatch!
    deleteCommWebhooksBatch(id: ID!): Boolean!
  }
`;

export const CommWebhooksBatchGqlResolvers = {
  Query: {
    getCommWebhooksBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
