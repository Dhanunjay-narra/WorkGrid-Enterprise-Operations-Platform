export const HrAttendanceEntryGqlTypeDefs = `
  type HrAttendanceEntry {
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
    getHrAttendanceEntry(id: ID!): HrAttendanceEntry
    listHrAttendanceEntrys(tenantId: String!, limit: Int): [HrAttendanceEntry!]!
  }

  extend type Mutation {
    createHrAttendanceEntry(tenantId: String!, code: String!, name: String!): HrAttendanceEntry!
    deleteHrAttendanceEntry(id: ID!): Boolean!
  }
`;

export const HrAttendanceEntryGqlResolvers = {
  Query: {
    getHrAttendanceEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
