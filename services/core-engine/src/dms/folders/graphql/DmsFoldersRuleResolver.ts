export const DmsFoldersRuleGqlTypeDefs = `
  type DmsFoldersRule {
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
    getDmsFoldersRule(id: ID!): DmsFoldersRule
    listDmsFoldersRules(tenantId: String!, limit: Int): [DmsFoldersRule!]!
  }

  extend type Mutation {
    createDmsFoldersRule(tenantId: String!, code: String!, name: String!): DmsFoldersRule!
    deleteDmsFoldersRule(id: ID!): Boolean!
  }
`;

export const DmsFoldersRuleGqlResolvers = {
  Query: {
    getDmsFoldersRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
