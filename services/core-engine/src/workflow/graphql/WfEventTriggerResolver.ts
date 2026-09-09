export const WfEventTriggerTypeDefs = `
  type WfEventTrigger {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfEventTrigger(id: ID!): WfEventTrigger
    listWfEventTriggers(tenantId: String!): [WfEventTrigger!]!
  }
`;

export const WfEventTriggerResolvers = {
  Query: {
    getWfEventTrigger: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfEventTrigger", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfEventTriggers: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfEventTrigger", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
