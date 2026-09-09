export const HrDepartmentsPayloadGqlTypeDefs = `
  type HrDepartmentsPayload {
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
    getHrDepartmentsPayload(id: ID!): HrDepartmentsPayload
    listHrDepartmentsPayloads(tenantId: String!, limit: Int): [HrDepartmentsPayload!]!
  }

  extend type Mutation {
    createHrDepartmentsPayload(tenantId: String!, code: String!, name: String!): HrDepartmentsPayload!
    deleteHrDepartmentsPayload(id: ID!): Boolean!
  }
`;

export const HrDepartmentsPayloadGqlResolvers = {
  Query: {
    getHrDepartmentsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
