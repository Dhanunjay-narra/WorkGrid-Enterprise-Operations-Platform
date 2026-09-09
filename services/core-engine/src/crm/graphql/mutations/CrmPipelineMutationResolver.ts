export const CrmPipelineMutationTypeDefs = `
  input CreateCrmPipelineInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmPipeline(input: CreateCrmPipelineInput!): CrmPipeline!
    deleteCrmPipeline(id: ID!): Boolean!
  }
`;

export const CrmPipelineMutationResolvers = {
  Mutation: {
    createCrmPipeline: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmPipeline: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
