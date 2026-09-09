export const DmsVersionsPayloadGqlTypeDefs = `
  type DmsVersionsPayload {
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
    getDmsVersionsPayload(id: ID!): DmsVersionsPayload
    listDmsVersionsPayloads(tenantId: String!, limit: Int): [DmsVersionsPayload!]!
  }

  extend type Mutation {
    createDmsVersionsPayload(tenantId: String!, code: String!, name: String!): DmsVersionsPayload!
    deleteDmsVersionsPayload(id: ID!): Boolean!
  }
`;

export const DmsVersionsPayloadGqlResolvers = {
  Query: {
    getDmsVersionsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
