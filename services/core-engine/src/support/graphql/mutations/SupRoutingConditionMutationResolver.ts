export const SupRoutingConditionMutationTypeDefs = `
  input CreateSupRoutingConditionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupRoutingCondition(input: CreateSupRoutingConditionInput!): SupRoutingCondition!
    deleteSupRoutingCondition(id: ID!): Boolean!
  }
`;

export const SupRoutingConditionMutationResolvers = {
  Mutation: {
    createSupRoutingCondition: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupRoutingCondition: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
