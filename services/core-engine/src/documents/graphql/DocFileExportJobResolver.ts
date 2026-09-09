export const DocFileExportJobTypeDefs = `
  type DocFileExportJob {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocFileExportJob(id: ID!): DocFileExportJob
    listDocFileExportJobs(tenantId: String!): [DocFileExportJob!]!
  }
`;

export const DocFileExportJobResolvers = {
  Query: {
    getDocFileExportJob: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocFileExportJob", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocFileExportJobs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocFileExportJob", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
