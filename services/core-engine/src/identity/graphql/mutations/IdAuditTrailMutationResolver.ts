export const IdAuditTrailMutationTypeDefs = `
  input CreateIdAuditTrailInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdAuditTrail(input: CreateIdAuditTrailInput!): IdAuditTrail!
    deleteIdAuditTrail(id: ID!): Boolean!
  }
`;

export const IdAuditTrailMutationResolvers = {
  Mutation: {
    createIdAuditTrail: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdAuditTrail: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
