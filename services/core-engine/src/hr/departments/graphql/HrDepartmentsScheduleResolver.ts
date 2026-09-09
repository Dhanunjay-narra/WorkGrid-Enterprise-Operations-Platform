export const HrDepartmentsScheduleGqlTypeDefs = `
  type HrDepartmentsSchedule {
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
    getHrDepartmentsSchedule(id: ID!): HrDepartmentsSchedule
    listHrDepartmentsSchedules(tenantId: String!, limit: Int): [HrDepartmentsSchedule!]!
  }

  extend type Mutation {
    createHrDepartmentsSchedule(tenantId: String!, code: String!, name: String!): HrDepartmentsSchedule!
    deleteHrDepartmentsSchedule(id: ID!): Boolean!
  }
`;

export const HrDepartmentsScheduleGqlResolvers = {
  Query: {
    getHrDepartmentsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
