export const SupRoutingConditionTypeDefs = `
  type SupRoutingCondition {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupRoutingCondition(id: ID!): SupRoutingCondition
    listSupRoutingConditions(tenantId: String!): [SupRoutingCondition!]!
  }
`;

export const SupRoutingConditionResolvers = {
  Query: {
    getSupRoutingCondition: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupRoutingCondition", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupRoutingConditions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupRoutingCondition", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
