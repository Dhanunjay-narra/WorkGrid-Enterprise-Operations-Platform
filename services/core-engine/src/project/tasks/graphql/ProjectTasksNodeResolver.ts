export const ProjectTasksNodeGqlTypeDefs = `
  type ProjectTasksNode {
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
    getProjectTasksNode(id: ID!): ProjectTasksNode
    listProjectTasksNodes(tenantId: String!, limit: Int): [ProjectTasksNode!]!
  }

  extend type Mutation {
    createProjectTasksNode(tenantId: String!, code: String!, name: String!): ProjectTasksNode!
    deleteProjectTasksNode(id: ID!): Boolean!
  }
`;

export const ProjectTasksNodeGqlResolvers = {
  Query: {
    getProjectTasksNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
