export const SupportSurveysEventGqlTypeDefs = `
  type SupportSurveysEvent {
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
    getSupportSurveysEvent(id: ID!): SupportSurveysEvent
    listSupportSurveysEvents(tenantId: String!, limit: Int): [SupportSurveysEvent!]!
  }

  extend type Mutation {
    createSupportSurveysEvent(tenantId: String!, code: String!, name: String!): SupportSurveysEvent!
    deleteSupportSurveysEvent(id: ID!): Boolean!
  }
`;

export const SupportSurveysEventGqlResolvers = {
  Query: {
    getSupportSurveysEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
