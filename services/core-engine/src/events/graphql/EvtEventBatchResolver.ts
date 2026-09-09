export const EvtEventBatchTypeDefs = `
  type EvtEventBatch {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtEventBatch(id: ID!): EvtEventBatch
    listEvtEventBatchs(tenantId: String!): [EvtEventBatch!]!
  }
`;

export const EvtEventBatchResolvers = {
  Query: {
    getEvtEventBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtEventBatch", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtEventBatchs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtEventBatch", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
