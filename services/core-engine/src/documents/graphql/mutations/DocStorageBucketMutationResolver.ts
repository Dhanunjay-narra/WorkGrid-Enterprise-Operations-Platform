export const DocStorageBucketMutationTypeDefs = `
  input CreateDocStorageBucketInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocStorageBucket(input: CreateDocStorageBucketInput!): DocStorageBucket!
    deleteDocStorageBucket(id: ID!): Boolean!
  }
`;

export const DocStorageBucketMutationResolvers = {
  Mutation: {
    createDocStorageBucket: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocStorageBucket: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
