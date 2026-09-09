export const EvtReplayJobTypeDefs = `
  type EvtReplayJob {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtReplayJob(id: ID!): EvtReplayJob
    listEvtReplayJobs(tenantId: String!): [EvtReplayJob!]!
  }
`;

export const EvtReplayJobResolvers = {
  Query: {
    getEvtReplayJob: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtReplayJob", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtReplayJobs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtReplayJob", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
