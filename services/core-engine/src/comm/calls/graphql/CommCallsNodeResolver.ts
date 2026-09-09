export const CommCallsNodeGqlTypeDefs = `
  type CommCallsNode {
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
    getCommCallsNode(id: ID!): CommCallsNode
    listCommCallsNodes(tenantId: String!, limit: Int): [CommCallsNode!]!
  }

  extend type Mutation {
    createCommCallsNode(tenantId: String!, code: String!, name: String!): CommCallsNode!
    deleteCommCallsNode(id: ID!): Boolean!
  }
`;

export const CommCallsNodeGqlResolvers = {
  Query: {
    getCommCallsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
