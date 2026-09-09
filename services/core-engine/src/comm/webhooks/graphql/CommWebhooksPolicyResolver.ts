export const CommWebhooksPolicyGqlTypeDefs = `
  type CommWebhooksPolicy {
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
    getCommWebhooksPolicy(id: ID!): CommWebhooksPolicy
    listCommWebhooksPolicys(tenantId: String!, limit: Int): [CommWebhooksPolicy!]!
  }

  extend type Mutation {
    createCommWebhooksPolicy(tenantId: String!, code: String!, name: String!): CommWebhooksPolicy!
    deleteCommWebhooksPolicy(id: ID!): Boolean!
  }
`;

export const CommWebhooksPolicyGqlResolvers = {
  Query: {
    getCommWebhooksPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
