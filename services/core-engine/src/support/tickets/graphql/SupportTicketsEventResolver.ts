export const SupportTicketsEventGqlTypeDefs = `
  type SupportTicketsEvent {
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
    getSupportTicketsEvent(id: ID!): SupportTicketsEvent
    listSupportTicketsEvents(tenantId: String!, limit: Int): [SupportTicketsEvent!]!
  }

  extend type Mutation {
    createSupportTicketsEvent(tenantId: String!, code: String!, name: String!): SupportTicketsEvent!
    deleteSupportTicketsEvent(id: ID!): Boolean!
  }
`;

export const SupportTicketsEventGqlResolvers = {
  Query: {
    getSupportTicketsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
