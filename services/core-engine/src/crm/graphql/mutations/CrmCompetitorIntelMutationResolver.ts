export const CrmCompetitorIntelMutationTypeDefs = `
  input CreateCrmCompetitorIntelInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmCompetitorIntel(input: CreateCrmCompetitorIntelInput!): CrmCompetitorIntel!
    deleteCrmCompetitorIntel(id: ID!): Boolean!
  }
`;

export const CrmCompetitorIntelMutationResolvers = {
  Mutation: {
    createCrmCompetitorIntel: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmCompetitorIntel: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
