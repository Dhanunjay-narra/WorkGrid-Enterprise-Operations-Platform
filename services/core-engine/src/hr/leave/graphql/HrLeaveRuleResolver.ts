export const HrLeaveRuleGqlTypeDefs = `
  type HrLeaveRule {
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
    getHrLeaveRule(id: ID!): HrLeaveRule
    listHrLeaveRules(tenantId: String!, limit: Int): [HrLeaveRule!]!
  }

  extend type Mutation {
    createHrLeaveRule(tenantId: String!, code: String!, name: String!): HrLeaveRule!
    deleteHrLeaveRule(id: ID!): Boolean!
  }
`;

export const HrLeaveRuleGqlResolvers = {
  Query: {
    getHrLeaveRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
