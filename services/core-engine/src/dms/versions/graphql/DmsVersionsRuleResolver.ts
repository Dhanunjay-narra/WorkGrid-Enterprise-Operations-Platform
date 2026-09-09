export const DmsVersionsRuleGqlTypeDefs = `
  type DmsVersionsRule {
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
    getDmsVersionsRule(id: ID!): DmsVersionsRule
    listDmsVersionsRules(tenantId: String!, limit: Int): [DmsVersionsRule!]!
  }

  extend type Mutation {
    createDmsVersionsRule(tenantId: String!, code: String!, name: String!): DmsVersionsRule!
    deleteDmsVersionsRule(id: ID!): Boolean!
  }
`;

export const DmsVersionsRuleGqlResolvers = {
  Query: {
    getDmsVersionsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
