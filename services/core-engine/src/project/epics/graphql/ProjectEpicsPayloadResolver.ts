export const ProjectEpicsPayloadGqlTypeDefs = `
  type ProjectEpicsPayload {
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
    getProjectEpicsPayload(id: ID!): ProjectEpicsPayload
    listProjectEpicsPayloads(tenantId: String!, limit: Int): [ProjectEpicsPayload!]!
  }

  extend type Mutation {
    createProjectEpicsPayload(tenantId: String!, code: String!, name: String!): ProjectEpicsPayload!
    deleteProjectEpicsPayload(id: ID!): Boolean!
  }
`;

export const ProjectEpicsPayloadGqlResolvers = {
  Query: {
    getProjectEpicsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
