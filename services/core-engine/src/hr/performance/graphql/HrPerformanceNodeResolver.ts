export const HrPerformanceNodeGqlTypeDefs = `
  type HrPerformanceNode {
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
    getHrPerformanceNode(id: ID!): HrPerformanceNode
    listHrPerformanceNodes(tenantId: String!, limit: Int): [HrPerformanceNode!]!
  }

  extend type Mutation {
    createHrPerformanceNode(tenantId: String!, code: String!, name: String!): HrPerformanceNode!
    deleteHrPerformanceNode(id: ID!): Boolean!
  }
`;

export const HrPerformanceNodeGqlResolvers = {
  Query: {
    getHrPerformanceNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
