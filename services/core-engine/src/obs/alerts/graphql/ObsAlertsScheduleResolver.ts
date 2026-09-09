export const ObsAlertsScheduleGqlTypeDefs = `
  type ObsAlertsSchedule {
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
    getObsAlertsSchedule(id: ID!): ObsAlertsSchedule
    listObsAlertsSchedules(tenantId: String!, limit: Int): [ObsAlertsSchedule!]!
  }

  extend type Mutation {
    createObsAlertsSchedule(tenantId: String!, code: String!, name: String!): ObsAlertsSchedule!
    deleteObsAlertsSchedule(id: ID!): Boolean!
  }
`;

export const ObsAlertsScheduleGqlResolvers = {
  Query: {
    getObsAlertsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
