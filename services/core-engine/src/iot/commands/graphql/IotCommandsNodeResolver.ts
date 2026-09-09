export const IotCommandsNodeGqlTypeDefs = `
  type IotCommandsNode {
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
    getIotCommandsNode(id: ID!): IotCommandsNode
    listIotCommandsNodes(tenantId: String!, limit: Int): [IotCommandsNode!]!
  }

  extend type Mutation {
    createIotCommandsNode(tenantId: String!, code: String!, name: String!): IotCommandsNode!
    deleteIotCommandsNode(id: ID!): Boolean!
  }
`;

export const IotCommandsNodeGqlResolvers = {
  Query: {
    getIotCommandsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
