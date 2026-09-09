export const CommDigestNodeGqlTypeDefs = `
  type CommDigestNode {
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
    getCommDigestNode(id: ID!): CommDigestNode
    listCommDigestNodes(tenantId: String!, limit: Int): [CommDigestNode!]!
  }

  extend type Mutation {
    createCommDigestNode(tenantId: String!, code: String!, name: String!): CommDigestNode!
    deleteCommDigestNode(id: ID!): Boolean!
  }
`;

export const CommDigestNodeGqlResolvers = {
  Query: {
    getCommDigestNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
