export const HrAttendanceRecordMutationTypeDefs = `
  input CreateHrAttendanceRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrAttendanceRecord(input: CreateHrAttendanceRecordInput!): HrAttendanceRecord!
    deleteHrAttendanceRecord(id: ID!): Boolean!
  }
`;

export const HrAttendanceRecordMutationResolvers = {
  Mutation: {
    createHrAttendanceRecord: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrAttendanceRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
