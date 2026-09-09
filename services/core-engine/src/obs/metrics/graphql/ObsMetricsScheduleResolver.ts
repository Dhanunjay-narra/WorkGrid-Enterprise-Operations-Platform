export const ObsMetricsScheduleGqlTypeDefs = `
  type ObsMetricsSchedule {
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
    getObsMetricsSchedule(id: ID!): ObsMetricsSchedule
    listObsMetricsSchedules(tenantId: String!, limit: Int): [ObsMetricsSchedule!]!
  }

  extend type Mutation {
    createObsMetricsSchedule(tenantId: String!, code: String!, name: String!): ObsMetricsSchedule!
    deleteObsMetricsSchedule(id: ID!): Boolean!
  }
`;

export const ObsMetricsScheduleGqlResolvers = {
  Query: {
    getObsMetricsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
