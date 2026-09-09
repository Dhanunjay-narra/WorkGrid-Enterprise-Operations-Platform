export const IntSlackEventGqlTypeDefs = `
  type IntSlackEvent {
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
    getIntSlackEvent(id: ID!): IntSlackEvent
    listIntSlackEvents(tenantId: String!, limit: Int): [IntSlackEvent!]!
  }

  extend type Mutation {
    createIntSlackEvent(tenantId: String!, code: String!, name: String!): IntSlackEvent!
    deleteIntSlackEvent(id: ID!): Boolean!
  }
`;

export const IntSlackEventGqlResolvers = {
  Query: {
    getIntSlackEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
