export const HrShiftsEventGqlTypeDefs = `
  type HrShiftsEvent {
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
    getHrShiftsEvent(id: ID!): HrShiftsEvent
    listHrShiftsEvents(tenantId: String!, limit: Int): [HrShiftsEvent!]!
  }

  extend type Mutation {
    createHrShiftsEvent(tenantId: String!, code: String!, name: String!): HrShiftsEvent!
    deleteHrShiftsEvent(id: ID!): Boolean!
  }
`;

export const HrShiftsEventGqlResolvers = {
  Query: {
    getHrShiftsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
