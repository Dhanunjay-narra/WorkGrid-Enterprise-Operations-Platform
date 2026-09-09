export const IotDevicesSessionGqlTypeDefs = `
  type IotDevicesSession {
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
    getIotDevicesSession(id: ID!): IotDevicesSession
    listIotDevicesSessions(tenantId: String!, limit: Int): [IotDevicesSession!]!
  }

  extend type Mutation {
    createIotDevicesSession(tenantId: String!, code: String!, name: String!): IotDevicesSession!
    deleteIotDevicesSession(id: ID!): Boolean!
  }
`;

export const IotDevicesSessionGqlResolvers = {
  Query: {
    getIotDevicesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
