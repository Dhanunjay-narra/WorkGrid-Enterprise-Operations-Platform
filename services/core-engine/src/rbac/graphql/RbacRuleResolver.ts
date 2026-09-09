export const RbacRuleGqlTypeDefs = `
  type RbacRule {
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
    getRbacRule(id: ID!): RbacRule
    listRbacRules(tenantId: String!, limit: Int): [RbacRule!]!
  }

  extend type Mutation {
    createRbacRule(tenantId: String!, code: String!, name: String!): RbacRule!
    deleteRbacRule(id: ID!): Boolean!
  }
`;

export const RbacRuleGqlResolvers = {
  Query: {
    getRbacRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
