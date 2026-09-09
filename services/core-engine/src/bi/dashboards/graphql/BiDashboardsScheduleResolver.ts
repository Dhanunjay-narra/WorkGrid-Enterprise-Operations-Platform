export const BiDashboardsScheduleGqlTypeDefs = `
  type BiDashboardsSchedule {
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
    getBiDashboardsSchedule(id: ID!): BiDashboardsSchedule
    listBiDashboardsSchedules(tenantId: String!, limit: Int): [BiDashboardsSchedule!]!
  }

  extend type Mutation {
    createBiDashboardsSchedule(tenantId: String!, code: String!, name: String!): BiDashboardsSchedule!
    deleteBiDashboardsSchedule(id: ID!): Boolean!
  }
`;

export const BiDashboardsScheduleGqlResolvers = {
  Query: {
    getBiDashboardsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
