export const IntWebhooksSessionGqlTypeDefs = `
  type IntWebhooksSession {
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
    getIntWebhooksSession(id: ID!): IntWebhooksSession
    listIntWebhooksSessions(tenantId: String!, limit: Int): [IntWebhooksSession!]!
  }

  extend type Mutation {
    createIntWebhooksSession(tenantId: String!, code: String!, name: String!): IntWebhooksSession!
    deleteIntWebhooksSession(id: ID!): Boolean!
  }
`;

export const IntWebhooksSessionGqlResolvers = {
  Query: {
    getIntWebhooksSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
