export const IntWebhooksMappingGqlTypeDefs = `
  type IntWebhooksMapping {
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
    getIntWebhooksMapping(id: ID!): IntWebhooksMapping
    listIntWebhooksMappings(tenantId: String!, limit: Int): [IntWebhooksMapping!]!
  }

  extend type Mutation {
    createIntWebhooksMapping(tenantId: String!, code: String!, name: String!): IntWebhooksMapping!
    deleteIntWebhooksMapping(id: ID!): Boolean!
  }
`;

export const IntWebhooksMappingGqlResolvers = {
  Query: {
    getIntWebhooksMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
