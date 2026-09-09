export const HrShiftsScheduleGqlTypeDefs = `
  type HrShiftsSchedule {
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
    getHrShiftsSchedule(id: ID!): HrShiftsSchedule
    listHrShiftsSchedules(tenantId: String!, limit: Int): [HrShiftsSchedule!]!
  }

  extend type Mutation {
    createHrShiftsSchedule(tenantId: String!, code: String!, name: String!): HrShiftsSchedule!
    deleteHrShiftsSchedule(id: ID!): Boolean!
  }
`;

export const HrShiftsScheduleGqlResolvers = {
  Query: {
    getHrShiftsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
