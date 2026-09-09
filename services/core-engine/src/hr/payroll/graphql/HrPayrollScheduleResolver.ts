export const HrPayrollScheduleGqlTypeDefs = `
  type HrPayrollSchedule {
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
    getHrPayrollSchedule(id: ID!): HrPayrollSchedule
    listHrPayrollSchedules(tenantId: String!, limit: Int): [HrPayrollSchedule!]!
  }

  extend type Mutation {
    createHrPayrollSchedule(tenantId: String!, code: String!, name: String!): HrPayrollSchedule!
    deleteHrPayrollSchedule(id: ID!): Boolean!
  }
`;

export const HrPayrollScheduleGqlResolvers = {
  Query: {
    getHrPayrollSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
