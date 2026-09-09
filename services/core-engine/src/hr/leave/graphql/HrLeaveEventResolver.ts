export const HrLeaveEventGqlTypeDefs = `
  type HrLeaveEvent {
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
    getHrLeaveEvent(id: ID!): HrLeaveEvent
    listHrLeaveEvents(tenantId: String!, limit: Int): [HrLeaveEvent!]!
  }

  extend type Mutation {
    createHrLeaveEvent(tenantId: String!, code: String!, name: String!): HrLeaveEvent!
    deleteHrLeaveEvent(id: ID!): Boolean!
  }
`;

export const HrLeaveEventGqlResolvers = {
  Query: {
    getHrLeaveEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
