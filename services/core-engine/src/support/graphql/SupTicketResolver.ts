export const SupTicketTypeDefs = `
  type SupTicket {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupTicket(id: ID!): SupTicket
    listSupTickets(tenantId: String!): [SupTicket!]!
  }
`;

export const SupTicketResolvers = {
  Query: {
    getSupTicket: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupTicket", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupTickets: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupTicket", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
