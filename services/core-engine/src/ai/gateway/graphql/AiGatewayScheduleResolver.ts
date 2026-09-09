export const AiGatewayScheduleGqlTypeDefs = `
  type AiGatewaySchedule {
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
    getAiGatewaySchedule(id: ID!): AiGatewaySchedule
    listAiGatewaySchedules(tenantId: String!, limit: Int): [AiGatewaySchedule!]!
  }

  extend type Mutation {
    createAiGatewaySchedule(tenantId: String!, code: String!, name: String!): AiGatewaySchedule!
    deleteAiGatewaySchedule(id: ID!): Boolean!
  }
`;

export const AiGatewayScheduleGqlResolvers = {
  Query: {
    getAiGatewaySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewaySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
