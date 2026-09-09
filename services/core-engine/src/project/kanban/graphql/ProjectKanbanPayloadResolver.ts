export const ProjectKanbanPayloadGqlTypeDefs = `
  type ProjectKanbanPayload {
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
    getProjectKanbanPayload(id: ID!): ProjectKanbanPayload
    listProjectKanbanPayloads(tenantId: String!, limit: Int): [ProjectKanbanPayload!]!
  }

  extend type Mutation {
    createProjectKanbanPayload(tenantId: String!, code: String!, name: String!): ProjectKanbanPayload!
    deleteProjectKanbanPayload(id: ID!): Boolean!
  }
`;

export const ProjectKanbanPayloadGqlResolvers = {
  Query: {
    getProjectKanbanPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
