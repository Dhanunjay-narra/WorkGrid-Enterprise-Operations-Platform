export const CommThreadsNodeGqlTypeDefs = `
  type CommThreadsNode {
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
    getCommThreadsNode(id: ID!): CommThreadsNode
    listCommThreadsNodes(tenantId: String!, limit: Int): [CommThreadsNode!]!
  }

  extend type Mutation {
    createCommThreadsNode(tenantId: String!, code: String!, name: String!): CommThreadsNode!
    deleteCommThreadsNode(id: ID!): Boolean!
  }
`;

export const CommThreadsNodeGqlResolvers = {
  Query: {
    getCommThreadsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
