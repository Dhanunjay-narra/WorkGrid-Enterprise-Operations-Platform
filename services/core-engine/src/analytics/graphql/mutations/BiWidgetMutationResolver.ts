export const BiWidgetMutationTypeDefs = `
  input CreateBiWidgetInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiWidget(input: CreateBiWidgetInput!): BiWidget!
    deleteBiWidget(id: ID!): Boolean!
  }
`;

export const BiWidgetMutationResolvers = {
  Mutation: {
    createBiWidget: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiWidget: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
