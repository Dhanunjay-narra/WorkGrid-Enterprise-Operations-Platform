export const DmsSignaturesRuleGqlTypeDefs = `
  type DmsSignaturesRule {
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
    getDmsSignaturesRule(id: ID!): DmsSignaturesRule
    listDmsSignaturesRules(tenantId: String!, limit: Int): [DmsSignaturesRule!]!
  }

  extend type Mutation {
    createDmsSignaturesRule(tenantId: String!, code: String!, name: String!): DmsSignaturesRule!
    deleteDmsSignaturesRule(id: ID!): Boolean!
  }
`;

export const DmsSignaturesRuleGqlResolvers = {
  Query: {
    getDmsSignaturesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
