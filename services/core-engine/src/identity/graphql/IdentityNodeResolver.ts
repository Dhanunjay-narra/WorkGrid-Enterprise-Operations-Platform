export const IdentityNodeGqlTypeDefs = `
  type IdentityNode {
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
    getIdentityNode(id: ID!): IdentityNode
    listIdentityNodes(tenantId: String!, limit: Int): [IdentityNode!]!
  }

  extend type Mutation {
    createIdentityNode(tenantId: String!, code: String!, name: String!): IdentityNode!
    deleteIdentityNode(id: ID!): Boolean!
  }
`;

export const IdentityNodeGqlResolvers = {
  Query: {
    getIdentityNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
