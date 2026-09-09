export const HrShiftsPayloadGqlTypeDefs = `
  type HrShiftsPayload {
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
    getHrShiftsPayload(id: ID!): HrShiftsPayload
    listHrShiftsPayloads(tenantId: String!, limit: Int): [HrShiftsPayload!]!
  }

  extend type Mutation {
    createHrShiftsPayload(tenantId: String!, code: String!, name: String!): HrShiftsPayload!
    deleteHrShiftsPayload(id: ID!): Boolean!
  }
`;

export const HrShiftsPayloadGqlResolvers = {
  Query: {
    getHrShiftsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
