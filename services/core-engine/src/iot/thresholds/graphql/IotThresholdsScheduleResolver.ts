export const IotThresholdsScheduleGqlTypeDefs = `
  type IotThresholdsSchedule {
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
    getIotThresholdsSchedule(id: ID!): IotThresholdsSchedule
    listIotThresholdsSchedules(tenantId: String!, limit: Int): [IotThresholdsSchedule!]!
  }

  extend type Mutation {
    createIotThresholdsSchedule(tenantId: String!, code: String!, name: String!): IotThresholdsSchedule!
    deleteIotThresholdsSchedule(id: ID!): Boolean!
  }
`;

export const IotThresholdsScheduleGqlResolvers = {
  Query: {
    getIotThresholdsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
