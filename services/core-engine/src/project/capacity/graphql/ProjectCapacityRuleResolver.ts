export const ProjectCapacityRuleGqlTypeDefs = `
  type ProjectCapacityRule {
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
    getProjectCapacityRule(id: ID!): ProjectCapacityRule
    listProjectCapacityRules(tenantId: String!, limit: Int): [ProjectCapacityRule!]!
  }

  extend type Mutation {
    createProjectCapacityRule(tenantId: String!, code: String!, name: String!): ProjectCapacityRule!
    deleteProjectCapacityRule(id: ID!): Boolean!
  }
`;

export const ProjectCapacityRuleGqlResolvers = {
  Query: {
    getProjectCapacityRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
