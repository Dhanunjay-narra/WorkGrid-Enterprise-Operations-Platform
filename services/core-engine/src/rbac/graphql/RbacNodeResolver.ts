export const RbacNodeGqlTypeDefs = `
  type RbacNode {
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
    getRbacNode(id: ID!): RbacNode
    listRbacNodes(tenantId: String!, limit: Int): [RbacNode!]!
  }

  extend type Mutation {
    createRbacNode(tenantId: String!, code: String!, name: String!): RbacNode!
    deleteRbacNode(id: ID!): Boolean!
  }
`;

export const RbacNodeGqlResolvers = {
  Query: {
    getRbacNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
