export const IotCommandsScheduleGqlTypeDefs = `
  type IotCommandsSchedule {
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
    getIotCommandsSchedule(id: ID!): IotCommandsSchedule
    listIotCommandsSchedules(tenantId: String!, limit: Int): [IotCommandsSchedule!]!
  }

  extend type Mutation {
    createIotCommandsSchedule(tenantId: String!, code: String!, name: String!): IotCommandsSchedule!
    deleteIotCommandsSchedule(id: ID!): Boolean!
  }
`;

export const IotCommandsScheduleGqlResolvers = {
  Query: {
    getIotCommandsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
