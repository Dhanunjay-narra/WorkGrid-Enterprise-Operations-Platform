export const HrLeaveScheduleGqlTypeDefs = `
  type HrLeaveSchedule {
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
    getHrLeaveSchedule(id: ID!): HrLeaveSchedule
    listHrLeaveSchedules(tenantId: String!, limit: Int): [HrLeaveSchedule!]!
  }

  extend type Mutation {
    createHrLeaveSchedule(tenantId: String!, code: String!, name: String!): HrLeaveSchedule!
    deleteHrLeaveSchedule(id: ID!): Boolean!
  }
`;

export const HrLeaveScheduleGqlResolvers = {
  Query: {
    getHrLeaveSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
