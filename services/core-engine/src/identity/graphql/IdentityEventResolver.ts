export const IdentityEventGqlTypeDefs = `
  type IdentityEvent {
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
    getIdentityEvent(id: ID!): IdentityEvent
    listIdentityEvents(tenantId: String!, limit: Int): [IdentityEvent!]!
  }

  extend type Mutation {
    createIdentityEvent(tenantId: String!, code: String!, name: String!): IdentityEvent!
    deleteIdentityEvent(id: ID!): Boolean!
  }
`;

export const IdentityEventGqlResolvers = {
  Query: {
    getIdentityEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
