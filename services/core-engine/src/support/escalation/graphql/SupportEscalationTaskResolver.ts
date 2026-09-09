export const SupportEscalationTaskGqlTypeDefs = `
  type SupportEscalationTask {
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
    getSupportEscalationTask(id: ID!): SupportEscalationTask
    listSupportEscalationTasks(tenantId: String!, limit: Int): [SupportEscalationTask!]!
  }

  extend type Mutation {
    createSupportEscalationTask(tenantId: String!, code: String!, name: String!): SupportEscalationTask!
    deleteSupportEscalationTask(id: ID!): Boolean!
  }
`;

export const SupportEscalationTaskGqlResolvers = {
  Query: {
    getSupportEscalationTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
