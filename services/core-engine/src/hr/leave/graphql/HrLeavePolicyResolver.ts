export const HrLeavePolicyGqlTypeDefs = `
  type HrLeavePolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getHrLeavePolicy(id: ID!): HrLeavePolicy
    listHrLeavePolicys(tenantId: String!, limit: Int): [HrLeavePolicy!]!
  }

  extend type Mutation {
    createHrLeavePolicy(tenantId: String!, code: String!, name: String!): HrLeavePolicy!
    deleteHrLeavePolicy(id: ID!): Boolean!
  }
`;

export const HrLeavePolicyGqlResolvers = {
  Query: {
    getHrLeavePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeavePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
