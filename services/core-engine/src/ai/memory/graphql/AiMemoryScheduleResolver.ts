export const AiMemoryScheduleGqlTypeDefs = `
  type AiMemorySchedule {
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
    getAiMemorySchedule(id: ID!): AiMemorySchedule
    listAiMemorySchedules(tenantId: String!, limit: Int): [AiMemorySchedule!]!
  }

  extend type Mutation {
    createAiMemorySchedule(tenantId: String!, code: String!, name: String!): AiMemorySchedule!
    deleteAiMemorySchedule(id: ID!): Boolean!
  }
`;

export const AiMemoryScheduleGqlResolvers = {
  Query: {
    getAiMemorySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemorySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
