export const ProjectRisksRuleGqlTypeDefs = `
  type ProjectRisksRule {
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
    getProjectRisksRule(id: ID!): ProjectRisksRule
    listProjectRisksRules(tenantId: String!, limit: Int): [ProjectRisksRule!]!
  }

  extend type Mutation {
    createProjectRisksRule(tenantId: String!, code: String!, name: String!): ProjectRisksRule!
    deleteProjectRisksRule(id: ID!): Boolean!
  }
`;

export const ProjectRisksRuleGqlResolvers = {
  Query: {
    getProjectRisksRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
