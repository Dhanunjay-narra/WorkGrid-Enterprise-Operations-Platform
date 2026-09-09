export const AuthNodeGqlTypeDefs = `
  type AuthNode {
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
    getAuthNode(id: ID!): AuthNode
    listAuthNodes(tenantId: String!, limit: Int): [AuthNode!]!
  }

  extend type Mutation {
    createAuthNode(tenantId: String!, code: String!, name: String!): AuthNode!
    deleteAuthNode(id: ID!): Boolean!
  }
`;

export const AuthNodeGqlResolvers = {
  Query: {
    getAuthNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
