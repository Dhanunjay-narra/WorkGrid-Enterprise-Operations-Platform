export const EvtConsumerGroupTypeDefs = `
  type EvtConsumerGroup {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtConsumerGroup(id: ID!): EvtConsumerGroup
    listEvtConsumerGroups(tenantId: String!): [EvtConsumerGroup!]!
  }
`;

export const EvtConsumerGroupResolvers = {
  Query: {
    getEvtConsumerGroup: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtConsumerGroup", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtConsumerGroups: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtConsumerGroup", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
