export const HrAttendanceSnapshotGqlTypeDefs = `
  type HrAttendanceSnapshot {
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
    getHrAttendanceSnapshot(id: ID!): HrAttendanceSnapshot
    listHrAttendanceSnapshots(tenantId: String!, limit: Int): [HrAttendanceSnapshot!]!
  }

  extend type Mutation {
    createHrAttendanceSnapshot(tenantId: String!, code: String!, name: String!): HrAttendanceSnapshot!
    deleteHrAttendanceSnapshot(id: ID!): Boolean!
  }
`;

export const HrAttendanceSnapshotGqlResolvers = {
  Query: {
    getHrAttendanceSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
