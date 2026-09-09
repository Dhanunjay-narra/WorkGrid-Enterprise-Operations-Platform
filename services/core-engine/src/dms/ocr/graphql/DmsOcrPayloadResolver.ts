export const DmsOcrPayloadGqlTypeDefs = `
  type DmsOcrPayload {
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
    getDmsOcrPayload(id: ID!): DmsOcrPayload
    listDmsOcrPayloads(tenantId: String!, limit: Int): [DmsOcrPayload!]!
  }

  extend type Mutation {
    createDmsOcrPayload(tenantId: String!, code: String!, name: String!): DmsOcrPayload!
    deleteDmsOcrPayload(id: ID!): Boolean!
  }
`;

export const DmsOcrPayloadGqlResolvers = {
  Query: {
    getDmsOcrPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
