export const HrPayrollRuleGqlTypeDefs = `
  type HrPayrollRule {
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
    getHrPayrollRule(id: ID!): HrPayrollRule
    listHrPayrollRules(tenantId: String!, limit: Int): [HrPayrollRule!]!
  }

  extend type Mutation {
    createHrPayrollRule(tenantId: String!, code: String!, name: String!): HrPayrollRule!
    deleteHrPayrollRule(id: ID!): Boolean!
  }
`;

export const HrPayrollRuleGqlResolvers = {
  Query: {
    getHrPayrollRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
