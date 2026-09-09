export const SupportKnowledgeScheduleGqlTypeDefs = `
  type SupportKnowledgeSchedule {
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
    getSupportKnowledgeSchedule(id: ID!): SupportKnowledgeSchedule
    listSupportKnowledgeSchedules(tenantId: String!, limit: Int): [SupportKnowledgeSchedule!]!
  }

  extend type Mutation {
    createSupportKnowledgeSchedule(tenantId: String!, code: String!, name: String!): SupportKnowledgeSchedule!
    deleteSupportKnowledgeSchedule(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeScheduleGqlResolvers = {
  Query: {
    getSupportKnowledgeSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
