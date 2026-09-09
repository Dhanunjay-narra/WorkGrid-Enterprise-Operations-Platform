export const CrmPipelineReportGqlTypeDefs = `
  type CrmPipelineReport {
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
    getCrmPipelineReport(id: ID!): CrmPipelineReport
    listCrmPipelineReports(tenantId: String!, limit: Int): [CrmPipelineReport!]!
  }

  extend type Mutation {
    createCrmPipelineReport(tenantId: String!, code: String!, name: String!): CrmPipelineReport!
    deleteCrmPipelineReport(id: ID!): Boolean!
  }
`;

export const CrmPipelineReportGqlResolvers = {
  Query: {
    getCrmPipelineReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
