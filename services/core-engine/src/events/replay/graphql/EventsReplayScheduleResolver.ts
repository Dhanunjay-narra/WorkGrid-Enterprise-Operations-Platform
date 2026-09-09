export const EventsReplayScheduleGqlTypeDefs = `
  type EventsReplaySchedule {
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
    getEventsReplaySchedule(id: ID!): EventsReplaySchedule
    listEventsReplaySchedules(tenantId: String!, limit: Int): [EventsReplaySchedule!]!
  }

  extend type Mutation {
    createEventsReplaySchedule(tenantId: String!, code: String!, name: String!): EventsReplaySchedule!
    deleteEventsReplaySchedule(id: ID!): Boolean!
  }
`;

export const EventsReplayScheduleGqlResolvers = {
  Query: {
    getEventsReplaySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplaySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
