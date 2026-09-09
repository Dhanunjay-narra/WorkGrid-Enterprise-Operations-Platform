export const IotDevicesNodeGqlTypeDefs = `
  type IotDevicesNode {
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
    getIotDevicesNode(id: ID!): IotDevicesNode
    listIotDevicesNodes(tenantId: String!, limit: Int): [IotDevicesNode!]!
  }

  extend type Mutation {
    createIotDevicesNode(tenantId: String!, code: String!, name: String!): IotDevicesNode!
    deleteIotDevicesNode(id: ID!): Boolean!
  }
`;

export const IotDevicesNodeGqlResolvers = {
  Query: {
    getIotDevicesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
