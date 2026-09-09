export const IotLocationsScheduleGqlTypeDefs = `
  type IotLocationsSchedule {
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
    getIotLocationsSchedule(id: ID!): IotLocationsSchedule
    listIotLocationsSchedules(tenantId: String!, limit: Int): [IotLocationsSchedule!]!
  }

  extend type Mutation {
    createIotLocationsSchedule(tenantId: String!, code: String!, name: String!): IotLocationsSchedule!
    deleteIotLocationsSchedule(id: ID!): Boolean!
  }
`;

export const IotLocationsScheduleGqlResolvers = {
  Query: {
    getIotLocationsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
