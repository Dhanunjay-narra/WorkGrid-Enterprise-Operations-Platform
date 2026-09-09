export const DmsRetentionEventGqlTypeDefs = `
  type DmsRetentionEvent {
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
    getDmsRetentionEvent(id: ID!): DmsRetentionEvent
    listDmsRetentionEvents(tenantId: String!, limit: Int): [DmsRetentionEvent!]!
  }

  extend type Mutation {
    createDmsRetentionEvent(tenantId: String!, code: String!, name: String!): DmsRetentionEvent!
    deleteDmsRetentionEvent(id: ID!): Boolean!
  }
`;

export const DmsRetentionEventGqlResolvers = {
  Query: {
    getDmsRetentionEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
