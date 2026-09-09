export const ObsDashboardsScheduleGqlTypeDefs = `
  type ObsDashboardsSchedule {
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
    getObsDashboardsSchedule(id: ID!): ObsDashboardsSchedule
    listObsDashboardsSchedules(tenantId: String!, limit: Int): [ObsDashboardsSchedule!]!
  }

  extend type Mutation {
    createObsDashboardsSchedule(tenantId: String!, code: String!, name: String!): ObsDashboardsSchedule!
    deleteObsDashboardsSchedule(id: ID!): Boolean!
  }
`;

export const ObsDashboardsScheduleGqlResolvers = {
  Query: {
    getObsDashboardsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
