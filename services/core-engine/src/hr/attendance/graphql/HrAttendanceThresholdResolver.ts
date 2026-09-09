export const HrAttendanceThresholdGqlTypeDefs = `
  type HrAttendanceThreshold {
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
    getHrAttendanceThreshold(id: ID!): HrAttendanceThreshold
    listHrAttendanceThresholds(tenantId: String!, limit: Int): [HrAttendanceThreshold!]!
  }

  extend type Mutation {
    createHrAttendanceThreshold(tenantId: String!, code: String!, name: String!): HrAttendanceThreshold!
    deleteHrAttendanceThreshold(id: ID!): Boolean!
  }
`;

export const HrAttendanceThresholdGqlResolvers = {
  Query: {
    getHrAttendanceThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
