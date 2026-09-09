export const EventsIdempotencyScheduleGqlTypeDefs = `
  type EventsIdempotencySchedule {
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
    getEventsIdempotencySchedule(id: ID!): EventsIdempotencySchedule
    listEventsIdempotencySchedules(tenantId: String!, limit: Int): [EventsIdempotencySchedule!]!
  }

  extend type Mutation {
    createEventsIdempotencySchedule(tenantId: String!, code: String!, name: String!): EventsIdempotencySchedule!
    deleteEventsIdempotencySchedule(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyScheduleGqlResolvers = {
  Query: {
    getEventsIdempotencySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
