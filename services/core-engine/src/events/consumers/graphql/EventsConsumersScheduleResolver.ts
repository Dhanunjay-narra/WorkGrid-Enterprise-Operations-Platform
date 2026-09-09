export const EventsConsumersScheduleGqlTypeDefs = `
  type EventsConsumersSchedule {
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
    getEventsConsumersSchedule(id: ID!): EventsConsumersSchedule
    listEventsConsumersSchedules(tenantId: String!, limit: Int): [EventsConsumersSchedule!]!
  }

  extend type Mutation {
    createEventsConsumersSchedule(tenantId: String!, code: String!, name: String!): EventsConsumersSchedule!
    deleteEventsConsumersSchedule(id: ID!): Boolean!
  }
`;

export const EventsConsumersScheduleGqlResolvers = {
  Query: {
    getEventsConsumersSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
