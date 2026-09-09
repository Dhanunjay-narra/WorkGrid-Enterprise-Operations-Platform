export const AiGatewayRecordGqlTypeDefs = `
  type AiGatewayRecord {
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
    getAiGatewayRecord(id: ID!): AiGatewayRecord
    listAiGatewayRecords(tenantId: String!, limit: Int): [AiGatewayRecord!]!
  }

  extend type Mutation {
    createAiGatewayRecord(tenantId: String!, code: String!, name: String!): AiGatewayRecord!
    deleteAiGatewayRecord(id: ID!): Boolean!
  }
`;

export const AiGatewayRecordGqlResolvers = {
  Query: {
    getAiGatewayRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
