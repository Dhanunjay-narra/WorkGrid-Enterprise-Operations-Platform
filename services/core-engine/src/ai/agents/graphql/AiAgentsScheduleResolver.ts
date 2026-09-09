export const AiAgentsScheduleGqlTypeDefs = `
  type AiAgentsSchedule {
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
    getAiAgentsSchedule(id: ID!): AiAgentsSchedule
    listAiAgentsSchedules(tenantId: String!, limit: Int): [AiAgentsSchedule!]!
  }

  extend type Mutation {
    createAiAgentsSchedule(tenantId: String!, code: String!, name: String!): AiAgentsSchedule!
    deleteAiAgentsSchedule(id: ID!): Boolean!
  }
`;

export const AiAgentsScheduleGqlResolvers = {
  Query: {
    getAiAgentsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
