export const IntOauthNodeGqlTypeDefs = `
  type IntOauthNode {
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
    getIntOauthNode(id: ID!): IntOauthNode
    listIntOauthNodes(tenantId: String!, limit: Int): [IntOauthNode!]!
  }

  extend type Mutation {
    createIntOauthNode(tenantId: String!, code: String!, name: String!): IntOauthNode!
    deleteIntOauthNode(id: ID!): Boolean!
  }
`;

export const IntOauthNodeGqlResolvers = {
  Query: {
    getIntOauthNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
