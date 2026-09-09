export const AiEvaluationsScheduleGqlTypeDefs = `
  type AiEvaluationsSchedule {
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
    getAiEvaluationsSchedule(id: ID!): AiEvaluationsSchedule
    listAiEvaluationsSchedules(tenantId: String!, limit: Int): [AiEvaluationsSchedule!]!
  }

  extend type Mutation {
    createAiEvaluationsSchedule(tenantId: String!, code: String!, name: String!): AiEvaluationsSchedule!
    deleteAiEvaluationsSchedule(id: ID!): Boolean!
  }
`;

export const AiEvaluationsScheduleGqlResolvers = {
  Query: {
    getAiEvaluationsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
