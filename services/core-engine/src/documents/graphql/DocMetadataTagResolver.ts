export const DocMetadataTagTypeDefs = `
  type DocMetadataTag {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocMetadataTag(id: ID!): DocMetadataTag
    listDocMetadataTags(tenantId: String!): [DocMetadataTag!]!
  }
`;

export const DocMetadataTagResolvers = {
  Query: {
    getDocMetadataTag: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocMetadataTag", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocMetadataTags: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocMetadataTag", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
