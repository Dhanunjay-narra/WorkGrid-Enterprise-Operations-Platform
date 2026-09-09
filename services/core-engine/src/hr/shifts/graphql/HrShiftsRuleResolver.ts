export const HrShiftsRuleGqlTypeDefs = `
  type HrShiftsRule {
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
    getHrShiftsRule(id: ID!): HrShiftsRule
    listHrShiftsRules(tenantId: String!, limit: Int): [HrShiftsRule!]!
  }

  extend type Mutation {
    createHrShiftsRule(tenantId: String!, code: String!, name: String!): HrShiftsRule!
    deleteHrShiftsRule(id: ID!): Boolean!
  }
`;

export const HrShiftsRuleGqlResolvers = {
  Query: {
    getHrShiftsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
