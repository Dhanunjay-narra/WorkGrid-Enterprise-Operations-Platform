export const FinJournalEntryMutationTypeDefs = `
  input CreateFinJournalEntryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinJournalEntry(input: CreateFinJournalEntryInput!): FinJournalEntry!
    deleteFinJournalEntry(id: ID!): Boolean!
  }
`;

export const FinJournalEntryMutationResolvers = {
  Mutation: {
    createFinJournalEntry: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinJournalEntry: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
