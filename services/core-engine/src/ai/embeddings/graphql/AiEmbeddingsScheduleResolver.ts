export const AiEmbeddingsScheduleGqlTypeDefs = `
  type AiEmbeddingsSchedule {
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
    getAiEmbeddingsSchedule(id: ID!): AiEmbeddingsSchedule
    listAiEmbeddingsSchedules(tenantId: String!, limit: Int): [AiEmbeddingsSchedule!]!
  }

  extend type Mutation {
    createAiEmbeddingsSchedule(tenantId: String!, code: String!, name: String!): AiEmbeddingsSchedule!
    deleteAiEmbeddingsSchedule(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsScheduleGqlResolvers = {
  Query: {
    getAiEmbeddingsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
