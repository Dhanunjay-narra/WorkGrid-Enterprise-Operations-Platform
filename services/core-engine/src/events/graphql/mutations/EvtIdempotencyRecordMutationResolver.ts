export const EvtIdempotencyRecordMutationTypeDefs = `
  input CreateEvtIdempotencyRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtIdempotencyRecord(input: CreateEvtIdempotencyRecordInput!): EvtIdempotencyRecord!
    deleteEvtIdempotencyRecord(id: ID!): Boolean!
  }
`;

export const EvtIdempotencyRecordMutationResolvers = {
  Mutation: {
    createEvtIdempotencyRecord: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtIdempotencyRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
