export const SupTicketTagMutationTypeDefs = `
  input CreateSupTicketTagInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupTicketTag(input: CreateSupTicketTagInput!): SupTicketTag!
    deleteSupTicketTag(id: ID!): Boolean!
  }
`;

export const SupTicketTagMutationResolvers = {
  Mutation: {
    createSupTicketTag: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupTicketTag: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
