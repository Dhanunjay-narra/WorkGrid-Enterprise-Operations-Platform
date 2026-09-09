export const ProjectSprintsPayloadGqlTypeDefs = `
  type ProjectSprintsPayload {
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
    getProjectSprintsPayload(id: ID!): ProjectSprintsPayload
    listProjectSprintsPayloads(tenantId: String!, limit: Int): [ProjectSprintsPayload!]!
  }

  extend type Mutation {
    createProjectSprintsPayload(tenantId: String!, code: String!, name: String!): ProjectSprintsPayload!
    deleteProjectSprintsPayload(id: ID!): Boolean!
  }
`;

export const ProjectSprintsPayloadGqlResolvers = {
  Query: {
    getProjectSprintsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
