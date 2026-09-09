export const EventsDeadletterScheduleGqlTypeDefs = `
  type EventsDeadletterSchedule {
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
    getEventsDeadletterSchedule(id: ID!): EventsDeadletterSchedule
    listEventsDeadletterSchedules(tenantId: String!, limit: Int): [EventsDeadletterSchedule!]!
  }

  extend type Mutation {
    createEventsDeadletterSchedule(tenantId: String!, code: String!, name: String!): EventsDeadletterSchedule!
    deleteEventsDeadletterSchedule(id: ID!): Boolean!
  }
`;

export const EventsDeadletterScheduleGqlResolvers = {
  Query: {
    getEventsDeadletterSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
