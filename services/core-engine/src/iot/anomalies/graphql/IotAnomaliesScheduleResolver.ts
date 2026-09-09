export const IotAnomaliesScheduleGqlTypeDefs = `
  type IotAnomaliesSchedule {
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
    getIotAnomaliesSchedule(id: ID!): IotAnomaliesSchedule
    listIotAnomaliesSchedules(tenantId: String!, limit: Int): [IotAnomaliesSchedule!]!
  }

  extend type Mutation {
    createIotAnomaliesSchedule(tenantId: String!, code: String!, name: String!): IotAnomaliesSchedule!
    deleteIotAnomaliesSchedule(id: ID!): Boolean!
  }
`;

export const IotAnomaliesScheduleGqlResolvers = {
  Query: {
    getIotAnomaliesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
