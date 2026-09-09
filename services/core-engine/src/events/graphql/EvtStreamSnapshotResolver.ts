export const EvtStreamSnapshotTypeDefs = `
  type EvtStreamSnapshot {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtStreamSnapshot(id: ID!): EvtStreamSnapshot
    listEvtStreamSnapshots(tenantId: String!): [EvtStreamSnapshot!]!
  }
`;

export const EvtStreamSnapshotResolvers = {
  Query: {
    getEvtStreamSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtStreamSnapshot", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtStreamSnapshots: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtStreamSnapshot", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
