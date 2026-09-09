export const CommWebhooksConfigGqlTypeDefs = `
  type CommWebhooksConfig {
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
    getCommWebhooksConfig(id: ID!): CommWebhooksConfig
    listCommWebhooksConfigs(tenantId: String!, limit: Int): [CommWebhooksConfig!]!
  }

  extend type Mutation {
    createCommWebhooksConfig(tenantId: String!, code: String!, name: String!): CommWebhooksConfig!
    deleteCommWebhooksConfig(id: ID!): Boolean!
  }
`;

export const CommWebhooksConfigGqlResolvers = {
  Query: {
    getCommWebhooksConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
