export const IotFirmwarePayloadGqlTypeDefs = `
  type IotFirmwarePayload {
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
    getIotFirmwarePayload(id: ID!): IotFirmwarePayload
    listIotFirmwarePayloads(tenantId: String!, limit: Int): [IotFirmwarePayload!]!
  }

  extend type Mutation {
    createIotFirmwarePayload(tenantId: String!, code: String!, name: String!): IotFirmwarePayload!
    deleteIotFirmwarePayload(id: ID!): Boolean!
  }
`;

export const IotFirmwarePayloadGqlResolvers = {
  Query: {
    getIotFirmwarePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwarePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
