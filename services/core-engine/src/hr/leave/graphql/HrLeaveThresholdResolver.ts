export const HrLeaveThresholdGqlTypeDefs = `
  type HrLeaveThreshold {
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
    getHrLeaveThreshold(id: ID!): HrLeaveThreshold
    listHrLeaveThresholds(tenantId: String!, limit: Int): [HrLeaveThreshold!]!
  }

  extend type Mutation {
    createHrLeaveThreshold(tenantId: String!, code: String!, name: String!): HrLeaveThreshold!
    deleteHrLeaveThreshold(id: ID!): Boolean!
  }
`;

export const HrLeaveThresholdGqlResolvers = {
  Query: {
    getHrLeaveThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
