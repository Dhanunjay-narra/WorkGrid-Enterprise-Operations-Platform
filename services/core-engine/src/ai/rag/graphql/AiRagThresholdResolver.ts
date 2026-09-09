export const AiRagThresholdGqlTypeDefs = `
  type AiRagThreshold {
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
    getAiRagThreshold(id: ID!): AiRagThreshold
    listAiRagThresholds(tenantId: String!, limit: Int): [AiRagThreshold!]!
  }

  extend type Mutation {
    createAiRagThreshold(tenantId: String!, code: String!, name: String!): AiRagThreshold!
    deleteAiRagThreshold(id: ID!): Boolean!
  }
`;

export const AiRagThresholdGqlResolvers = {
  Query: {
    getAiRagThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
