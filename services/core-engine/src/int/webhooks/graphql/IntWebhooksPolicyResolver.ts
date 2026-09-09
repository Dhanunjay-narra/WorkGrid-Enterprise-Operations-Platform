export const IntWebhooksPolicyGqlTypeDefs = `
  type IntWebhooksPolicy {
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
    getIntWebhooksPolicy(id: ID!): IntWebhooksPolicy
    listIntWebhooksPolicys(tenantId: String!, limit: Int): [IntWebhooksPolicy!]!
  }

  extend type Mutation {
    createIntWebhooksPolicy(tenantId: String!, code: String!, name: String!): IntWebhooksPolicy!
    deleteIntWebhooksPolicy(id: ID!): Boolean!
  }
`;

export const IntWebhooksPolicyGqlResolvers = {
  Query: {
    getIntWebhooksPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
