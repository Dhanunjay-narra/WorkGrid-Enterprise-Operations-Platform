export const EvtDeadLetterEventTypeDefs = `
  type EvtDeadLetterEvent {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtDeadLetterEvent(id: ID!): EvtDeadLetterEvent
    listEvtDeadLetterEvents(tenantId: String!): [EvtDeadLetterEvent!]!
  }
`;

export const EvtDeadLetterEventResolvers = {
  Query: {
    getEvtDeadLetterEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtDeadLetterEvent", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtDeadLetterEvents: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtDeadLetterEvent", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
