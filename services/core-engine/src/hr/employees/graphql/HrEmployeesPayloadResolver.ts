export const HrEmployeesPayloadGqlTypeDefs = `
  type HrEmployeesPayload {
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
    getHrEmployeesPayload(id: ID!): HrEmployeesPayload
    listHrEmployeesPayloads(tenantId: String!, limit: Int): [HrEmployeesPayload!]!
  }

  extend type Mutation {
    createHrEmployeesPayload(tenantId: String!, code: String!, name: String!): HrEmployeesPayload!
    deleteHrEmployeesPayload(id: ID!): Boolean!
  }
`;

export const HrEmployeesPayloadGqlResolvers = {
  Query: {
    getHrEmployeesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
