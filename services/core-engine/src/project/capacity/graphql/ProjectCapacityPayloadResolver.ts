export const ProjectCapacityPayloadGqlTypeDefs = `
  type ProjectCapacityPayload {
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
    getProjectCapacityPayload(id: ID!): ProjectCapacityPayload
    listProjectCapacityPayloads(tenantId: String!, limit: Int): [ProjectCapacityPayload!]!
  }

  extend type Mutation {
    createProjectCapacityPayload(tenantId: String!, code: String!, name: String!): ProjectCapacityPayload!
    deleteProjectCapacityPayload(id: ID!): Boolean!
  }
`;

export const ProjectCapacityPayloadGqlResolvers = {
  Query: {
    getProjectCapacityPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
