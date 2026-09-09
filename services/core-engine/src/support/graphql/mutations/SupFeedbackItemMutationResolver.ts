export const SupFeedbackItemMutationTypeDefs = `
  input CreateSupFeedbackItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupFeedbackItem(input: CreateSupFeedbackItemInput!): SupFeedbackItem!
    deleteSupFeedbackItem(id: ID!): Boolean!
  }
`;

export const SupFeedbackItemMutationResolvers = {
  Mutation: {
    createSupFeedbackItem: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupFeedbackItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
