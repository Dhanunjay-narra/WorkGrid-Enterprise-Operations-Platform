export const IntSlackNodeGqlTypeDefs = `
  type IntSlackNode {
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
    getIntSlackNode(id: ID!): IntSlackNode
    listIntSlackNodes(tenantId: String!, limit: Int): [IntSlackNode!]!
  }

  extend type Mutation {
    createIntSlackNode(tenantId: String!, code: String!, name: String!): IntSlackNode!
    deleteIntSlackNode(id: ID!): Boolean!
  }
`;

export const IntSlackNodeGqlResolvers = {
  Query: {
    getIntSlackNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
