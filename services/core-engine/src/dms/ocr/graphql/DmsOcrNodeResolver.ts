export const DmsOcrNodeGqlTypeDefs = `
  type DmsOcrNode {
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
    getDmsOcrNode(id: ID!): DmsOcrNode
    listDmsOcrNodes(tenantId: String!, limit: Int): [DmsOcrNode!]!
  }

  extend type Mutation {
    createDmsOcrNode(tenantId: String!, code: String!, name: String!): DmsOcrNode!
    deleteDmsOcrNode(id: ID!): Boolean!
  }
`;

export const DmsOcrNodeGqlResolvers = {
  Query: {
    getDmsOcrNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
