export const HrAttendanceStateGqlTypeDefs = `
  type HrAttendanceState {
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
    getHrAttendanceState(id: ID!): HrAttendanceState
    listHrAttendanceStates(tenantId: String!, limit: Int): [HrAttendanceState!]!
  }

  extend type Mutation {
    createHrAttendanceState(tenantId: String!, code: String!, name: String!): HrAttendanceState!
    deleteHrAttendanceState(id: ID!): Boolean!
  }
`;

export const HrAttendanceStateGqlResolvers = {
  Query: {
    getHrAttendanceState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
