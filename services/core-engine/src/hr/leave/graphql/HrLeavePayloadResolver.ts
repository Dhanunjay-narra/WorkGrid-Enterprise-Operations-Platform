export const HrLeavePayloadGqlTypeDefs = `
  type HrLeavePayload {
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
    getHrLeavePayload(id: ID!): HrLeavePayload
    listHrLeavePayloads(tenantId: String!, limit: Int): [HrLeavePayload!]!
  }

  extend type Mutation {
    createHrLeavePayload(tenantId: String!, code: String!, name: String!): HrLeavePayload!
    deleteHrLeavePayload(id: ID!): Boolean!
  }
`;

export const HrLeavePayloadGqlResolvers = {
  Query: {
    getHrLeavePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeavePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
