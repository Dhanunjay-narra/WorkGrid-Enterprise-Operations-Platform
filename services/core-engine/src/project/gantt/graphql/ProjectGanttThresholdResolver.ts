export const ProjectGanttThresholdGqlTypeDefs = `
  type ProjectGanttThreshold {
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
    getProjectGanttThreshold(id: ID!): ProjectGanttThreshold
    listProjectGanttThresholds(tenantId: String!, limit: Int): [ProjectGanttThreshold!]!
  }

  extend type Mutation {
    createProjectGanttThreshold(tenantId: String!, code: String!, name: String!): ProjectGanttThreshold!
    deleteProjectGanttThreshold(id: ID!): Boolean!
  }
`;

export const ProjectGanttThresholdGqlResolvers = {
  Query: {
    getProjectGanttThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
