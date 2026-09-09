export const SecThreatEventMutationTypeDefs = `
  input CreateSecThreatEventInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecThreatEvent(input: CreateSecThreatEventInput!): SecThreatEvent!
    deleteSecThreatEvent(id: ID!): Boolean!
  }
`;

export const SecThreatEventMutationResolvers = {
  Mutation: {
    createSecThreatEvent: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecThreatEvent: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
