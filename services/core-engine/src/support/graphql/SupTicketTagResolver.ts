export const SupTicketTagTypeDefs = `
  type SupTicketTag {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupTicketTag(id: ID!): SupTicketTag
    listSupTicketTags(tenantId: String!): [SupTicketTag!]!
  }
`;

export const SupTicketTagResolvers = {
  Query: {
    getSupTicketTag: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupTicketTag", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupTicketTags: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupTicketTag", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
