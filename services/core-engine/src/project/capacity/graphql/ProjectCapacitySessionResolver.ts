export const ProjectCapacitySessionGqlTypeDefs = `
  type ProjectCapacitySession {
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
    getProjectCapacitySession(id: ID!): ProjectCapacitySession
    listProjectCapacitySessions(tenantId: String!, limit: Int): [ProjectCapacitySession!]!
  }

  extend type Mutation {
    createProjectCapacitySession(tenantId: String!, code: String!, name: String!): ProjectCapacitySession!
    deleteProjectCapacitySession(id: ID!): Boolean!
  }
`;

export const ProjectCapacitySessionGqlResolvers = {
  Query: {
    getProjectCapacitySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacitySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
