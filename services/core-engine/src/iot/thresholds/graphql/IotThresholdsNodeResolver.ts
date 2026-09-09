export const IotThresholdsNodeGqlTypeDefs = `
  type IotThresholdsNode {
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
    getIotThresholdsNode(id: ID!): IotThresholdsNode
    listIotThresholdsNodes(tenantId: String!, limit: Int): [IotThresholdsNode!]!
  }

  extend type Mutation {
    createIotThresholdsNode(tenantId: String!, code: String!, name: String!): IotThresholdsNode!
    deleteIotThresholdsNode(id: ID!): Boolean!
  }
`;

export const IotThresholdsNodeGqlResolvers = {
  Query: {
    getIotThresholdsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
