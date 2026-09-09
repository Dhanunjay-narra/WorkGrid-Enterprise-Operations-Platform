export const CommDigestEventGqlTypeDefs = `
  type CommDigestEvent {
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
    getCommDigestEvent(id: ID!): CommDigestEvent
    listCommDigestEvents(tenantId: String!, limit: Int): [CommDigestEvent!]!
  }

  extend type Mutation {
    createCommDigestEvent(tenantId: String!, code: String!, name: String!): CommDigestEvent!
    deleteCommDigestEvent(id: ID!): Boolean!
  }
`;

export const CommDigestEventGqlResolvers = {
  Query: {
    getCommDigestEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
