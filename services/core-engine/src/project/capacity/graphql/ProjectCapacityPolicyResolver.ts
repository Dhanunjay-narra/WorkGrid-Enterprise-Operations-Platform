export const ProjectCapacityPolicyGqlTypeDefs = `
  type ProjectCapacityPolicy {
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
    getProjectCapacityPolicy(id: ID!): ProjectCapacityPolicy
    listProjectCapacityPolicys(tenantId: String!, limit: Int): [ProjectCapacityPolicy!]!
  }

  extend type Mutation {
    createProjectCapacityPolicy(tenantId: String!, code: String!, name: String!): ProjectCapacityPolicy!
    deleteProjectCapacityPolicy(id: ID!): Boolean!
  }
`;

export const ProjectCapacityPolicyGqlResolvers = {
  Query: {
    getProjectCapacityPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
