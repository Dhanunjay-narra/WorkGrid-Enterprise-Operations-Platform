export const CrmPipelineTypeDefs = `
  type CrmPipeline {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmPipeline(id: ID!): CrmPipeline
    listCrmPipelines(tenantId: String!): [CrmPipeline!]!
  }
`;

export const CrmPipelineResolvers = {
  Query: {
    getCrmPipeline: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmPipeline", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmPipelines: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmPipeline", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
