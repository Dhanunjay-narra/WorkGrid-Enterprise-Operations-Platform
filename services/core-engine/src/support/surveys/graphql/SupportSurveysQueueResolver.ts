export const SupportSurveysQueueGqlTypeDefs = `
  type SupportSurveysQueue {
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
    getSupportSurveysQueue(id: ID!): SupportSurveysQueue
    listSupportSurveysQueues(tenantId: String!, limit: Int): [SupportSurveysQueue!]!
  }

  extend type Mutation {
    createSupportSurveysQueue(tenantId: String!, code: String!, name: String!): SupportSurveysQueue!
    deleteSupportSurveysQueue(id: ID!): Boolean!
  }
`;

export const SupportSurveysQueueGqlResolvers = {
  Query: {
    getSupportSurveysQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
