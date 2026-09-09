export const DmsChunksRuleGqlTypeDefs = `
  type DmsChunksRule {
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
    getDmsChunksRule(id: ID!): DmsChunksRule
    listDmsChunksRules(tenantId: String!, limit: Int): [DmsChunksRule!]!
  }

  extend type Mutation {
    createDmsChunksRule(tenantId: String!, code: String!, name: String!): DmsChunksRule!
    deleteDmsChunksRule(id: ID!): Boolean!
  }
`;

export const DmsChunksRuleGqlResolvers = {
  Query: {
    getDmsChunksRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
