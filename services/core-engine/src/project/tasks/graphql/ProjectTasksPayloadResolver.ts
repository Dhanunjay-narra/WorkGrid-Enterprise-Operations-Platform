export const ProjectTasksPayloadGqlTypeDefs = `
  type ProjectTasksPayload {
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
    getProjectTasksPayload(id: ID!): ProjectTasksPayload
    listProjectTasksPayloads(tenantId: String!, limit: Int): [ProjectTasksPayload!]!
  }

  extend type Mutation {
    createProjectTasksPayload(tenantId: String!, code: String!, name: String!): ProjectTasksPayload!
    deleteProjectTasksPayload(id: ID!): Boolean!
  }
`;

export const ProjectTasksPayloadGqlResolvers = {
  Query: {
    getProjectTasksPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
