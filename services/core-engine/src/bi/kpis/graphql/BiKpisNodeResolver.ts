export const BiKpisNodeGqlTypeDefs = `
  type BiKpisNode {
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
    getBiKpisNode(id: ID!): BiKpisNode
    listBiKpisNodes(tenantId: String!, limit: Int): [BiKpisNode!]!
  }

  extend type Mutation {
    createBiKpisNode(tenantId: String!, code: String!, name: String!): BiKpisNode!
    deleteBiKpisNode(id: ID!): Boolean!
  }
`;

export const BiKpisNodeGqlResolvers = {
  Query: {
    getBiKpisNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
