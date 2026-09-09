export const ProjectTasksPolicyGqlTypeDefs = `
  type ProjectTasksPolicy {
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
    getProjectTasksPolicy(id: ID!): ProjectTasksPolicy
    listProjectTasksPolicys(tenantId: String!, limit: Int): [ProjectTasksPolicy!]!
  }

  extend type Mutation {
    createProjectTasksPolicy(tenantId: String!, code: String!, name: String!): ProjectTasksPolicy!
    deleteProjectTasksPolicy(id: ID!): Boolean!
  }
`;

export const ProjectTasksPolicyGqlResolvers = {
  Query: {
    getProjectTasksPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
