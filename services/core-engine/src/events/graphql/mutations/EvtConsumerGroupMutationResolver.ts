export const EvtConsumerGroupMutationTypeDefs = `
  input CreateEvtConsumerGroupInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtConsumerGroup(input: CreateEvtConsumerGroupInput!): EvtConsumerGroup!
    deleteEvtConsumerGroup(id: ID!): Boolean!
  }
`;

export const EvtConsumerGroupMutationResolvers = {
  Mutation: {
    createEvtConsumerGroup: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtConsumerGroup: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
