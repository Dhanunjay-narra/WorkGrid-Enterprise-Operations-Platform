export const ProjectSprintsRuleGqlTypeDefs = `
  type ProjectSprintsRule {
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
    getProjectSprintsRule(id: ID!): ProjectSprintsRule
    listProjectSprintsRules(tenantId: String!, limit: Int): [ProjectSprintsRule!]!
  }

  extend type Mutation {
    createProjectSprintsRule(tenantId: String!, code: String!, name: String!): ProjectSprintsRule!
    deleteProjectSprintsRule(id: ID!): Boolean!
  }
`;

export const ProjectSprintsRuleGqlResolvers = {
  Query: {
    getProjectSprintsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
