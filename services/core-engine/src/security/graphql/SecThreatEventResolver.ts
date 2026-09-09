export const SecThreatEventTypeDefs = `
  type SecThreatEvent {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecThreatEvent(id: ID!): SecThreatEvent
    listSecThreatEvents(tenantId: String!): [SecThreatEvent!]!
  }
`;

export const SecThreatEventResolvers = {
  Query: {
    getSecThreatEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecThreatEvent", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecThreatEvents: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecThreatEvent", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
