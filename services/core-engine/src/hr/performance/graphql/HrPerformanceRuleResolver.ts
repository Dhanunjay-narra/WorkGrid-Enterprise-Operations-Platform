export const HrPerformanceRuleGqlTypeDefs = `
  type HrPerformanceRule {
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
    getHrPerformanceRule(id: ID!): HrPerformanceRule
    listHrPerformanceRules(tenantId: String!, limit: Int): [HrPerformanceRule!]!
  }

  extend type Mutation {
    createHrPerformanceRule(tenantId: String!, code: String!, name: String!): HrPerformanceRule!
    deleteHrPerformanceRule(id: ID!): Boolean!
  }
`;

export const HrPerformanceRuleGqlResolvers = {
  Query: {
    getHrPerformanceRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
