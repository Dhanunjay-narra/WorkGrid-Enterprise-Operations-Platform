export const SupSatisfactionReportMutationTypeDefs = `
  input CreateSupSatisfactionReportInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupSatisfactionReport(input: CreateSupSatisfactionReportInput!): SupSatisfactionReport!
    deleteSupSatisfactionReport(id: ID!): Boolean!
  }
`;

export const SupSatisfactionReportMutationResolvers = {
  Mutation: {
    createSupSatisfactionReport: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupSatisfactionReport: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
