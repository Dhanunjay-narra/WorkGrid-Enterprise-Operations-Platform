export const PrjWorkloadCapacityMutationTypeDefs = `
  input CreatePrjWorkloadCapacityInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjWorkloadCapacity(input: CreatePrjWorkloadCapacityInput!): PrjWorkloadCapacity!
    deletePrjWorkloadCapacity(id: ID!): Boolean!
  }
`;

export const PrjWorkloadCapacityMutationResolvers = {
  Mutation: {
    createPrjWorkloadCapacity: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjWorkloadCapacity: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
