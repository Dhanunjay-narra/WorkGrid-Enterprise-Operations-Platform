export const ProjectEpicsRuleGqlTypeDefs = `
  type ProjectEpicsRule {
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
    getProjectEpicsRule(id: ID!): ProjectEpicsRule
    listProjectEpicsRules(tenantId: String!, limit: Int): [ProjectEpicsRule!]!
  }

  extend type Mutation {
    createProjectEpicsRule(tenantId: String!, code: String!, name: String!): ProjectEpicsRule!
    deleteProjectEpicsRule(id: ID!): Boolean!
  }
`;

export const ProjectEpicsRuleGqlResolvers = {
  Query: {
    getProjectEpicsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
