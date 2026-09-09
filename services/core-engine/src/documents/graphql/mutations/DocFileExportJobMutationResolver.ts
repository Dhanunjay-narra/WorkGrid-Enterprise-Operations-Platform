export const DocFileExportJobMutationTypeDefs = `
  input CreateDocFileExportJobInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocFileExportJob(input: CreateDocFileExportJobInput!): DocFileExportJob!
    deleteDocFileExportJob(id: ID!): Boolean!
  }
`;

export const DocFileExportJobMutationResolvers = {
  Mutation: {
    createDocFileExportJob: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocFileExportJob: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
