export const SupCustomerSurveyMutationTypeDefs = `
  input CreateSupCustomerSurveyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupCustomerSurvey(input: CreateSupCustomerSurveyInput!): SupCustomerSurvey!
    deleteSupCustomerSurvey(id: ID!): Boolean!
  }
`;

export const SupCustomerSurveyMutationResolvers = {
  Mutation: {
    createSupCustomerSurvey: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupCustomerSurvey: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
