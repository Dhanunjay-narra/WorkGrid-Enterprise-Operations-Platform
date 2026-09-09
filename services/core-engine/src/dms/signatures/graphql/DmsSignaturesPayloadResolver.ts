export const DmsSignaturesPayloadGqlTypeDefs = `
  type DmsSignaturesPayload {
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
    getDmsSignaturesPayload(id: ID!): DmsSignaturesPayload
    listDmsSignaturesPayloads(tenantId: String!, limit: Int): [DmsSignaturesPayload!]!
  }

  extend type Mutation {
    createDmsSignaturesPayload(tenantId: String!, code: String!, name: String!): DmsSignaturesPayload!
    deleteDmsSignaturesPayload(id: ID!): Boolean!
  }
`;

export const DmsSignaturesPayloadGqlResolvers = {
  Query: {
    getDmsSignaturesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
