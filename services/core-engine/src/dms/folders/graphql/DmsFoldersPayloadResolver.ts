export const DmsFoldersPayloadGqlTypeDefs = `
  type DmsFoldersPayload {
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
    getDmsFoldersPayload(id: ID!): DmsFoldersPayload
    listDmsFoldersPayloads(tenantId: String!, limit: Int): [DmsFoldersPayload!]!
  }

  extend type Mutation {
    createDmsFoldersPayload(tenantId: String!, code: String!, name: String!): DmsFoldersPayload!
    deleteDmsFoldersPayload(id: ID!): Boolean!
  }
`;

export const DmsFoldersPayloadGqlResolvers = {
  Query: {
    getDmsFoldersPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
