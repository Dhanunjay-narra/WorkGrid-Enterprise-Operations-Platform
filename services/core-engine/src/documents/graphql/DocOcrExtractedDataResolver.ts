export const DocOcrExtractedDataTypeDefs = `
  type DocOcrExtractedData {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocOcrExtractedData(id: ID!): DocOcrExtractedData
    listDocOcrExtractedDatas(tenantId: String!): [DocOcrExtractedData!]!
  }
`;

export const DocOcrExtractedDataResolvers = {
  Query: {
    getDocOcrExtractedData: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocOcrExtractedData", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocOcrExtractedDatas: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocOcrExtractedData", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
