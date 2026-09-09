export const CommWebhooksMappingGqlTypeDefs = `
  type CommWebhooksMapping {
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
    getCommWebhooksMapping(id: ID!): CommWebhooksMapping
    listCommWebhooksMappings(tenantId: String!, limit: Int): [CommWebhooksMapping!]!
  }

  extend type Mutation {
    createCommWebhooksMapping(tenantId: String!, code: String!, name: String!): CommWebhooksMapping!
    deleteCommWebhooksMapping(id: ID!): Boolean!
  }
`;

export const CommWebhooksMappingGqlResolvers = {
  Query: {
    getCommWebhooksMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
