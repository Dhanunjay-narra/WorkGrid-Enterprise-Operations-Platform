export const AiPromptsScheduleGqlTypeDefs = `
  type AiPromptsSchedule {
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
    getAiPromptsSchedule(id: ID!): AiPromptsSchedule
    listAiPromptsSchedules(tenantId: String!, limit: Int): [AiPromptsSchedule!]!
  }

  extend type Mutation {
    createAiPromptsSchedule(tenantId: String!, code: String!, name: String!): AiPromptsSchedule!
    deleteAiPromptsSchedule(id: ID!): Boolean!
  }
`;

export const AiPromptsScheduleGqlResolvers = {
  Query: {
    getAiPromptsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
