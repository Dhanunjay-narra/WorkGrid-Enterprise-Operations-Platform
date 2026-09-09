export const EvtStreamSnapshotMutationTypeDefs = `
  input CreateEvtStreamSnapshotInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtStreamSnapshot(input: CreateEvtStreamSnapshotInput!): EvtStreamSnapshot!
    deleteEvtStreamSnapshot(id: ID!): Boolean!
  }
`;

export const EvtStreamSnapshotMutationResolvers = {
  Mutation: {
    createEvtStreamSnapshot: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtStreamSnapshot: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
