export const HrEmployeesScheduleGqlTypeDefs = `
  type HrEmployeesSchedule {
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
    getHrEmployeesSchedule(id: ID!): HrEmployeesSchedule
    listHrEmployeesSchedules(tenantId: String!, limit: Int): [HrEmployeesSchedule!]!
  }

  extend type Mutation {
    createHrEmployeesSchedule(tenantId: String!, code: String!, name: String!): HrEmployeesSchedule!
    deleteHrEmployeesSchedule(id: ID!): Boolean!
  }
`;

export const HrEmployeesScheduleGqlResolvers = {
  Query: {
    getHrEmployeesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
