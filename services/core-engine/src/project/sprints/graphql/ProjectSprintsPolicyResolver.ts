export const ProjectSprintsPolicyGqlTypeDefs = `
  type ProjectSprintsPolicy {
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
    getProjectSprintsPolicy(id: ID!): ProjectSprintsPolicy
    listProjectSprintsPolicys(tenantId: String!, limit: Int): [ProjectSprintsPolicy!]!
  }

  extend type Mutation {
    createProjectSprintsPolicy(tenantId: String!, code: String!, name: String!): ProjectSprintsPolicy!
    deleteProjectSprintsPolicy(id: ID!): Boolean!
  }
`;

export const ProjectSprintsPolicyGqlResolvers = {
  Query: {
    getProjectSprintsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
