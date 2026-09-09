export const IntWebhooksConfigGqlTypeDefs = `
  type IntWebhooksConfig {
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
    getIntWebhooksConfig(id: ID!): IntWebhooksConfig
    listIntWebhooksConfigs(tenantId: String!, limit: Int): [IntWebhooksConfig!]!
  }

  extend type Mutation {
    createIntWebhooksConfig(tenantId: String!, code: String!, name: String!): IntWebhooksConfig!
    deleteIntWebhooksConfig(id: ID!): Boolean!
  }
`;

export const IntWebhooksConfigGqlResolvers = {
  Query: {
    getIntWebhooksConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
