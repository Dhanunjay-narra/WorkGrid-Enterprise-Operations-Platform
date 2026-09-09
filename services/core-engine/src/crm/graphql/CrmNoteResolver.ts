export const CrmNoteTypeDefs = `
  type CrmNote {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmNote(id: ID!): CrmNote
    listCrmNotes(tenantId: String!): [CrmNote!]!
  }
`;

export const CrmNoteResolvers = {
  Query: {
    getCrmNote: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmNote", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmNotes: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmNote", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
