export const HrAttendanceQueueGqlTypeDefs = `
  type HrAttendanceQueue {
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
    getHrAttendanceQueue(id: ID!): HrAttendanceQueue
    listHrAttendanceQueues(tenantId: String!, limit: Int): [HrAttendanceQueue!]!
  }

  extend type Mutation {
    createHrAttendanceQueue(tenantId: String!, code: String!, name: String!): HrAttendanceQueue!
    deleteHrAttendanceQueue(id: ID!): Boolean!
  }
`;

export const HrAttendanceQueueGqlResolvers = {
  Query: {
    getHrAttendanceQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
