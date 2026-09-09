export const IntWebhooksEventGqlTypeDefs = `
  type IntWebhooksEvent {
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
    getIntWebhooksEvent(id: ID!): IntWebhooksEvent
    listIntWebhooksEvents(tenantId: String!, limit: Int): [IntWebhooksEvent!]!
  }

  extend type Mutation {
    createIntWebhooksEvent(tenantId: String!, code: String!, name: String!): IntWebhooksEvent!
    deleteIntWebhooksEvent(id: ID!): Boolean!
  }
`;

export const IntWebhooksEventGqlResolvers = {
  Query: {
    getIntWebhooksEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
