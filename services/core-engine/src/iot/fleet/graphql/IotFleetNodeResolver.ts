export const IotFleetNodeGqlTypeDefs = `
  type IotFleetNode {
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
    getIotFleetNode(id: ID!): IotFleetNode
    listIotFleetNodes(tenantId: String!, limit: Int): [IotFleetNode!]!
  }

  extend type Mutation {
    createIotFleetNode(tenantId: String!, code: String!, name: String!): IotFleetNode!
    deleteIotFleetNode(id: ID!): Boolean!
  }
`;

export const IotFleetNodeGqlResolvers = {
  Query: {
    getIotFleetNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
