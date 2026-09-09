export const HrPerformanceEventGqlTypeDefs = `
  type HrPerformanceEvent {
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
    getHrPerformanceEvent(id: ID!): HrPerformanceEvent
    listHrPerformanceEvents(tenantId: String!, limit: Int): [HrPerformanceEvent!]!
  }

  extend type Mutation {
    createHrPerformanceEvent(tenantId: String!, code: String!, name: String!): HrPerformanceEvent!
    deleteHrPerformanceEvent(id: ID!): Boolean!
  }
`;

export const HrPerformanceEventGqlResolvers = {
  Query: {
    getHrPerformanceEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
