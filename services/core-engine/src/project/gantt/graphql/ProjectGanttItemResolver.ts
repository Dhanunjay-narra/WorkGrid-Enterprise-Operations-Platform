export const ProjectGanttItemGqlTypeDefs = `
  type ProjectGanttItem {
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
    getProjectGanttItem(id: ID!): ProjectGanttItem
    listProjectGanttItems(tenantId: String!, limit: Int): [ProjectGanttItem!]!
  }

  extend type Mutation {
    createProjectGanttItem(tenantId: String!, code: String!, name: String!): ProjectGanttItem!
    deleteProjectGanttItem(id: ID!): Boolean!
  }
`;

export const ProjectGanttItemGqlResolvers = {
  Query: {
    getProjectGanttItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
