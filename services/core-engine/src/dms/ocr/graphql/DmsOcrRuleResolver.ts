export const DmsOcrRuleGqlTypeDefs = `
  type DmsOcrRule {
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
    getDmsOcrRule(id: ID!): DmsOcrRule
    listDmsOcrRules(tenantId: String!, limit: Int): [DmsOcrRule!]!
  }

  extend type Mutation {
    createDmsOcrRule(tenantId: String!, code: String!, name: String!): DmsOcrRule!
    deleteDmsOcrRule(id: ID!): Boolean!
  }
`;

export const DmsOcrRuleGqlResolvers = {
  Query: {
    getDmsOcrRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
