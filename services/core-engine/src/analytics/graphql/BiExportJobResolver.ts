export const BiExportJobTypeDefs = `
  type BiExportJob {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiExportJob(id: ID!): BiExportJob
    listBiExportJobs(tenantId: String!): [BiExportJob!]!
  }
`;

export const BiExportJobResolvers = {
  Query: {
    getBiExportJob: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiExportJob", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiExportJobs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiExportJob", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
