export const IotFleetScheduleGqlTypeDefs = `
  type IotFleetSchedule {
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
    getIotFleetSchedule(id: ID!): IotFleetSchedule
    listIotFleetSchedules(tenantId: String!, limit: Int): [IotFleetSchedule!]!
  }

  extend type Mutation {
    createIotFleetSchedule(tenantId: String!, code: String!, name: String!): IotFleetSchedule!
    deleteIotFleetSchedule(id: ID!): Boolean!
  }
`;

export const IotFleetScheduleGqlResolvers = {
  Query: {
    getIotFleetSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
