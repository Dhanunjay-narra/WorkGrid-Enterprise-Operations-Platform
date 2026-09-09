export const HrPerformancePayloadGqlTypeDefs = `
  type HrPerformancePayload {
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
    getHrPerformancePayload(id: ID!): HrPerformancePayload
    listHrPerformancePayloads(tenantId: String!, limit: Int): [HrPerformancePayload!]!
  }

  extend type Mutation {
    createHrPerformancePayload(tenantId: String!, code: String!, name: String!): HrPerformancePayload!
    deleteHrPerformancePayload(id: ID!): Boolean!
  }
`;

export const HrPerformancePayloadGqlResolvers = {
  Query: {
    getHrPerformancePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformancePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
