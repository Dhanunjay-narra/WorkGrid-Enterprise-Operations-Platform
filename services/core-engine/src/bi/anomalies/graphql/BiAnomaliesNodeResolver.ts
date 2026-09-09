export const BiAnomaliesNodeGqlTypeDefs = `
  type BiAnomaliesNode {
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
    getBiAnomaliesNode(id: ID!): BiAnomaliesNode
    listBiAnomaliesNodes(tenantId: String!, limit: Int): [BiAnomaliesNode!]!
  }

  extend type Mutation {
    createBiAnomaliesNode(tenantId: String!, code: String!, name: String!): BiAnomaliesNode!
    deleteBiAnomaliesNode(id: ID!): Boolean!
  }
`;

export const BiAnomaliesNodeGqlResolvers = {
  Query: {
    getBiAnomaliesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
