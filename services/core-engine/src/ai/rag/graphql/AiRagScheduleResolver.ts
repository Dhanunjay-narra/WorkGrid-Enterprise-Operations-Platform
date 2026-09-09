export const AiRagScheduleGqlTypeDefs = `
  type AiRagSchedule {
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
    getAiRagSchedule(id: ID!): AiRagSchedule
    listAiRagSchedules(tenantId: String!, limit: Int): [AiRagSchedule!]!
  }

  extend type Mutation {
    createAiRagSchedule(tenantId: String!, code: String!, name: String!): AiRagSchedule!
    deleteAiRagSchedule(id: ID!): Boolean!
  }
`;

export const AiRagScheduleGqlResolvers = {
  Query: {
    getAiRagSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
