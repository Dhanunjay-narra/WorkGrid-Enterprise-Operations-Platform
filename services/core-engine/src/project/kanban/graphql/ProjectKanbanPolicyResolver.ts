export const ProjectKanbanPolicyGqlTypeDefs = `
  type ProjectKanbanPolicy {
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
    getProjectKanbanPolicy(id: ID!): ProjectKanbanPolicy
    listProjectKanbanPolicys(tenantId: String!, limit: Int): [ProjectKanbanPolicy!]!
  }

  extend type Mutation {
    createProjectKanbanPolicy(tenantId: String!, code: String!, name: String!): ProjectKanbanPolicy!
    deleteProjectKanbanPolicy(id: ID!): Boolean!
  }
`;

export const ProjectKanbanPolicyGqlResolvers = {
  Query: {
    getProjectKanbanPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
