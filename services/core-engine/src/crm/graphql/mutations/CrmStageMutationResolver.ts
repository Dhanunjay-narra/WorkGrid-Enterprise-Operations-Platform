export const CrmStageMutationTypeDefs = `
  input CreateCrmStageInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmStage(input: CreateCrmStageInput!): CrmStage!
    deleteCrmStage(id: ID!): Boolean!
  }
`;

export const CrmStageMutationResolvers = {
  Mutation: {
    createCrmStage: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmStage: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
