export const BiQueriesNodeGqlTypeDefs = `
  type BiQueriesNode {
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
    getBiQueriesNode(id: ID!): BiQueriesNode
    listBiQueriesNodes(tenantId: String!, limit: Int): [BiQueriesNode!]!
  }

  extend type Mutation {
    createBiQueriesNode(tenantId: String!, code: String!, name: String!): BiQueriesNode!
    deleteBiQueriesNode(id: ID!): Boolean!
  }
`;

export const BiQueriesNodeGqlResolvers = {
  Query: {
    getBiQueriesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
