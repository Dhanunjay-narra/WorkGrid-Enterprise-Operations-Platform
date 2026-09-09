export const CommThreadsEventGqlTypeDefs = `
  type CommThreadsEvent {
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
    getCommThreadsEvent(id: ID!): CommThreadsEvent
    listCommThreadsEvents(tenantId: String!, limit: Int): [CommThreadsEvent!]!
  }

  extend type Mutation {
    createCommThreadsEvent(tenantId: String!, code: String!, name: String!): CommThreadsEvent!
    deleteCommThreadsEvent(id: ID!): Boolean!
  }
`;

export const CommThreadsEventGqlResolvers = {
  Query: {
    getCommThreadsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
