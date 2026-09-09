export const SecDeviceTrustRecordMutationTypeDefs = `
  input CreateSecDeviceTrustRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecDeviceTrustRecord(input: CreateSecDeviceTrustRecordInput!): SecDeviceTrustRecord!
    deleteSecDeviceTrustRecord(id: ID!): Boolean!
  }
`;

export const SecDeviceTrustRecordMutationResolvers = {
  Mutation: {
    createSecDeviceTrustRecord: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecDeviceTrustRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
