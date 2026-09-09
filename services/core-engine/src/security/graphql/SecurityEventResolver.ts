export const SecurityEventGqlTypeDefs = `
  type SecurityEvent {
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
    getSecurityEvent(id: ID!): SecurityEvent
    listSecurityEvents(tenantId: String!, limit: Int): [SecurityEvent!]!
  }

  extend type Mutation {
    createSecurityEvent(tenantId: String!, code: String!, name: String!): SecurityEvent!
    deleteSecurityEvent(id: ID!): Boolean!
  }
`;

export const SecurityEventGqlResolvers = {
  Query: {
    getSecurityEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
