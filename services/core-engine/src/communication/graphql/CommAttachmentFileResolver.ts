export const CommAttachmentFileTypeDefs = `
  type CommAttachmentFile {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommAttachmentFile(id: ID!): CommAttachmentFile
    listCommAttachmentFiles(tenantId: String!): [CommAttachmentFile!]!
  }
`;

export const CommAttachmentFileResolvers = {
  Query: {
    getCommAttachmentFile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommAttachmentFile", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommAttachmentFiles: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommAttachmentFile", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
