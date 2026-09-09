export const IotTelemetryScheduleGqlTypeDefs = `
  type IotTelemetrySchedule {
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
    getIotTelemetrySchedule(id: ID!): IotTelemetrySchedule
    listIotTelemetrySchedules(tenantId: String!, limit: Int): [IotTelemetrySchedule!]!
  }

  extend type Mutation {
    createIotTelemetrySchedule(tenantId: String!, code: String!, name: String!): IotTelemetrySchedule!
    deleteIotTelemetrySchedule(id: ID!): Boolean!
  }
`;

export const IotTelemetryScheduleGqlResolvers = {
  Query: {
    getIotTelemetrySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetrySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
