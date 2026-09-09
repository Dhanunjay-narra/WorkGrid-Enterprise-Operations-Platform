export const SupTicketMutationTypeDefs = `
  input CreateSupTicketInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupTicket(input: CreateSupTicketInput!): SupTicket!
    deleteSupTicket(id: ID!): Boolean!
  }
`;

export const SupTicketMutationResolvers = {
  Mutation: {
    createSupTicket: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupTicket: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
