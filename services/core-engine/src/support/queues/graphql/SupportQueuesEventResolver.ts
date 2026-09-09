export const SupportQueuesEventGqlTypeDefs = `
  type SupportQueuesEvent {
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
    getSupportQueuesEvent(id: ID!): SupportQueuesEvent
    listSupportQueuesEvents(tenantId: String!, limit: Int): [SupportQueuesEvent!]!
  }

  extend type Mutation {
    createSupportQueuesEvent(tenantId: String!, code: String!, name: String!): SupportQueuesEvent!
    deleteSupportQueuesEvent(id: ID!): Boolean!
  }
`;

export const SupportQueuesEventGqlResolvers = {
  Query: {
    getSupportQueuesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
