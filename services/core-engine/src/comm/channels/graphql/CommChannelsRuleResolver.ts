export const CommChannelsRuleGqlTypeDefs = `
  type CommChannelsRule {
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
    getCommChannelsRule(id: ID!): CommChannelsRule
    listCommChannelsRules(tenantId: String!, limit: Int): [CommChannelsRule!]!
  }

  extend type Mutation {
    createCommChannelsRule(tenantId: String!, code: String!, name: String!): CommChannelsRule!
    deleteCommChannelsRule(id: ID!): Boolean!
  }
`;

export const CommChannelsRuleGqlResolvers = {
  Query: {
    getCommChannelsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
