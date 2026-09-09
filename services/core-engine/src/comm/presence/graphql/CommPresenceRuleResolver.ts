export const CommPresenceRuleGqlTypeDefs = `
  type CommPresenceRule {
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
    getCommPresenceRule(id: ID!): CommPresenceRule
    listCommPresenceRules(tenantId: String!, limit: Int): [CommPresenceRule!]!
  }

  extend type Mutation {
    createCommPresenceRule(tenantId: String!, code: String!, name: String!): CommPresenceRule!
    deleteCommPresenceRule(id: ID!): Boolean!
  }
`;

export const CommPresenceRuleGqlResolvers = {
  Query: {
    getCommPresenceRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
