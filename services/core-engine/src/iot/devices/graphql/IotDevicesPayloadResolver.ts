export const IotDevicesPayloadGqlTypeDefs = `
  type IotDevicesPayload {
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
    getIotDevicesPayload(id: ID!): IotDevicesPayload
    listIotDevicesPayloads(tenantId: String!, limit: Int): [IotDevicesPayload!]!
  }

  extend type Mutation {
    createIotDevicesPayload(tenantId: String!, code: String!, name: String!): IotDevicesPayload!
    deleteIotDevicesPayload(id: ID!): Boolean!
  }
`;

export const IotDevicesPayloadGqlResolvers = {
  Query: {
    getIotDevicesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
