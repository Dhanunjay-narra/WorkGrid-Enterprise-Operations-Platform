export const CommWebhooksEventGqlTypeDefs = `
  type CommWebhooksEvent {
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
    getCommWebhooksEvent(id: ID!): CommWebhooksEvent
    listCommWebhooksEvents(tenantId: String!, limit: Int): [CommWebhooksEvent!]!
  }

  extend type Mutation {
    createCommWebhooksEvent(tenantId: String!, code: String!, name: String!): CommWebhooksEvent!
    deleteCommWebhooksEvent(id: ID!): Boolean!
  }
`;

export const CommWebhooksEventGqlResolvers = {
  Query: {
    getCommWebhooksEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
