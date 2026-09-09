export const HrAttendanceRuleGqlTypeDefs = `
  type HrAttendanceRule {
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
    getHrAttendanceRule(id: ID!): HrAttendanceRule
    listHrAttendanceRules(tenantId: String!, limit: Int): [HrAttendanceRule!]!
  }

  extend type Mutation {
    createHrAttendanceRule(tenantId: String!, code: String!, name: String!): HrAttendanceRule!
    deleteHrAttendanceRule(id: ID!): Boolean!
  }
`;

export const HrAttendanceRuleGqlResolvers = {
  Query: {
    getHrAttendanceRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
