export const AiGatewayProfileGqlTypeDefs = `
  type AiGatewayProfile {
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
    getAiGatewayProfile(id: ID!): AiGatewayProfile
    listAiGatewayProfiles(tenantId: String!, limit: Int): [AiGatewayProfile!]!
  }

  extend type Mutation {
    createAiGatewayProfile(tenantId: String!, code: String!, name: String!): AiGatewayProfile!
    deleteAiGatewayProfile(id: ID!): Boolean!
  }
`;

export const AiGatewayProfileGqlResolvers = {
  Query: {
    getAiGatewayProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
