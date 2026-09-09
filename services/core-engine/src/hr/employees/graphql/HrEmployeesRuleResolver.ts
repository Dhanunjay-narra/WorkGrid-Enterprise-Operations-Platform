export const HrEmployeesRuleGqlTypeDefs = `
  type HrEmployeesRule {
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
    getHrEmployeesRule(id: ID!): HrEmployeesRule
    listHrEmployeesRules(tenantId: String!, limit: Int): [HrEmployeesRule!]!
  }

  extend type Mutation {
    createHrEmployeesRule(tenantId: String!, code: String!, name: String!): HrEmployeesRule!
    deleteHrEmployeesRule(id: ID!): Boolean!
  }
`;

export const HrEmployeesRuleGqlResolvers = {
  Query: {
    getHrEmployeesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
