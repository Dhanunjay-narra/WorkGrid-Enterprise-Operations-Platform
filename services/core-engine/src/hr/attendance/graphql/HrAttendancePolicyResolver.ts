export const HrAttendancePolicyGqlTypeDefs = `
  type HrAttendancePolicy {
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
    getHrAttendancePolicy(id: ID!): HrAttendancePolicy
    listHrAttendancePolicys(tenantId: String!, limit: Int): [HrAttendancePolicy!]!
  }

  extend type Mutation {
    createHrAttendancePolicy(tenantId: String!, code: String!, name: String!): HrAttendancePolicy!
    deleteHrAttendancePolicy(id: ID!): Boolean!
  }
`;

export const HrAttendancePolicyGqlResolvers = {
  Query: {
    getHrAttendancePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendancePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
