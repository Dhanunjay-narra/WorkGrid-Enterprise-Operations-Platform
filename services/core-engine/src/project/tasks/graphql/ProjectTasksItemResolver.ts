export const ProjectTasksItemGqlTypeDefs = `
  type ProjectTasksItem {
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
    getProjectTasksItem(id: ID!): ProjectTasksItem
    listProjectTasksItems(tenantId: String!, limit: Int): [ProjectTasksItem!]!
  }

  extend type Mutation {
    createProjectTasksItem(tenantId: String!, code: String!, name: String!): ProjectTasksItem!
    deleteProjectTasksItem(id: ID!): Boolean!
  }
`;

export const ProjectTasksItemGqlResolvers = {
  Query: {
    getProjectTasksItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
