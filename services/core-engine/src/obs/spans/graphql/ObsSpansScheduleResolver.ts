export const ObsSpansScheduleGqlTypeDefs = `
  type ObsSpansSchedule {
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
    getObsSpansSchedule(id: ID!): ObsSpansSchedule
    listObsSpansSchedules(tenantId: String!, limit: Int): [ObsSpansSchedule!]!
  }

  extend type Mutation {
    createObsSpansSchedule(tenantId: String!, code: String!, name: String!): ObsSpansSchedule!
    deleteObsSpansSchedule(id: ID!): Boolean!
  }
`;

export const ObsSpansScheduleGqlResolvers = {
  Query: {
    getObsSpansSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
