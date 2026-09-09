export const IotDevicesScheduleGqlTypeDefs = `
  type IotDevicesSchedule {
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
    getIotDevicesSchedule(id: ID!): IotDevicesSchedule
    listIotDevicesSchedules(tenantId: String!, limit: Int): [IotDevicesSchedule!]!
  }

  extend type Mutation {
    createIotDevicesSchedule(tenantId: String!, code: String!, name: String!): IotDevicesSchedule!
    deleteIotDevicesSchedule(id: ID!): Boolean!
  }
`;

export const IotDevicesScheduleGqlResolvers = {
  Query: {
    getIotDevicesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
