export const EventsPartitionsScheduleGqlTypeDefs = `
  type EventsPartitionsSchedule {
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
    getEventsPartitionsSchedule(id: ID!): EventsPartitionsSchedule
    listEventsPartitionsSchedules(tenantId: String!, limit: Int): [EventsPartitionsSchedule!]!
  }

  extend type Mutation {
    createEventsPartitionsSchedule(tenantId: String!, code: String!, name: String!): EventsPartitionsSchedule!
    deleteEventsPartitionsSchedule(id: ID!): Boolean!
  }
`;

export const EventsPartitionsScheduleGqlResolvers = {
  Query: {
    getEventsPartitionsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
