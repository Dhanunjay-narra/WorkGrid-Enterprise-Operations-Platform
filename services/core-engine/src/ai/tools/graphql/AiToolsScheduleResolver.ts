export const AiToolsScheduleGqlTypeDefs = `
  type AiToolsSchedule {
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
    getAiToolsSchedule(id: ID!): AiToolsSchedule
    listAiToolsSchedules(tenantId: String!, limit: Int): [AiToolsSchedule!]!
  }

  extend type Mutation {
    createAiToolsSchedule(tenantId: String!, code: String!, name: String!): AiToolsSchedule!
    deleteAiToolsSchedule(id: ID!): Boolean!
  }
`;

export const AiToolsScheduleGqlResolvers = {
  Query: {
    getAiToolsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
