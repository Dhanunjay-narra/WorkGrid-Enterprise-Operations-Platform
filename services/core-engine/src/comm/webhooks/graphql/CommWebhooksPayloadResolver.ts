export const CommWebhooksPayloadGqlTypeDefs = `
  type CommWebhooksPayload {
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
    getCommWebhooksPayload(id: ID!): CommWebhooksPayload
    listCommWebhooksPayloads(tenantId: String!, limit: Int): [CommWebhooksPayload!]!
  }

  extend type Mutation {
    createCommWebhooksPayload(tenantId: String!, code: String!, name: String!): CommWebhooksPayload!
    deleteCommWebhooksPayload(id: ID!): Boolean!
  }
`;

export const CommWebhooksPayloadGqlResolvers = {
  Query: {
    getCommWebhooksPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
