export const DocChunkIndexMutationTypeDefs = `
  input CreateDocChunkIndexInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocChunkIndex(input: CreateDocChunkIndexInput!): DocChunkIndex!
    deleteDocChunkIndex(id: ID!): Boolean!
  }
`;

export const DocChunkIndexMutationResolvers = {
  Mutation: {
    createDocChunkIndex: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocChunkIndex: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
