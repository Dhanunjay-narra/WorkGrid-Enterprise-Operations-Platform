export const SupSlaPolicyMutationTypeDefs = `
  input CreateSupSlaPolicyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupSlaPolicy(input: CreateSupSlaPolicyInput!): SupSlaPolicy!
    deleteSupSlaPolicy(id: ID!): Boolean!
  }
`;

export const SupSlaPolicyMutationResolvers = {
  Mutation: {
    createSupSlaPolicy: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupSlaPolicy: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
