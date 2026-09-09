export const IotFirmwareScheduleGqlTypeDefs = `
  type IotFirmwareSchedule {
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
    getIotFirmwareSchedule(id: ID!): IotFirmwareSchedule
    listIotFirmwareSchedules(tenantId: String!, limit: Int): [IotFirmwareSchedule!]!
  }

  extend type Mutation {
    createIotFirmwareSchedule(tenantId: String!, code: String!, name: String!): IotFirmwareSchedule!
    deleteIotFirmwareSchedule(id: ID!): Boolean!
  }
`;

export const IotFirmwareScheduleGqlResolvers = {
  Query: {
    getIotFirmwareSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
