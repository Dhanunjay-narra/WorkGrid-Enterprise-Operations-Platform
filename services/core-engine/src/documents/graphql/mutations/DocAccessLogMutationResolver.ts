export const DocAccessLogMutationTypeDefs = `
  input CreateDocAccessLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocAccessLog(input: CreateDocAccessLogInput!): DocAccessLog!
    deleteDocAccessLog(id: ID!): Boolean!
  }
`;

export const DocAccessLogMutationResolvers = {
  Mutation: {
    createDocAccessLog: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocAccessLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
