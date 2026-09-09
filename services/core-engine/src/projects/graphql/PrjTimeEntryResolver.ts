export const PrjTimeEntryTypeDefs = `
  type PrjTimeEntry {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjTimeEntry(id: ID!): PrjTimeEntry
    listPrjTimeEntrys(tenantId: String!): [PrjTimeEntry!]!
  }
`;

export const PrjTimeEntryResolvers = {
  Query: {
    getPrjTimeEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjTimeEntry", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjTimeEntrys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjTimeEntry", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
