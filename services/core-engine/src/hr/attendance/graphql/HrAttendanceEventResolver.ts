export const HrAttendanceEventGqlTypeDefs = `
  type HrAttendanceEvent {
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
    getHrAttendanceEvent(id: ID!): HrAttendanceEvent
    listHrAttendanceEvents(tenantId: String!, limit: Int): [HrAttendanceEvent!]!
  }

  extend type Mutation {
    createHrAttendanceEvent(tenantId: String!, code: String!, name: String!): HrAttendanceEvent!
    deleteHrAttendanceEvent(id: ID!): Boolean!
  }
`;

export const HrAttendanceEventGqlResolvers = {
  Query: {
    getHrAttendanceEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
