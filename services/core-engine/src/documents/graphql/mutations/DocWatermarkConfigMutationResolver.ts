export const DocWatermarkConfigMutationTypeDefs = `
  input CreateDocWatermarkConfigInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocWatermarkConfig(input: CreateDocWatermarkConfigInput!): DocWatermarkConfig!
    deleteDocWatermarkConfig(id: ID!): Boolean!
  }
`;

export const DocWatermarkConfigMutationResolvers = {
  Mutation: {
    createDocWatermarkConfig: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocWatermarkConfig: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
