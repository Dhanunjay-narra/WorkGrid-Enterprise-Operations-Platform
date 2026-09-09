export const ProjectCapacityNodeGqlTypeDefs = `
  type ProjectCapacityNode {
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
    getProjectCapacityNode(id: ID!): ProjectCapacityNode
    listProjectCapacityNodes(tenantId: String!, limit: Int): [ProjectCapacityNode!]!
  }

  extend type Mutation {
    createProjectCapacityNode(tenantId: String!, code: String!, name: String!): ProjectCapacityNode!
    deleteProjectCapacityNode(id: ID!): Boolean!
  }
`;

export const ProjectCapacityNodeGqlResolvers = {
  Query: {
    getProjectCapacityNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
