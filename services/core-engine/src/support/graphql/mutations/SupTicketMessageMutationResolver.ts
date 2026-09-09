export const SupTicketMessageMutationTypeDefs = `
  input CreateSupTicketMessageInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupTicketMessage(input: CreateSupTicketMessageInput!): SupTicketMessage!
    deleteSupTicketMessage(id: ID!): Boolean!
  }
`;

export const SupTicketMessageMutationResolvers = {
  Mutation: {
    createSupTicketMessage: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupTicketMessage: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
