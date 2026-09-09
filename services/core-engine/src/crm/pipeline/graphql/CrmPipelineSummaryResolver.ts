export const CrmPipelineSummaryGqlTypeDefs = `
  type CrmPipelineSummary {
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
    getCrmPipelineSummary(id: ID!): CrmPipelineSummary
    listCrmPipelineSummarys(tenantId: String!, limit: Int): [CrmPipelineSummary!]!
  }

  extend type Mutation {
    createCrmPipelineSummary(tenantId: String!, code: String!, name: String!): CrmPipelineSummary!
    deleteCrmPipelineSummary(id: ID!): Boolean!
  }
`;

export const CrmPipelineSummaryGqlResolvers = {
  Query: {
    getCrmPipelineSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
