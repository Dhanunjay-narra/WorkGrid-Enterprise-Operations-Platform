export const IotLocationsNodeGqlTypeDefs = `
  type IotLocationsNode {
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
    getIotLocationsNode(id: ID!): IotLocationsNode
    listIotLocationsNodes(tenantId: String!, limit: Int): [IotLocationsNode!]!
  }

  extend type Mutation {
    createIotLocationsNode(tenantId: String!, code: String!, name: String!): IotLocationsNode!
    deleteIotLocationsNode(id: ID!): Boolean!
  }
`;

export const IotLocationsNodeGqlResolvers = {
  Query: {
    getIotLocationsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
