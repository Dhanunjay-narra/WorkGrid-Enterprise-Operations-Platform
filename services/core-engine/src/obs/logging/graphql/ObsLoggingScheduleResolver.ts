export const ObsLoggingScheduleGqlTypeDefs = `
  type ObsLoggingSchedule {
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
    getObsLoggingSchedule(id: ID!): ObsLoggingSchedule
    listObsLoggingSchedules(tenantId: String!, limit: Int): [ObsLoggingSchedule!]!
  }

  extend type Mutation {
    createObsLoggingSchedule(tenantId: String!, code: String!, name: String!): ObsLoggingSchedule!
    deleteObsLoggingSchedule(id: ID!): Boolean!
  }
`;

export const ObsLoggingScheduleGqlResolvers = {
  Query: {
    getObsLoggingSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
