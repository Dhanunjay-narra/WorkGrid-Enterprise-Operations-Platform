export const EvtAckReceiptMutationTypeDefs = `
  input CreateEvtAckReceiptInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtAckReceipt(input: CreateEvtAckReceiptInput!): EvtAckReceipt!
    deleteEvtAckReceipt(id: ID!): Boolean!
  }
`;

export const EvtAckReceiptMutationResolvers = {
  Mutation: {
    createEvtAckReceipt: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtAckReceipt: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
