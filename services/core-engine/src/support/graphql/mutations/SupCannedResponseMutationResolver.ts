export const SupCannedResponseMutationTypeDefs = `
  input CreateSupCannedResponseInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupCannedResponse(input: CreateSupCannedResponseInput!): SupCannedResponse!
    deleteSupCannedResponse(id: ID!): Boolean!
  }
`;

export const SupCannedResponseMutationResolvers = {
  Mutation: {
    createSupCannedResponse: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupCannedResponse: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
