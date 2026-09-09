export const PrjTimeEntryMutationTypeDefs = `
  input CreatePrjTimeEntryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjTimeEntry(input: CreatePrjTimeEntryInput!): PrjTimeEntry!
    deletePrjTimeEntry(id: ID!): Boolean!
  }
`;

export const PrjTimeEntryMutationResolvers = {
  Mutation: {
    createPrjTimeEntry: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjTimeEntry: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
