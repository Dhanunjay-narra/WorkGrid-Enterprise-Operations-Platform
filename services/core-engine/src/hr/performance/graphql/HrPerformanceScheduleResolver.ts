export const HrPerformanceScheduleGqlTypeDefs = `
  type HrPerformanceSchedule {
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
    getHrPerformanceSchedule(id: ID!): HrPerformanceSchedule
    listHrPerformanceSchedules(tenantId: String!, limit: Int): [HrPerformanceSchedule!]!
  }

  extend type Mutation {
    createHrPerformanceSchedule(tenantId: String!, code: String!, name: String!): HrPerformanceSchedule!
    deleteHrPerformanceSchedule(id: ID!): Boolean!
  }
`;

export const HrPerformanceScheduleGqlResolvers = {
  Query: {
    getHrPerformanceSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
