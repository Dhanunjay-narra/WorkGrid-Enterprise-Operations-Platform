export const IotFirmwareNodeGqlTypeDefs = `
  type IotFirmwareNode {
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
    getIotFirmwareNode(id: ID!): IotFirmwareNode
    listIotFirmwareNodes(tenantId: String!, limit: Int): [IotFirmwareNode!]!
  }

  extend type Mutation {
    createIotFirmwareNode(tenantId: String!, code: String!, name: String!): IotFirmwareNode!
    deleteIotFirmwareNode(id: ID!): Boolean!
  }
`;

export const IotFirmwareNodeGqlResolvers = {
  Query: {
    getIotFirmwareNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
