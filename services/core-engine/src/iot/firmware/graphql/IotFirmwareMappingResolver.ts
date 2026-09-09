export const IotFirmwareMappingGqlTypeDefs = `
  type IotFirmwareMapping {
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
    getIotFirmwareMapping(id: ID!): IotFirmwareMapping
    listIotFirmwareMappings(tenantId: String!, limit: Int): [IotFirmwareMapping!]!
  }

  extend type Mutation {
    createIotFirmwareMapping(tenantId: String!, code: String!, name: String!): IotFirmwareMapping!
    deleteIotFirmwareMapping(id: ID!): Boolean!
  }
`;

export const IotFirmwareMappingGqlResolvers = {
  Query: {
    getIotFirmwareMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
