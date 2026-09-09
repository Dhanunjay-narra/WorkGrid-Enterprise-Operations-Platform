export const EventsDeadletterPolicyGqlTypeDefs = `
  type EventsDeadletterPolicy {
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
    getEventsDeadletterPolicy(id: ID!): EventsDeadletterPolicy
    listEventsDeadletterPolicys(tenantId: String!, limit: Int): [EventsDeadletterPolicy!]!
  }

  extend type Mutation {
    createEventsDeadletterPolicy(tenantId: String!, code: String!, name: String!): EventsDeadletterPolicy!
    deleteEventsDeadletterPolicy(id: ID!): Boolean!
  }
`;

export const EventsDeadletterPolicyGqlResolvers = {
  Query: {
    getEventsDeadletterPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
