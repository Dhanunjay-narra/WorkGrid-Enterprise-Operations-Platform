export const HrLeaveMappingGqlTypeDefs = `
  type HrLeaveMapping {
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
    getHrLeaveMapping(id: ID!): HrLeaveMapping
    listHrLeaveMappings(tenantId: String!, limit: Int): [HrLeaveMapping!]!
  }

  extend type Mutation {
    createHrLeaveMapping(tenantId: String!, code: String!, name: String!): HrLeaveMapping!
    deleteHrLeaveMapping(id: ID!): Boolean!
  }
`;

export const HrLeaveMappingGqlResolvers = {
  Query: {
    getHrLeaveMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
