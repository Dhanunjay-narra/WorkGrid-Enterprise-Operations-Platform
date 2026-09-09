export const DmsRetentionRuleGqlTypeDefs = `
  type DmsRetentionRule {
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
    getDmsRetentionRule(id: ID!): DmsRetentionRule
    listDmsRetentionRules(tenantId: String!, limit: Int): [DmsRetentionRule!]!
  }

  extend type Mutation {
    createDmsRetentionRule(tenantId: String!, code: String!, name: String!): DmsRetentionRule!
    deleteDmsRetentionRule(id: ID!): Boolean!
  }
`;

export const DmsRetentionRuleGqlResolvers = {
  Query: {
    getDmsRetentionRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
