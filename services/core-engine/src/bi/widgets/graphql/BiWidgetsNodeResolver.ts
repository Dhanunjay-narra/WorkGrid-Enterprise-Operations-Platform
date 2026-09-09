export const BiWidgetsNodeGqlTypeDefs = `
  type BiWidgetsNode {
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
    getBiWidgetsNode(id: ID!): BiWidgetsNode
    listBiWidgetsNodes(tenantId: String!, limit: Int): [BiWidgetsNode!]!
  }

  extend type Mutation {
    createBiWidgetsNode(tenantId: String!, code: String!, name: String!): BiWidgetsNode!
    deleteBiWidgetsNode(id: ID!): Boolean!
  }
`;

export const BiWidgetsNodeGqlResolvers = {
  Query: {
    getBiWidgetsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
