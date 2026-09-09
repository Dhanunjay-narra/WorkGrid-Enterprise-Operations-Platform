export const ObsTracingScheduleGqlTypeDefs = `
  type ObsTracingSchedule {
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
    getObsTracingSchedule(id: ID!): ObsTracingSchedule
    listObsTracingSchedules(tenantId: String!, limit: Int): [ObsTracingSchedule!]!
  }

  extend type Mutation {
    createObsTracingSchedule(tenantId: String!, code: String!, name: String!): ObsTracingSchedule!
    deleteObsTracingSchedule(id: ID!): Boolean!
  }
`;

export const ObsTracingScheduleGqlResolvers = {
  Query: {
    getObsTracingSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
