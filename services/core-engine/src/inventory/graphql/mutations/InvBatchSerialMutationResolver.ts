export const InvBatchSerialMutationTypeDefs = `
  input CreateInvBatchSerialInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvBatchSerial(input: CreateInvBatchSerialInput!): InvBatchSerial!
    deleteInvBatchSerial(id: ID!): Boolean!
  }
`;

export const InvBatchSerialMutationResolvers = {
  Mutation: {
    createInvBatchSerial: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvBatchSerial: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
