export const HrPayrollPayloadGqlTypeDefs = `
  type HrPayrollPayload {
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
    getHrPayrollPayload(id: ID!): HrPayrollPayload
    listHrPayrollPayloads(tenantId: String!, limit: Int): [HrPayrollPayload!]!
  }

  extend type Mutation {
    createHrPayrollPayload(tenantId: String!, code: String!, name: String!): HrPayrollPayload!
    deleteHrPayrollPayload(id: ID!): Boolean!
  }
`;

export const HrPayrollPayloadGqlResolvers = {
  Query: {
    getHrPayrollPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
