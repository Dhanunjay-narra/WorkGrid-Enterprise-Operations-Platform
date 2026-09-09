export const ProjectGanttMappingGqlTypeDefs = `
  type ProjectGanttMapping {
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
    getProjectGanttMapping(id: ID!): ProjectGanttMapping
    listProjectGanttMappings(tenantId: String!, limit: Int): [ProjectGanttMapping!]!
  }

  extend type Mutation {
    createProjectGanttMapping(tenantId: String!, code: String!, name: String!): ProjectGanttMapping!
    deleteProjectGanttMapping(id: ID!): Boolean!
  }
`;

export const ProjectGanttMappingGqlResolvers = {
  Query: {
    getProjectGanttMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
