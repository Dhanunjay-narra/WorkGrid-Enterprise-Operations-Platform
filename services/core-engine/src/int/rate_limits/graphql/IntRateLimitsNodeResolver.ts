export const IntRateLimitsNodeGqlTypeDefs = `
  type IntRateLimitsNode {
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
    getIntRateLimitsNode(id: ID!): IntRateLimitsNode
    listIntRateLimitsNodes(tenantId: String!, limit: Int): [IntRateLimitsNode!]!
  }

  extend type Mutation {
    createIntRateLimitsNode(tenantId: String!, code: String!, name: String!): IntRateLimitsNode!
    deleteIntRateLimitsNode(id: ID!): Boolean!
  }
`;

export const IntRateLimitsNodeGqlResolvers = {
  Query: {
    getIntRateLimitsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
