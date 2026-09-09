export const CommWebhooksSessionGqlTypeDefs = `
  type CommWebhooksSession {
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
    getCommWebhooksSession(id: ID!): CommWebhooksSession
    listCommWebhooksSessions(tenantId: String!, limit: Int): [CommWebhooksSession!]!
  }

  extend type Mutation {
    createCommWebhooksSession(tenantId: String!, code: String!, name: String!): CommWebhooksSession!
    deleteCommWebhooksSession(id: ID!): Boolean!
  }
`;

export const CommWebhooksSessionGqlResolvers = {
  Query: {
    getCommWebhooksSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
