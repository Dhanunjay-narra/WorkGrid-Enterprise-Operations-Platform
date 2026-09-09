export const DocOcrExtractedDataMutationTypeDefs = `
  input CreateDocOcrExtractedDataInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocOcrExtractedData(input: CreateDocOcrExtractedDataInput!): DocOcrExtractedData!
    deleteDocOcrExtractedData(id: ID!): Boolean!
  }
`;

export const DocOcrExtractedDataMutationResolvers = {
  Mutation: {
    createDocOcrExtractedData: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocOcrExtractedData: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
