export const AiGatewaySnapshotGqlTypeDefs = `
  type AiGatewaySnapshot {
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
    getAiGatewaySnapshot(id: ID!): AiGatewaySnapshot
    listAiGatewaySnapshots(tenantId: String!, limit: Int): [AiGatewaySnapshot!]!
  }

  extend type Mutation {
    createAiGatewaySnapshot(tenantId: String!, code: String!, name: String!): AiGatewaySnapshot!
    deleteAiGatewaySnapshot(id: ID!): Boolean!
  }
`;

export const AiGatewaySnapshotGqlResolvers = {
  Query: {
    getAiGatewaySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewaySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
