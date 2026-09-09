export const IntOauthEventGqlTypeDefs = `
  type IntOauthEvent {
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
    getIntOauthEvent(id: ID!): IntOauthEvent
    listIntOauthEvents(tenantId: String!, limit: Int): [IntOauthEvent!]!
  }

  extend type Mutation {
    createIntOauthEvent(tenantId: String!, code: String!, name: String!): IntOauthEvent!
    deleteIntOauthEvent(id: ID!): Boolean!
  }
`;

export const IntOauthEventGqlResolvers = {
  Query: {
    getIntOauthEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
