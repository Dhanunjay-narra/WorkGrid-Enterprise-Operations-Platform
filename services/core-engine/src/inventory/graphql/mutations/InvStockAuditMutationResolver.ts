export const InvStockAuditMutationTypeDefs = `
  input CreateInvStockAuditInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvStockAudit(input: CreateInvStockAuditInput!): InvStockAudit!
    deleteInvStockAudit(id: ID!): Boolean!
  }
`;

export const InvStockAuditMutationResolvers = {
  Mutation: {
    createInvStockAudit: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvStockAudit: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
