export const ObsProfilingScheduleGqlTypeDefs = `
  type ObsProfilingSchedule {
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
    getObsProfilingSchedule(id: ID!): ObsProfilingSchedule
    listObsProfilingSchedules(tenantId: String!, limit: Int): [ObsProfilingSchedule!]!
  }

  extend type Mutation {
    createObsProfilingSchedule(tenantId: String!, code: String!, name: String!): ObsProfilingSchedule!
    deleteObsProfilingSchedule(id: ID!): Boolean!
  }
`;

export const ObsProfilingScheduleGqlResolvers = {
  Query: {
    getObsProfilingSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
