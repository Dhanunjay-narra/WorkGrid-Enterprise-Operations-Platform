export const ObsProbesScheduleGqlTypeDefs = `
  type ObsProbesSchedule {
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
    getObsProbesSchedule(id: ID!): ObsProbesSchedule
    listObsProbesSchedules(tenantId: String!, limit: Int): [ObsProbesSchedule!]!
  }

  extend type Mutation {
    createObsProbesSchedule(tenantId: String!, code: String!, name: String!): ObsProbesSchedule!
    deleteObsProbesSchedule(id: ID!): Boolean!
  }
`;

export const ObsProbesScheduleGqlResolvers = {
  Query: {
    getObsProbesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
