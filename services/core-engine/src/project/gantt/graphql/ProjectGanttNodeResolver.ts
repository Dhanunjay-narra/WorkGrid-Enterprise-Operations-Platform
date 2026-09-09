export const ProjectGanttNodeGqlTypeDefs = `
  type ProjectGanttNode {
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
    getProjectGanttNode(id: ID!): ProjectGanttNode
    listProjectGanttNodes(tenantId: String!, limit: Int): [ProjectGanttNode!]!
  }

  extend type Mutation {
    createProjectGanttNode(tenantId: String!, code: String!, name: String!): ProjectGanttNode!
    deleteProjectGanttNode(id: ID!): Boolean!
  }
`;

export const ProjectGanttNodeGqlResolvers = {
  Query: {
    getProjectGanttNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
