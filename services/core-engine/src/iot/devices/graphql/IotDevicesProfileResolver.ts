export const IotDevicesProfileGqlTypeDefs = `
  type IotDevicesProfile {
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
    getIotDevicesProfile(id: ID!): IotDevicesProfile
    listIotDevicesProfiles(tenantId: String!, limit: Int): [IotDevicesProfile!]!
  }

  extend type Mutation {
    createIotDevicesProfile(tenantId: String!, code: String!, name: String!): IotDevicesProfile!
    deleteIotDevicesProfile(id: ID!): Boolean!
  }
`;

export const IotDevicesProfileGqlResolvers = {
  Query: {
    getIotDevicesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
