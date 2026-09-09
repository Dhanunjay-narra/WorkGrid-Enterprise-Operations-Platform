export const CrmNoteMutationTypeDefs = `
  input CreateCrmNoteInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmNote(input: CreateCrmNoteInput!): CrmNote!
    deleteCrmNote(id: ID!): Boolean!
  }
`;

export const CrmNoteMutationResolvers = {
  Mutation: {
    createCrmNote: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmNote: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
