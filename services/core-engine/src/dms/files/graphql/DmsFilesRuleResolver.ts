export const DmsFilesRuleGqlTypeDefs = `
  type DmsFilesRule {
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
    getDmsFilesRule(id: ID!): DmsFilesRule
    listDmsFilesRules(tenantId: String!, limit: Int): [DmsFilesRule!]!
  }

  extend type Mutation {
    createDmsFilesRule(tenantId: String!, code: String!, name: String!): DmsFilesRule!
    deleteDmsFilesRule(id: ID!): Boolean!
  }
`;

export const DmsFilesRuleGqlResolvers = {
  Query: {
    getDmsFilesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
