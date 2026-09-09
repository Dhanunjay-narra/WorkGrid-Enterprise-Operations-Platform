export const BiCohortsNodeGqlTypeDefs = `
  type BiCohortsNode {
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
    getBiCohortsNode(id: ID!): BiCohortsNode
    listBiCohortsNodes(tenantId: String!, limit: Int): [BiCohortsNode!]!
  }

  extend type Mutation {
    createBiCohortsNode(tenantId: String!, code: String!, name: String!): BiCohortsNode!
    deleteBiCohortsNode(id: ID!): Boolean!
  }
`;

export const BiCohortsNodeGqlResolvers = {
  Query: {
    getBiCohortsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
