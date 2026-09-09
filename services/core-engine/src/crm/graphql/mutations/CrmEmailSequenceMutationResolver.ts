export const CrmEmailSequenceMutationTypeDefs = `
  input CreateCrmEmailSequenceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmEmailSequence(input: CreateCrmEmailSequenceInput!): CrmEmailSequence!
    deleteCrmEmailSequence(id: ID!): Boolean!
  }
`;

export const CrmEmailSequenceMutationResolvers = {
  Mutation: {
    createCrmEmailSequence: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmEmailSequence: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
