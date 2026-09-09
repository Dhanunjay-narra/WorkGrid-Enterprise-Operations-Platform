export const EvtDeadLetterEventMutationTypeDefs = `
  input CreateEvtDeadLetterEventInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtDeadLetterEvent(input: CreateEvtDeadLetterEventInput!): EvtDeadLetterEvent!
    deleteEvtDeadLetterEvent(id: ID!): Boolean!
  }
`;

export const EvtDeadLetterEventMutationResolvers = {
  Mutation: {
    createEvtDeadLetterEvent: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtDeadLetterEvent: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
