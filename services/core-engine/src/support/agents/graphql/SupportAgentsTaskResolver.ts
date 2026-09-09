export const SupportAgentsTaskGqlTypeDefs = `
  type SupportAgentsTask {
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
    getSupportAgentsTask(id: ID!): SupportAgentsTask
    listSupportAgentsTasks(tenantId: String!, limit: Int): [SupportAgentsTask!]!
  }

  extend type Mutation {
    createSupportAgentsTask(tenantId: String!, code: String!, name: String!): SupportAgentsTask!
    deleteSupportAgentsTask(id: ID!): Boolean!
  }
`;

export const SupportAgentsTaskGqlResolvers = {
  Query: {
    getSupportAgentsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
