export const DmsExportRuleGqlTypeDefs = `
  type DmsExportRule {
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
    getDmsExportRule(id: ID!): DmsExportRule
    listDmsExportRules(tenantId: String!, limit: Int): [DmsExportRule!]!
  }

  extend type Mutation {
    createDmsExportRule(tenantId: String!, code: String!, name: String!): DmsExportRule!
    deleteDmsExportRule(id: ID!): Boolean!
  }
`;

export const DmsExportRuleGqlResolvers = {
  Query: {
    getDmsExportRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
