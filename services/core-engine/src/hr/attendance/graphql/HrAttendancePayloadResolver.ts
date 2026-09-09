export const HrAttendancePayloadGqlTypeDefs = `
  type HrAttendancePayload {
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
    getHrAttendancePayload(id: ID!): HrAttendancePayload
    listHrAttendancePayloads(tenantId: String!, limit: Int): [HrAttendancePayload!]!
  }

  extend type Mutation {
    createHrAttendancePayload(tenantId: String!, code: String!, name: String!): HrAttendancePayload!
    deleteHrAttendancePayload(id: ID!): Boolean!
  }
`;

export const HrAttendancePayloadGqlResolvers = {
  Query: {
    getHrAttendancePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendancePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
