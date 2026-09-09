export const SecurityNodeGqlTypeDefs = `
  type SecurityNode {
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
    getSecurityNode(id: ID!): SecurityNode
    listSecurityNodes(tenantId: String!, limit: Int): [SecurityNode!]!
  }

  extend type Mutation {
    createSecurityNode(tenantId: String!, code: String!, name: String!): SecurityNode!
    deleteSecurityNode(id: ID!): Boolean!
  }
`;

export const SecurityNodeGqlResolvers = {
  Query: {
    getSecurityNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
