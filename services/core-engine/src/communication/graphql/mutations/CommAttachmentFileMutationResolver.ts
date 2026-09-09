export const CommAttachmentFileMutationTypeDefs = `
  input CreateCommAttachmentFileInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommAttachmentFile(input: CreateCommAttachmentFileInput!): CommAttachmentFile!
    deleteCommAttachmentFile(id: ID!): Boolean!
  }
`;

export const CommAttachmentFileMutationResolvers = {
  Mutation: {
    createCommAttachmentFile: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommAttachmentFile: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
