export const EvtEventPartitionTypeDefs = `
  type EvtEventPartition {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtEventPartition(id: ID!): EvtEventPartition
    listEvtEventPartitions(tenantId: String!): [EvtEventPartition!]!
  }
`;

export const EvtEventPartitionResolvers = {
  Query: {
    getEvtEventPartition: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtEventPartition", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtEventPartitions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtEventPartition", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
