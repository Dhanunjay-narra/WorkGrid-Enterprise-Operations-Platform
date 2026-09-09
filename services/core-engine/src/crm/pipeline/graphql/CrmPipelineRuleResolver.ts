export const CrmPipelineRuleGqlTypeDefs = `
  type CrmPipelineRule {
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
    getCrmPipelineRule(id: ID!): CrmPipelineRule
    listCrmPipelineRules(tenantId: String!, limit: Int): [CrmPipelineRule!]!
  }

  extend type Mutation {
    createCrmPipelineRule(tenantId: String!, code: String!, name: String!): CrmPipelineRule!
    deleteCrmPipelineRule(id: ID!): Boolean!
  }
`;

export const CrmPipelineRuleGqlResolvers = {
  Query: {
    getCrmPipelineRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
