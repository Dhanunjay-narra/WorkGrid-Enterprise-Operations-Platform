export const IntMappingsRuleGqlTypeDefs = `
  type IntMappingsRule {
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
    getIntMappingsRule(id: ID!): IntMappingsRule
    listIntMappingsRules(tenantId: String!, limit: Int): [IntMappingsRule!]!
  }

  extend type Mutation {
    createIntMappingsRule(tenantId: String!, code: String!, name: String!): IntMappingsRule!
    deleteIntMappingsRule(id: ID!): Boolean!
  }
`;

export const IntMappingsRuleGqlResolvers = {
  Query: {
    getIntMappingsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
