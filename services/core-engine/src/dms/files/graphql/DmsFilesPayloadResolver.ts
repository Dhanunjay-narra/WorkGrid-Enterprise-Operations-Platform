export const DmsFilesPayloadGqlTypeDefs = `
  type DmsFilesPayload {
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
    getDmsFilesPayload(id: ID!): DmsFilesPayload
    listDmsFilesPayloads(tenantId: String!, limit: Int): [DmsFilesPayload!]!
  }

  extend type Mutation {
    createDmsFilesPayload(tenantId: String!, code: String!, name: String!): DmsFilesPayload!
    deleteDmsFilesPayload(id: ID!): Boolean!
  }
`;

export const DmsFilesPayloadGqlResolvers = {
  Query: {
    getDmsFilesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
