export const ProjectGanttPayloadGqlTypeDefs = `
  type ProjectGanttPayload {
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
    getProjectGanttPayload(id: ID!): ProjectGanttPayload
    listProjectGanttPayloads(tenantId: String!, limit: Int): [ProjectGanttPayload!]!
  }

  extend type Mutation {
    createProjectGanttPayload(tenantId: String!, code: String!, name: String!): ProjectGanttPayload!
    deleteProjectGanttPayload(id: ID!): Boolean!
  }
`;

export const ProjectGanttPayloadGqlResolvers = {
  Query: {
    getProjectGanttPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
