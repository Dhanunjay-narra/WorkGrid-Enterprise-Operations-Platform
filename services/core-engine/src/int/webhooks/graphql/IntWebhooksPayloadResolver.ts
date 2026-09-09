export const IntWebhooksPayloadGqlTypeDefs = `
  type IntWebhooksPayload {
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
    getIntWebhooksPayload(id: ID!): IntWebhooksPayload
    listIntWebhooksPayloads(tenantId: String!, limit: Int): [IntWebhooksPayload!]!
  }

  extend type Mutation {
    createIntWebhooksPayload(tenantId: String!, code: String!, name: String!): IntWebhooksPayload!
    deleteIntWebhooksPayload(id: ID!): Boolean!
  }
`;

export const IntWebhooksPayloadGqlResolvers = {
  Query: {
    getIntWebhooksPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
