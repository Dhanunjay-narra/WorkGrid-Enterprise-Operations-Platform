export const SecBlockedIpRecordMutationTypeDefs = `
  input CreateSecBlockedIpRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecBlockedIpRecord(input: CreateSecBlockedIpRecordInput!): SecBlockedIpRecord!
    deleteSecBlockedIpRecord(id: ID!): Boolean!
  }
`;

export const SecBlockedIpRecordMutationResolvers = {
  Mutation: {
    createSecBlockedIpRecord: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecBlockedIpRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
