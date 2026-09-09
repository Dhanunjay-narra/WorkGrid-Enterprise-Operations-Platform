export const ProjectGanttPolicyGqlTypeDefs = `
  type ProjectGanttPolicy {
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
    getProjectGanttPolicy(id: ID!): ProjectGanttPolicy
    listProjectGanttPolicys(tenantId: String!, limit: Int): [ProjectGanttPolicy!]!
  }

  extend type Mutation {
    createProjectGanttPolicy(tenantId: String!, code: String!, name: String!): ProjectGanttPolicy!
    deleteProjectGanttPolicy(id: ID!): Boolean!
  }
`;

export const ProjectGanttPolicyGqlResolvers = {
  Query: {
    getProjectGanttPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
