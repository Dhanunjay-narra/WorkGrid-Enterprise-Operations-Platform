export const CommCallsEventGqlTypeDefs = `
  type CommCallsEvent {
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
    getCommCallsEvent(id: ID!): CommCallsEvent
    listCommCallsEvents(tenantId: String!, limit: Int): [CommCallsEvent!]!
  }

  extend type Mutation {
    createCommCallsEvent(tenantId: String!, code: String!, name: String!): CommCallsEvent!
    deleteCommCallsEvent(id: ID!): Boolean!
  }
`;

export const CommCallsEventGqlResolvers = {
  Query: {
    getCommCallsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
