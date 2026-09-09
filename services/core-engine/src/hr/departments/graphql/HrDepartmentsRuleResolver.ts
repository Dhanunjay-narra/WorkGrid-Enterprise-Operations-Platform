export const HrDepartmentsRuleGqlTypeDefs = `
  type HrDepartmentsRule {
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
    getHrDepartmentsRule(id: ID!): HrDepartmentsRule
    listHrDepartmentsRules(tenantId: String!, limit: Int): [HrDepartmentsRule!]!
  }

  extend type Mutation {
    createHrDepartmentsRule(tenantId: String!, code: String!, name: String!): HrDepartmentsRule!
    deleteHrDepartmentsRule(id: ID!): Boolean!
  }
`;

export const HrDepartmentsRuleGqlResolvers = {
  Query: {
    getHrDepartmentsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
